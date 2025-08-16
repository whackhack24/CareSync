import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import "./Trends.css";

const data = [
  { month: "Jan", sleep: 6.2, glucose: 110, steps: 5000, nutrition: 2000 },
  { month: "Feb", sleep: 6.8, glucose: 108, steps: 6200, nutrition: 2100 },
  { month: "Mar", sleep: 7.1, glucose: 106, steps: 7000, nutrition: 2200 },
  { month: "Apr", sleep: 7.4, glucose: 104, steps: 7500, nutrition: 2300 },
  { month: "May", sleep: 7.0, glucose: 107, steps: 6800, nutrition: 2150 },
  { month: "Jun", sleep: 7.6, glucose: 103, steps: 8200, nutrition: 2400 },
  { month: "Jul", sleep: 7.8, glucose: 102, steps: 9000, nutrition: 2500 },
  { month: "Aug", sleep: 8.0, glucose: 101, steps: 9500, nutrition: 2600 },
];

export default function Trends() {
  return (
    <div className="trends-grid">
      {/* HRV Example (Line) */}
      <div className="trend-card">
        <h3>HRV</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: "#555" }} // 👈 months visible karne ke liye
                interval={0} // 👈 har month dikhane ke liye
            />
            <YAxis />
            <Line type="monotone" dataKey="sleep" stroke="rgba(255, 61, 61, 1)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Blood Pressure Example (Line) */}
      <div className="trend-card">
        <h3>Blood Pressure</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: "#555" }} // 👈 months visible karne ke liye
                interval={0} // 👈 har month dikhane ke liye
            />
            <YAxis />
            <Line type="monotone" dataKey="glucose" stroke="rgba(133, 73, 64, 1)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Glucose */}
      <div className="trend-card">
        <h3>Glucose</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: "#555" }} // 👈 months visible karne ke liye
                interval={0} // 👈 har month dikhane ke liye
            />
            <YAxis />
            <Line type="monotone" dataKey="glucose" stroke="rgba(251, 255, 0, 1)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sleep (Bar chart) */}
      <div className="trend-card">
        <h3>Sleep</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: "#555" }} // 👈 months visible karne ke liye
                interval={0} // 👈 har month dikhane ke liye
            />
            <YAxis />
            <Line type="monotone" dataKey="sleep" stroke="rgba(109, 54, 133, 1)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Steps */}
      <div className="trend-card">
        <h3>Steps</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: "#555" }} // 👈 months visible karne ke liye
                interval={0} // 👈 har month dikhane ke liye
            />
            <YAxis />
            <Line type="monotone" dataKey="steps" stroke="rgba(235, 218, 181, 1)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Nutrition */}
      <div className="trend-card">
        <h3>Nutrition</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: "#555" }} // 👈 months visible karne ke liye
                interval={0} // 👈 har month dikhane ke liye
            />
            <YAxis />
            <Line type="monotone" dataKey="nutrition" stroke="rgba(36,156,40,1)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
