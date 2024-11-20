import React from "react";
import Cell from "./Cell";
import { Grid as GridType, toggleCell } from "../utils/gridUtils";

interface GridProps {
  grid: GridType;
  setGrid: React.Dispatch<React.SetStateAction<GridType>>;
}

const Grid: React.FC<GridProps> = ({ grid, setGrid }) => {
  const handleCellClick = (x: number, y: number) => {
    setGrid((prevGrid) => toggleCell(prevGrid, x, y));
  };

  return (
    <div className="inline-block border border-gray-300 rounded overflow-hidden">
      {grid.map((row, y) => (
        <div key={y} className="flex">
          {row.map((cell, x) => (
            <Cell
              key={`${x}-${y}`}
              state={cell}
              onClick={() => handleCellClick(x, y)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
