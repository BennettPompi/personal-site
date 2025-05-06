"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const GRID_WIDTH = 70;
const GRID_HEIGHT = 25;
const CELL_SIZE = 20;
const GRID_SIZE = GRID_HEIGHT * GRID_WIDTH;
const createGrid = () =>
    Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));

const GameOfLife = () => {
    const [grid, setGrid] = useState(createGrid);
    const [isRunning, setIsRunning] = useState(false);
    const [showGridLines, setShowGridLines] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const memoizedGetNextGeneration = useCallback(getNextGeneration, [grid]);

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

    const toggleGridLines = () => {
        setShowGridLines(!showGridLines);
    };

    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => memoizedGetNextGeneration(), 50);
        return () => clearInterval(interval);
    }, [isRunning, memoizedGetNextGeneration]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = GRID_WIDTH * CELL_SIZE * pixelRatio;
        canvas.height = GRID_HEIGHT * CELL_SIZE * pixelRatio;
        canvas.style.width = `${GRID_WIDTH * CELL_SIZE}px`;
        canvas.style.height = `${GRID_HEIGHT * CELL_SIZE}px`;
        ctx.scale(pixelRatio, pixelRatio);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                ctx.fillStyle = grid[row][col] ? "black" : "white";
                ctx.fillRect(
                    col * CELL_SIZE,
                    row * CELL_SIZE,
                    CELL_SIZE,
                    CELL_SIZE
                );
                if (showGridLines) {
                    ctx.strokeStyle = "#ccc";
                    ctx.strokeRect(
                        col * CELL_SIZE,
                        row * CELL_SIZE,
                        CELL_SIZE,
                        CELL_SIZE
                    );
                }
            }
        }
    }, [grid, showGridLines]);

    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const col = Math.floor(x / CELL_SIZE);
        const row = Math.floor(y / CELL_SIZE);
        toggleCell(row, col);
    };

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
                <button
                    onClick={toggleGridLines}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    {showGridLines ? "Hide Grid Lines" : "Show Grid Lines"}
                </button>
            </div>
            <canvas
                ref={canvasRef}
                width={GRID_WIDTH * CELL_SIZE}
                height={GRID_HEIGHT * CELL_SIZE}
                onClick={handleCanvasClick}
                className="border"
            />
        </div>
    );
};

export default GameOfLife;
