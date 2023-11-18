/* eslint-disable react/prop-types */
import { useState, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { Chart } from "react-google-charts";
import { MdDonutLarge } from "react-icons/md";
import { MdOutlineTableChart } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function GraphicalWidget({ columnsConfig, data, widgetTitle }) {
  const gridRef = useRef();
  const [columnDefs] = useState(columnsConfig);
  const [rowData] = useState(data);
  const [isGraphVisible, setIsGraphVisible] = useState(true);
  const onGridReady = useCallback((params) => {
    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
    gridRef.current.api.sizeColumnsToFit();
  }, []);
  const groupIncludeFooter = true;
  const groupIncludeTotalFooter = true;
  const graphData = [
    ["Group", "Percentage"],
    ["40% Male", 40],
    ["35% Female", 35],
    ["25% Unknown", 25],
  ];

  const graphOptions = {
    title: "",
    pieHole: 0.6,
    is3D: false,
    colors: ["#ff823c", "#0096ff", "#323c46"],
  };

  function changeView(viewName) {
    if (viewName === "graph") {
      setIsGraphVisible(true);
    } else {
      setIsGraphVisible(false);
    }
  }
  return (
    <div className="border-base-gray border-2 h-[297px] bg-white rounded-md m-3 mt-72">
      <div className="padding px-1.5 py-1 border-b">
        {widgetTitle}
        <span>
          <BiHelpCircle className="text-faded-black float-right cursor-pointer h-6 w-6" />
        </span>
        <span className="text-faded-black float-right cursor-pointer mr-2">
          <select>
            <option value="">Clicks</option>
          </select>
        </span>
      </div>
      {!isGraphVisible ? (
        <div>
          <div
            className="ag-theme-alpine"
            style={{ width: "100%", height: 225 }}
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              onGridReady={onGridReady}
              groupIncludeFooter={groupIncludeFooter}
              groupIncludeTotalFooter={groupIncludeTotalFooter}
              animateRows={true}
            />
          </div>
        </div>
      ) : (
        <div style={{ width: "100%", height: 225 }}>
          <Chart
            chartType="PieChart"
            width="100%"
            height="225px"
            data={graphData}
            options={graphOptions}
          />
        </div>
      )}
      <div className=" m-1 py-1 items-end w-11 rounded-xl bg-base-gray border w-[45px] h-6 float-right cursor-pointer">
        <MdOutlineTableChart
          className={
            !isGraphVisible
              ? "text-sky-blue-shade mr-1 float-right"
              : "mr-1 float-right"
          }
          onClick={() => changeView("table")}
        />
        <MdDonutLarge
          className={
            isGraphVisible
              ? "text-sky-blue-shade mr-1 float-right"
              : "mr-1 float-right"
          }
          onClick={() => changeView("graph")}
        />
      </div>
    </div>
  );
}
