import Card from "../components/Card";
import "./Dashboard.css"
export default function Dashboard() {
  return (
    <div class="content">
      <Card title="HRV" value="91" unit="ms" link="https://www.vhv.rs/dpng/d/491-4914517_heart-rate-svg-png-icon-free-download-heart.png" style={{
          background:
            "linear-gradient(180deg, rgba(255, 61, 61, 1) 0%, rgba(255, 179, 179, 1) 50%, rgba(255, 230, 230, 1) 100%)",
        }}/>
      <Card title="Blood Pressure" value="120/80" unit="mmHg" link="https://cdn-icons-png.flaticon.com/512/4482/4482348.png" style={{
          background:
            "linear-gradient(180deg, rgba(99, 57, 57, 1) 0%, rgba(128, 108, 108, 1) 50%, rgba(145, 145, 145, 1) 100%)",
        }} />
      <Card title="Glucose" value="105" unit="mg/dL" link="https://png.pngtree.com/png-vector/20200518/ourmid/pngtree-hand-with-medical-blood-glucose-measurement-monitor-png-image_2207810.jpg" style={{
          background:
            "linear-gradient(180deg, rgba(255, 231, 125, 1) 0%, rgba(255, 251, 196, 1) 50%, rgba(255, 255, 255, 1) 100%)",
        }}/>
      <Card title="Sleep" value="7" unit="hrs" link="https://www.clipartmax.com/png/middle/20-204037_sleep-icon-clipart-sleeping-icon-png.png" style={{
          background:
            "linear-gradient(180deg, rgba(109, 54, 133, 1) 0%, rgba(178, 161, 196, 1) 50%, rgba(244, 217, 255, 1) 100%)",
        }}/>
      <Card title="Steps" value="8,500" unit="steps" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFz7veKeXFvbwOgKSnBtpAp-yak3HK6MiV0g&s" style={{
          background:
            "linear-gradient(180deg, rgba(250, 185, 72, 1) 0%, rgba(235, 218, 181, 1) 50%, rgba(255, 255, 255, 1) 100%)",
        }}/>
      <Card title="Nutrition" value="1800" unit="kcal" link="https://www.vhv.rs/dpng/d/490-4909519_healthy-food-flat-png-clipart-png-download-healthy.png"  style={{
          background:
            "linear-gradient(180deg, rgba(45, 127, 250, 1) 0%, rgba(181, 211, 235, 1) 50%, rgba(242, 250, 255, 1) 100%)",
        }}/>
    </div>
  );
}
