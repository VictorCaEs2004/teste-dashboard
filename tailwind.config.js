{import('tailwindcss').Config}
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts";

// Dados de tráfego identificados no dashboard
const trafficData = [
  { name: "Twitter", value: 66.8, color: "#4A90E2" },
  { name: "SSL/TLS", value: 24.9, color: "#50E3C2" },
  { name: "LinkedIn", value: 14.8, color: "#F5A623" },
  { name: "iCloud", value: 9.22, color: "#D0021B" },
];

const Dashboard = () => {
  return (
    // Container principal do dashboard com um layout responsivo e estilizado
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
      {/* Card para exibição do tráfego identificado */}
      <Card className="shadow-lg rounded-xl bg-white p-4">
        <CardHeader>
          <CardTitle className="text-gray-800">Traffic Identification</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <PieChart width={200} height={200}>
            {/* Gráfico de pizza exibindo os dados de tráfego */}
            <Pie data={trafficData} dataKey="value" outerRadius={80}>
              {trafficData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip /> {/* Exibe informações ao passar o mouse sobre o gráfico */}
          </PieChart>
        </CardContent>
      </Card>

      {/* Card para exibição dos clientes mais ativos */}
      <Card className="shadow-lg rounded-xl bg-white p-4">
        <CardHeader>
          <CardTitle className="text-gray-800">Most Active Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-gray-700">
            <li>96:37:12:86... - Device 1</li>
            <li>32:0c:1b:49... - Device 2</li>
          </ul>
        </CardContent>
      </Card>

      {/* Card para exibição da atividade da internet ao longo do tempo */}
      <Card className="shadow-lg rounded-xl bg-white p-4">
        <CardHeader>
          <CardTitle className="text-gray-800">Internet Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart width={300} height={150} data={[{ name: "12AM", value: 10 }, { name: "6AM", value: 20 }, { name: "12PM", value: 15 }]}> 
            <XAxis dataKey="name" className="text-gray-600" /> {/* Define o eixo X do gráfico */}
            <YAxis className="text-gray-600" /> {/* Define o eixo Y do gráfico */}
            <Bar dataKey="value" fill="#8884d8" radius={[8, 8, 0, 0]} /> {/* Define a cor e os dados das barras */}
          </BarChart>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
