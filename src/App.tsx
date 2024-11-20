import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import Statistics from "./components/Statistics";
import {
  createEmptyGrid,
  Grid as GridType,
  countFilledCells,
} from "./utils/gridUtils";
import { countIslands } from "./utils/islandDetection";

const App: React.FC = () => {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [grid, setGrid] = useState<GridType>(createEmptyGrid(width, height));

  useEffect(() => {
    const newGrid = createEmptyGrid(width, height);
    for (let y = 0; y < Math.min(grid.length, height); y++) {
      for (let x = 0; x < Math.min(grid[0].length, width); x++) {
        newGrid[y][x] = grid[y][x];
      }
    }
    setGrid(newGrid);
  }, [width, height]);

  const filledCells = countFilledCells(grid);
  const islandCount = countIslands(grid);

  return (
    <div className="min-h-screen bg-gray-100 max-sm:py-12 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Sea World Islands
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <Controls
              width={width}
              height={height}
              setWidth={setWidth}
              setHeight={setHeight}
            />
            <div className="mt-6 flex justify-center">
              <Grid grid={grid} setGrid={setGrid} />
            </div>
            <Statistics
              filledCells={filledCells}
              islandCount={islandCount}
              totalCells={width * height}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
