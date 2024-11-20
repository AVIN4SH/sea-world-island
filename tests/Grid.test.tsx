import { vi } from "vitest";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Grid from "../src/components/Grid";
import { createEmptyGrid } from "../src/utils/gridUtils";

describe("Grid", () => {
  it("renders the correct number of cells", () => {
    const grid = createEmptyGrid(3, 3);
    const { container } = render(<Grid grid={grid} setGrid={() => {}} />);
    expect(container.querySelectorAll(".w-6.h-6")).toHaveLength(9);
  });

  it("toggles cell state on click", () => {
    const grid = createEmptyGrid(3, 3);
    const setGrid = vi.fn();
    const { container } = render(<Grid grid={grid} setGrid={setGrid} />);

    const firstCell = container.querySelector(".w-6.h-6");
    fireEvent.click(firstCell!);

    expect(setGrid).toHaveBeenCalledTimes(1);
    expect(setGrid).toHaveBeenCalledWith(expect.any(Function));
  });
});
