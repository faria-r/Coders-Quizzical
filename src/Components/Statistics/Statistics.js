import React from "react";
import { useLoaderData } from "react-router-dom";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  const allData = data.data;
  const singleData = allData.map((data) => {
    const chartData = {
      name: data.name,
      total: data.total,
    };
    return chartData;
  });
  return (
    <div className="sm:w-3/4  sm:mx-auto lg:w-1/2 lg:mx-auto my-16 ">
      <BarChart width={450} height={400} data={allData}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Statistics;
