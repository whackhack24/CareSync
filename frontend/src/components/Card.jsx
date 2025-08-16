import "./Card.css"
export default function Card({ title, value, unit, link, style, chart }) {
  return (
    <div class="container" style={style}>
      <h2>{title}</h2>
      <img src={link} alt="" />
      <p>{value} {unit}</p>
      <div>{chart}</div>
    </div>
  );
}
