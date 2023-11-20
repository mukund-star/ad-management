/* eslint-disable react/prop-types */
import { useState, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function TabularWidget({ columnsConfig, data, widgetTitle }) {
  const gridRef = useRef();
  const [columnDefs] = useState(columnsConfig);
  const [rowData] = useState(data);
  //   const [isTabular, setIsTabular] = useState(true);
  const onGridReady = useCallback((params) => {
    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
    // gridRef.current.api.sizeColumnsToFit();
  }, []);

  return (
    <div className="border-base-gray border-2 h-[297px] bg-white rounded-md m-3 mt-72">
      <div className="padding px-1.5 py-1 border-b">
        {widgetTitle}

        <span className="text-faded-black float-right cursor-pointer mr-2">
          <select>
            <option value="">Clicks</option>
          </select>
        </span>
      </div>

      <div>
        <div className="ag-theme-alpine" style={{ width: "100%", height: 225 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            onGridReady={onGridReady}
            // groupIncludeFooter={groupIncludeFooter}
            // groupIncludeTotalFooter={groupIncludeTotalFooter}
            animateRows={true}
          />
        </div>
      </div>
    </div>
  );
}
