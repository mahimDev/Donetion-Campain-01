import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";


const Statistics = () => {
const[remaining,setRemaining]=useState(100)
const[givenTotal, setGivenTotal]=useState(0)
useEffect(()=>{
    const addItems = JSON.parse(localStorage.getItem('donation'))
   const given = addItems.length * 100 / 12 
   setGivenTotal(given)
   setRemaining(100 - given)
  
},[remaining,givenTotal])


 const data = [{name:"Total Donation",value:remaining},{name:"Your Donation",value:givenTotal}]
 const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const COLORS = ["red","green"]
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <PieChart width={500} height={500}>

                <Pie data={data} dataKey="value" label={renderCustomizedLabel} labelLine={false}  cx="50%"
            cy="50%" nameKey="name"  >
                {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}


                </Pie>
                <Legend></Legend>
            </PieChart>
        </div>
    );
};

export default Statistics;