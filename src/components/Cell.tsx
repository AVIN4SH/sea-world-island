import React from "react";
import { CellState } from "../utils/gridUtils";

interface CellProps {
  state: CellState;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ state, onClick }) => {
  return (
    <div
      className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border border-gray-200 dark:border-gray-600 transition-colors duration-200 ease-in-out ${
        state === "empty" ? "bg-sea" : "bg-land"
      }`}
      onClick={onClick}
    />
  );
};

export default Cell;
