import ReactApexChart from "react-apexcharts";
import { useState } from "react";
interface Props {
  cpuBytes: Array<number>;
  cpuTime: Array<string>;
  defaultValue?: string;
  isBoolean: boolean;
  title: string;
}
const ApexCharts = ({
  cpuBytes,
  cpuTime,
  defaultValue,
  isBoolean,
  title,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const options = {
    stroke: { width: 1, colors: ["#A700CB"] },
    chart: {
      id: "line-chart",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "",
        data: cpuBytes,
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#6E0EAD", "#FFFFFF"], // Gradient color stops
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.3,
        stops: [0, 100], // Gradient offsets (%)
      },
    },
    xaxis: {
      categories: cpuTime,
    },
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold mr-3 whitespace-nowrap">{title}</h2>
        <div className="flex w-full justify-end items-center">
          {isBoolean && <h2 className="text-lg mr-3">Periods</h2>}
          {isBoolean && (
            <select
              value={selectedOption}
              onChange={handleChange}
              style={{ width: "100px" }}
              className="mr-3"
            >
              <option value="option1">1 hour</option>
              <option value="option2">2 hour</option>
              <option value="option3">3 hour</option>
            </select>
          )}
          <button className="bg-green-600 rounded text-white font-semibold w-[80px] h-[40px]">
            Export
          </button>
        </div>
      </div>
      <ReactApexChart
        options={options}
        series={options.series}
        type="area"
        height={300}
        width={550}
      />
    </div>
  );
};

export default ApexCharts;
