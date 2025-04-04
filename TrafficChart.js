// src/TrafficChart.js
import TrafficChart from "@/components/TrafficChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import "./index.css"; // Importação do Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);


const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
      {/* Card: Gráfico de Identificação de Tráfego */}
      <Card>
        <CardHeader>
          <CardTitle>Traffic Identification</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <TrafficChart />
        </CardContent>
      </Card>

      {/* Card: Clientes Mais Ativos */}
      <Card>
        <CardHeader>
          <CardTitle>Most Active Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>96:37:12:86... - Device 1</li>
            <li>32:0c:1b:49... - Device 2</li>
          </ul>
        </CardContent>
      </Card>

    </div>
  );
};

