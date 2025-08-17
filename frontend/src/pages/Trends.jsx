import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./Trends.css";
import { useState } from "react";
import { buildChartData } from "../lib/extractMetrics";

export default function Trends({ messages }) {
  // 👇 local state for dropdown filter
  const [selectedMonth, setSelectedMonth] = useState("all");

  // filter apply hoga yaha
  const data = buildChartData(messages, selectedMonth);


  return (
    <div className="trends-grid">
      {/* 🔽 Dropdown filter */}
      <div style={{ gridColumn: "1 / -1", marginBottom: "12px" }}>
        <label style={{ marginRight: "8px" }}>Filter by month:</label>
        <select 
          value={selectedMonth} 
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="all">All Months</option>
          <option value="Jan">January</option>
          <option value="Feb">February</option>
          <option value="Mar">March</option>
          <option value="Apr">April</option>
          <option value="May">May</option>
          <option value="Jun">June</option>
          <option value="Jul">July</option>
          <option value="Aug">August</option>
        </select>
      </div>

      {/* hydration */} 
      <div className="trend-card"> 
        <h3>Hydration</h3> 
        <ResponsiveContainer width="100%" height={200}> 
          <LineChart data={data}> 
            <CartesianGrid strokeDasharray="3 3" /> 
            <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#555" }} // 👈 months visible karne ke liye
            interval={0}// 👈 har month dikhane ke liye 
            /> 
            <YAxis /> 
            <Line type="monotone" dataKey="hydration" stroke="rgba(133, 73, 64, 1)"/> 
            </LineChart> 
            </ResponsiveContainer> 
            </div>

      {/* exercise time */}
      <div className="trend-card">
        <h3>Excercise Time</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#555" }} interval={0} />
            <YAxis />
            <Line type="monotone" dataKey="exercise" stroke="rgba(251, 255, 0, 1)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sleep */}
      <div className="trend-card">
        <h3>Sleep</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#555" }} interval={0} />
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
            <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#555" }} interval={0} />
            <YAxis />
            <Line type="monotone" dataKey="steps" stroke="rgba(255, 174, 0, 1)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
