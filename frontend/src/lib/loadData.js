// src/lib/loadData.js
import january from "../data/january.json";
import february from "../data/february.json";
import march from "../data/march.json";
import april from "../data/april.json";
import may from "../data/may.json";
import june from "../data/june.json";
import july from "../data/july.json";
import august from "../data/august.json";

function enrichData(data) {
  const messages = data.messages.map(m => ({
    ...m,
    _ts: new Date(m.date).getTime()
  }));
  const events = (data.events || []).map(e => ({
    ...e,
    _ts: new Date(e.date).getTime()
  }));
  return { messages, events };
}

export function loadAllData() {
  const allRaw = [january, february, march, april, may, june, july, august];

  return allRaw.reduce(
    (acc, month) => {
      const enriched = enrichData(month);
      return {
        messages: [...acc.messages, ...enriched.messages],
        events: [...acc.events, ...enriched.events],
      };
    },
    { messages: [], events: [] }
  );
}
