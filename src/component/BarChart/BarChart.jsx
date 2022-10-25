import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartcompany = () => {
  const data = [
    {
      name: '1년',
      생존확률: 73.6,
      pv: 100,
    },
    {
      name: '2년',
      생존확률: 97,
      pv: 100,
    },
    {
      name: '3년',
      생존확률: 87,
      pv: 100,
    },
    {
      name: '4년',
      생존확률: 67,
      pv: 100,
    },
    {
      name: '5년',
      생존확률: 22.4,
      pv: 100,
    },
  ];

  return (
    <BarChart
      width={1156}
      height={300}
      data={data}
      margin={{
        top: 30,
        right: 60,
        left: 60,
        bottom: 5,
      }}
      barSize={120}
    >
      <XAxis dataKey='name' scale='point' padding={{ left: 60, right: 60 }} barGap=' 20 ' />
      <Tooltip />
      <Legend />
      <Bar dataKey='생존확률' fill='#F66571' background={{ fill: '#D9D9D9' }} />
    </BarChart>
  );
};

export default BarChartcompany;
