import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <Card title="HRV" value="91" unit="ms" />
      <Card title="Blood Pressure" value="120/80" unit="mmHg" />
      <Card title="Glucose" value="105" unit="mg/dL" />
      <Card title="Sleep" value="7" unit="hrs" />
      <Card title="Steps" value="8,500" unit="steps" />
      <Card title="Nutrition" value="1800" unit="kcal" />
    </div>
  );
}
