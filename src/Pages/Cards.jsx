import React, { useEffect, useState } from "react";
import { IconFolderDown } from "@tabler/icons-react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ title, type }) => {
  const isDonut = type === "donut";

  const chartOptions = {
    series: isDonut ? [44, 55] : [{ name: "Users", data: [44, 55, 67, 83, 90] }],
    options: {
      chart: {
        type: isDonut ? "donut" : "bar",
        width: 250,
      },
      labels: isDonut ? ["Subscribers", "Non Subscribers"] : undefined,
      colors: isDonut ? ["#344BFD", "#F68D2B"] : ["#007BFF"],
      plotOptions: isDonut
        ? {}
        : {
            bar: {
              horizontal: false,
              columnWidth: "45%",
            },
          },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 180,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="bg-white rounded-md shadow-lg flex flex-col w-full">
      <h3 className="text-sm p-3 font-semibold">{title}</h3>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type={isDonut ? "donut" : "bar"}
        width={260}
      />
    </div>
  );
};

const TableComponent = ({ title, data }) => {
  return (
    <div className="bg-white rounded-md shadow-lg w-full">
      <h3 className="text-lg font-semibold mb-2 text-center bg-[#D9EBFF]">{title}</h3>
      <div className="overflow-y-auto" style={{ maxHeight: "400px" }}>
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b-2 border-gray-300">
              <th className="py-2 px-4 text-left">S.No</th>
              <th className="py-2 text-left">Name</th>
              <th className="py-2 text-left">Phone</th>
              <th className="py-2 text-left">Plan</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.phoneNumber}</td>
                <td className="py-2 text-green-600">{item.plan || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Cards() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://tmpapi.onrender.com/users/getall")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data); // Ensure data is in the expected format
      })
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-y-auto pr-2 text-xs">
      <div className="grid md:grid-cols-4 gap-3 mb-2">
        {["Total User", "Subscriptions", "Total Lead", "Experiment Count"].map((title, index) => (
          <div key={index} className="bg-white flex gap-5 py-3 items-center px-5 rounded-md shadow-md">
            <div className="bg-[#EFEFEF] rounded-full p-2 font-bold">
              <IconFolderDown stroke={2} />
            </div>
            <div>
              <p>{title}</p>
              <p className="font-bold">{index === 2 ? 45 : index === 3 ? 135 : users.length}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-2 mb-2">
        <ApexChart title="Subscribers & Non Subscribers" type="donut" />
        <ApexChart title="User Growth" type="bar" />
      </div>

      <div className="grid md:grid-cols-2 gap-2">
        <TableComponent title="Recent Users" data={users} />
        <TableComponent title="Recent Subscribers" data={users.filter(u => u.plan)} />
      </div>
    </div>
  );
}

export default Cards;
