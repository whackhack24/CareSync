// src/lib/qaEngine.js
function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleString([], { year: "numeric", month: "short", day: "2-digit" });
}

function findLatestEvent(events, type) {
  const list = (events || []).filter(e => e.type === type);
  return list.length ? list[list.length - 1] : null;
}

function nearbyEvents(events, ts, days = 3) {
  const pad = days * 24 * 60 * 60 * 1000;
  return events.filter(e => Math.abs(e._ts - ts) <= pad);
}

function extractChanges(messages) {
  const diet = messages.filter(m =>
    m.role === "nutritionist" && /(add|increase|reduce|shift)/i.test(m.text)
  );
  const exercise = messages.filter(m =>
    m.role === "fitness_expert" && /(add|increase|reduce|stretch|plank|jog|reminder)/i.test(m.text)
  );
  return { diet, exercise };
}

function buildAnswerForTestWhy(data) {
  // Prefer the latest diagnostic test
  const evt = findLatestEvent(data.events, "diagnostic_test");
  if (!evt) return "I couldn’t find any diagnostic test in the data.";

  let out = `• **Why test** (${formatDate(evt._ts)}): ${evt.reason || "Reason not specified."}`;
  if (evt.description) out += `\n• Summary: ${evt.description}`;
  if (evt.linked_messages?.length) {
    const refs = evt.linked_messages
      .map(id => data.messages.find(m => m.id === id))
      .filter(Boolean)
      .map(m => `  - ${formatDate(m._ts)} • ${m.sender}: ${m.text}`);
    if (refs.length) out += `\n• Related chat:\n${refs.join("\n")}`;
  }
  return out;
}

function buildAnswerForTestResults(data) {
  const evt = findLatestEvent(data.events, "diagnostic_test");
  if (!evt) return "No diagnostic test results found.";
  let out = `• **Latest results** (${formatDate(evt._ts)}): ${evt.description || "No description in event."}`;
  // Also surface any analyst/nutritionist result notes near the event date
  const notes = data.messages.filter(m =>
    (m.role === "analyst" || m.role === "nutritionist") &&
    Math.abs(m._ts - evt._ts) <= 48 * 3600 * 1000 && // ±48h
    /(result|marker|vitamin|iron|inflammation|immunity)/i.test(m.text)
  );
  if (notes.length) {
    out += `\n• Team notes:\n` + notes.map(m => `  - ${formatDate(m._ts)} • ${m.sender}: ${m.text}`).join("\n");
  }
  return out;
}

function buildAnswerForChanges(data, kind = "diet") {
  const { diet, exercise } = extractChanges(data.messages);
  const list = kind === "exercise" ? exercise : diet;
  if (!list.length) return `No ${kind} changes found.`;

  const lines = list.slice(-6).map(m => {
    // Try to infer a nearby trigger (travel/test/review)
    const triggers = nearbyEvents(data.events, m._ts, 5);
    const trigger = triggers[triggers.length - 1];
    const why = trigger ? ` (linked to ${trigger.title} • ${formatDate(trigger._ts)})` : "";
    return `• ${formatDate(m._ts)} • ${m.sender}: ${m.text}${why}`;
  });
  const title = kind === "exercise" ? "Recent exercise changes" : "Recent diet changes";
  return `**${title}:**\n` + lines.join("\n");
}

export function answerQuestion(q, data) {
  const text = q.toLowerCase();

  // 1) “why was the test done” / “why diagnostic”
  if (/(why).*test|diagnostic.*why/.test(text)) {
    return buildAnswerForTestWhy(data);
  }

  // 2) “what were the test results/report”
  if (/test.*(result|report)|result.*test|blood.*result/.test(text)) {
    return buildAnswerForTestResults(data);
  }

  // 3) “what diet changes and why”
  if (/(diet|food|nutrition).*(change|why|update)/.test(text)) {
    return buildAnswerForChanges(data, "diet");
  }

  // 4) “what exercise changes and why”
  if (/(exercise|workout|fitness).*(change|why|update)/.test(text)) {
    return buildAnswerForChanges(data, "exercise");
  }

  // 5) catch: “what changed and why”
  if (/(what).*change.*why/.test(text)) {
    const a = buildAnswerForChanges(data, "diet");
    const b = buildAnswerForChanges(data, "exercise");
    return a + "\n\n" + b;
  }

  // Default help
  return [
    "I can answer things like:",
    "• Why was the diagnostic test done?",
    "• What were the latest test results?",
    "• What diet changes happened and why?",
    "• What exercise changes happened and why?",
  ].join("\n");
}
