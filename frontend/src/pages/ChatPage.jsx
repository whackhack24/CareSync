import january from "../data/january.json";
import february from "../data/february.json";
import march from "../data/march.json";
import april from "../data/april.json";
import may from "../data/may.json";
import june from "../data/june.json";
import july from "../data/july.json";
import august from "../data/august.json";
import ChatViewer from "../components/ChatViewer";
import AssistantPanel from "../components/AssistantPanel";

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

export default function ChatPage() {
  // Merge all months
  const allRaw = [
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august
  ];

  // Enrich each month’s data
  const merged = allRaw.reduce(
    (acc, month) => {
      const enriched = enrichData(month);
      return {
        messages: [...acc.messages, ...enriched.messages],
        events: [...acc.events, ...enriched.events],
      };
    },
    { messages: [], events: [] }
  );

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 16, padding: "16px" }}>
      <div>
        <h2 style={{ color: "#000000", fontSize: "2.5rem", textAlign: "center" }}>Chats</h2>
        <ChatViewer messages={merged.messages} />
      </div>
      
      <AssistantPanel data={merged} />
    </div>
  );
}
