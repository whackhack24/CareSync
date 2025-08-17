import Card from "../components/Card";
import "./Dashboard.css"
export default function Dashboard() {
  return (
    <div class="content">
      <Card title="Hydration" value="105" unit="L" link="https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-water-drop-icon-design-template-vector-isolated-png-image_872517.jpg" style={{
          background:
            "linear-gradient(180deg,rgba(0, 140, 255, 1) 0%, rgba(103, 186, 255, 1) 50%, rgba(177, 220, 255, 1) 100%)",
        }}/>
      <Card title="Sleep" value="7" unit="hrs" link="https://www.clipartmax.com/png/middle/20-204037_sleep-icon-clipart-sleeping-icon-png.png" style={{
          background:
            "linear-gradient(180deg, rgba(109, 54, 133, 1) 0%, rgba(178, 161, 196, 1) 50%, rgba(244, 217, 255, 1) 100%)",
        }}/>
      <Card title="Steps" value="8,500" unit="steps" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFz7veKeXFvbwOgKSnBtpAp-yak3HK6MiV0g&s" style={{
          background:
            "linear-gradient(180deg, rgba(250, 185, 72, 1) 0%, rgba(235, 218, 181, 1) 50%, rgba(255, 255, 255, 1) 100%)",
        }}/>
      <Card title="Exercise Time" value="25" unit="min" link="https://png.pngtree.com/png-clipart/20190925/original/pngtree-exercise-icon-for-your-project-png-image_4891400.jpg"  style={{
         background: "linear-gradient(180deg, rgba(36,156,40,1) 0%, rgba(135,204,135,1) 50%, rgba(216,237,217,1) 100%)"
        }}/>
    </div>
  );
}
