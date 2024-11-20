import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import Statistics from "./components/Statistics";
import ThemeToggle from "./components/ThemeToggle";
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const newGrid = createEmptyGrid(width, height);
    for (let y = 0; y < Math.min(grid.length, height); y++) {
      for (let x = 0; x < Math.min(grid[0].length, width); x++) {
        newGrid[y][x] = grid[y][x];
      }
    }
    setGrid(newGrid);
  }, [width, height]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const filledCells = countFilledCells(grid);
  const islandCount = countIslands(grid);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#070707] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Sea World Islands
          </h1>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
        <div className="bg-white dark:bg-[#202020] shadow-lg rounded-lg overflow-hidden transition-colors duration-200">
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
