export default function Card({ title, value, unit, chart }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-gray-600 font-medium">{title}</h2>
      <p className="text-2xl font-bold">{value} {unit}</p>
      <div className="mt-2">{chart}</div>
    </div>
  );
}
