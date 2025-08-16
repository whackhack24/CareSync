import january from "./january.json";
import february from "./february.json";
import march from "./march.json";
import april from "./april.json";
import may from "./may.json";
import june from "./june.json";
import july from "./july.json";
import august from "./august.json";

const monthFiles = [january, february, march, april, may, june, july, august];

function toDate(d) {
  // supports "YYYY-MM-DD HH:mm" or "YYYY-MM-DD"
  return new Date(d.replace(" ", "T"));
}

function withDerivedFields(msg) {
  const d = toDate(msg.date);
  const month = d.toLocaleString("default", { month: "long" });
  return { ...msg, _ts: d.getTime(), _month: month };
}

function normalizeEvent(evt) {
  return {
    ...evt,
    _ts: toDate(evt.date).getTime(),
  };
}

const allMessages = monthFiles.flatMap((f) => (f?.messages || []).map(withDerivedFields));
const allEvents   = monthFiles.flatMap((f) => (f?.events || []).map(normalizeEvent));

// Helpful lookups
const eventsByType = allEvents.reduce((acc, e) => {
  (acc[e.type] ||= []).push(e);
  return acc;
}, {});

export const DATA = {
  messages: allMessages.sort((a,b)=>a._ts-b._ts),
  events: allEvents.sort((a,b)=>a._ts-b._ts),
  eventsByType,
};
