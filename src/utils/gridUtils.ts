export type CellState = "empty" | "filled";

export type Grid = CellState[][];

export const createEmptyGrid = (width: number, height: number): Grid => {
  return Array(height)
    .fill(null)
    .map(() => Array(width).fill("empty"));
};

export const toggleCell = (grid: Grid, x: number, y: number): Grid => {
  const newGrid = grid.map((row) => [...row]);
  newGrid[y][x] = newGrid[y][x] === "empty" ? "filled" : "empty";
  return newGrid;
};

export const countFilledCells = (grid: Grid): number => {
  return grid.flat().filter((cell) => cell === "filled").length;
};
