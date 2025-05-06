"use client";

import { useState, useEffect } from "react";

const GRID_SIZE = 20;
const createGrid = () =>
    Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));

const GameOfLife = () => {
    const [grid, setGrid] = useState(createGrid);
    const [isRunning, setIsRunning] = useState(false);

    const toggleCell = (row: number, col: number) => {
        const newGrid = grid.map((r, i) =>
            r.map((cell, j) => (i === row && j === col ? (cell ? 0 : 1) : cell))
        );
        setGrid(newGrid);
    };

    const getNextGeneration = () => {
        const newGrid = createGrid();
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                const neighbors = [
                    [row - 1, col - 1],
                    [row - 1, col],
                    [row - 1, col + 1],
                    [row, col - 1],
                    [row, col + 1],
                    [row + 1, col - 1],
                    [row + 1, col],
                    [row + 1, col + 1],
                ];

                const liveNeighbors = neighbors.reduce((acc, [r, c]) => {
                    if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
                        return acc + grid[r][c];
                    }
                    return acc;
                }, 0);

                if (grid[row][col] === 1) {
                    newGrid[row][col] =
                        liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0;
                } else {
                    newGrid[row][col] = liveNeighbors === 3 ? 1 : 0;
                }
            }
        }
        setGrid(newGrid);
    };

    const generateRandomGrid = () => {
        const newGrid = createGrid().map((row) =>
            row.map(() => (Math.random() > 0.55 ? 1 : 0))
        );
        setGrid(newGrid);
        setIsRunning(false);
    };

    const clearGrid = () => {
        setIsRunning(false);
        setGrid(createGrid());
    };

    const toggleSimulation = () => {
        setIsRunning(!isRunning);
    };

    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => getNextGeneration(), 500);
        return () => clearInterval(interval);
    }, [isRunning, grid]);

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">Conway's Game of Life</h1>
            <div className="flex space-x-4">
                <button
                    onClick={generateRandomGrid}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Generate Random Configuration
                </button>
                <button
                    onClick={clearGrid}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Clear Grid
                </button>
                <button
                    onClick={toggleSimulation}
                    className={`px-4 py-2 rounded text-white ${
                        isRunning
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-green-500 hover:bg-green-600"
                    }`}
                >
                    {isRunning ? "Pause" : "Start"}
                </button>
            </div>
            <div className="grid grid-cols-20 gap-1">
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            onClick={() => toggleCell(rowIndex, colIndex)}
                            className={`w-6 h-6 border ${
                                cell ? "bg-black" : "bg-white"
                            }`}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default GameOfLife;
