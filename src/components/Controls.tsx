import React from "react";

interface ControlsProps {
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}

const Controls: React.FC<ControlsProps> = ({
  width,
  height,
  setWidth,
  setHeight,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <label className="flex items-center">
        <span className="mr-2 text-gray-700">Width:</span>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Math.max(1, parseInt(e.target.value)))}
          className="w-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </label>
      <label className="flex items-center">
        <span className="mr-2 text-gray-700">Height:</span>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value)))}
          className="w-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </label>
    </div>
  );
};

export default Controls;
