// src/lib/extractMetrics.js

function avg(a) {
  if (!a || !a.length) return null;
  return Math.round((a.reduce((s, x) => s + x, 0) / a.length) * 10) / 10;
}

function parseMetricsFromText(text = "") {
  const t = String(text).toLowerCase();
  let m;

  // Sleep
  let sleep = null;
    if ((m = t.match(/\bslept\s+(\d+(?:\.\d+)?)\s*(?:h|hours)?/i)) || 
    (m = t.match(/sleep[: ]+(\d+(?:\.\d+)?)/i))) {
  sleep = parseFloat(m[1]);
}

  // Steps
  let steps = null;
  if ((m = t.match(/(\d+(?:\.\d+)?)k\s*steps/i))) {
  steps = parseFloat(m[1]) * 1000;
} else if ((m = t.match(/(\d{3,6})\s*steps/i)) || 
           (m = t.match(/step count[: ]+(\d+(?:\.\d+)?)/i))) {
  steps = parseInt(m[1], 10);
}


 // Exercise time (in minutes or hours)
  let exercise = null;
  if ((m = t.match(/exercise[: ]+(\d+(?:\.\d+)?)\s*(?:min|minutes)/i)) || 
      (m = t.match(/(\d+(?:\.\d+)?)\s*min\s*exercise/i)) ||
      (m = t.match(/workout[: ]+(\d+(?:\.\d+)?)\s*(?:h|hours)/i))) {
    exercise = parseFloat(m[1]);
  }

  // Hydration (liters)
  let hydration = null;
  if ((m = t.match(/hydration[: ]+(\d+(?:\.\d+)?)\s*(?:l|liters)/i)) ||
      (m = t.match(/drank\s+(\d+(?:\.\d+)?)\s*(?:l|liters)/i))) {
    hydration = parseFloat(m[1]);
  }


  return { sleep, steps, exercise, hydration };
}



/**
 * Builds chart series from raw messages.
 * If selectedMonth === 'all' → group by month (Jan, Feb…)
 * Else → group by day within that month (01, 02, …)
 */
export function buildChartData(messages = [], selectedMonth = "all") {
  if (!messages.length) return [];

  const byBucket = new Map();
  const firstDate = new Date(messages[0].date);
  const monthShort = (d) => d.toLocaleString("default", { month: "short" });
  const day2 = (d) => String(d.getDate()).padStart(2, "0");

  // If "all" → monthly, else daily within that month
  const groupBy = selectedMonth === "all" ? "month" : "day";

  for (const msg of messages) {
    const d = new Date(msg.date);
    const msgMonth = monthShort(d);

    // Skip messages not in the selected month
    if (groupBy === "day" && msgMonth !== selectedMonth) continue;

    const bucketLabel = groupBy === "month" ? msgMonth : day2(d);
    const bucketKey = groupBy === "month" ? `${d.getFullYear()}-${d.getMonth()}` : `${d.getFullYear()}-${d.getMonth()}-${bucketLabel}`;

    const parsed = parseMetricsFromText(msg.text);


    const existing = byBucket.get(bucketKey) || {
      label: bucketLabel,
      ts: d.getTime(),
      _sleep: [],
      _steps: [],
      _exercise: [],
      _hydration: [],
    };

    if (parsed.sleep   != null) existing._sleep.push(parsed.sleep);
    if (parsed.steps   != null) existing._steps.push(parsed.steps);
    if (parsed.exercise  != null) existing._exercise.push(parsed.exercise);
    if (parsed.hydration != null) existing._hydration.push(parsed.hydration);

    byBucket.set(bucketKey, existing);
  }

  const rows = Array.from(byBucket.values())
    .sort((a, b) => a.ts - b.ts)
    .map((b) => ({
      label: b.label,            // X axis
      sleep:   avg(b._sleep),    // numbers or null (Recharts will gap)
      steps:   avg(b._steps),
      exercise:   avg(b._exercise),
      hydration:avg(b._hydration),
    }));

  return rows;
}
