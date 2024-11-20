import { Grid } from "./gridUtils";

const dfs = (grid: Grid, x: number, y: number, visited: boolean[][]) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= grid[0].length ||
    y >= grid.length ||
    visited[y][x] ||
    grid[y][x] === "empty"
  ) {
    return;
  }

  visited[y][x] = true;

  dfs(grid, x + 1, y, visited);
  dfs(grid, x - 1, y, visited);
  dfs(grid, x, y + 1, visited);
  dfs(grid, x, y - 1, visited);
};

export const countIslands = (grid: Grid): number => {
  const visited: boolean[][] = grid.map((row) => row.map(() => false));
  let islandCount = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === "filled" && !visited[y][x]) {
        dfs(grid, x, y, visited);
        islandCount++;
      }
    }
  }

  return islandCount;
};
