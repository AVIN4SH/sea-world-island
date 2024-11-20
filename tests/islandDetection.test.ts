import { countIslands } from "../src/utils/islandDetection";
import { Grid } from "../src/utils/gridUtils";

describe("islandDetection", () => {
  it("correctly counts islands", () => {
    const grid: Grid = [
      ["empty", "filled", "empty", "filled"],
      ["filled", "filled", "empty", "filled"],
      ["empty", "empty", "empty", "empty"],
      ["filled", "empty", "filled", "filled"],
    ];

    expect(countIslands(grid)).toBe(4);
  });

  it("returns 0 for an empty grid", () => {
    const grid: Grid = [
      ["empty", "empty"],
      ["empty", "empty"],
    ];

    expect(countIslands(grid)).toBe(0);
  });

  it("returns 1 for a fully filled grid", () => {
    const grid: Grid = [
      ["filled", "filled"],
      ["filled", "filled"],
    ];

    expect(countIslands(grid)).toBe(1);
  });
});
