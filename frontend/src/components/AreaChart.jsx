'use client';

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


const AreaChartComponent = ({ climbsPerSession }) => {
  return (
    <>
    <p>Climbs per session</p>
    
      <AreaChart
        width={300}
        height={200}
        data={climbsPerSession}
        margin={{ right: 50 }}
      >
        <YAxis dataKey='count' label='No of climbs'/>
        <XAxis dataKey="session" label='Session'/>
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area
          type="monotone"
          dataKey="count"
          stroke="#2563eb"
          fill="purple"
          stackId="1"
        />

        
      </AreaChart>
  
    </>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
         Number of Climbs:
          <span className="ml-2">{payload[0].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;