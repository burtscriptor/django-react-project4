'use client';

import {
  RadarChart,
  Area,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';



const RadarChartComponent = ({ climbsArray }) => {
    return (
        <>

<RadarChart outerRadius={90} width={300} height={200} data={climbsArray}>
  <PolarGrid />
  <PolarAngleAxis dataKey="type" />
  <PolarRadiusAxis angle={30} domain={[0,4]} />
  <Radar name="Climbs by grade" dataKey="grade" stroke="#8884d8" fill=" green" fillOpacity={0.6} />
 
  <Legend />
</RadarChart>

</>

)
}

export default RadarChartComponent;