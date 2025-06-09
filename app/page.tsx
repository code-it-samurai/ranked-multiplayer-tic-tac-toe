'use client';

import React, { useState } from 'react';

export default function Home() {
  const [crossSquares, setCrossSquares] = useState<number[]>([]);
  const [circleSquares, setCircleSquares] = useState<number[]>([]);
  const [isCrossTurn, setIsCrossTurn] = useState(true);

  const handleSquareClick = (index: number) => {
    // Check if square is already filled
    const isSquareFilled = crossSquares.includes(index) || circleSquares.includes(index);
    
    if (isSquareFilled) {
      return; // Do nothing if square is already filled
    }

    if (isCrossTurn) {
      // Add cross
      const newCrossSquares = [...crossSquares];
      newCrossSquares.push(index);
      setCrossSquares(newCrossSquares);
    } else {
      // Add circle
      const newCircleSquares = [...circleSquares];
      newCircleSquares.push(index);
      setCircleSquares(newCircleSquares);
    }

    // Switch turns
    setIsCrossTurn(!isCrossTurn);
  };

  // Create array of 9 elements
  const squares = [];
  for (let i = 0; i < 9; i++) {
    squares.push(i);
  }

  return (
    <main style={{ 
      backgroundColor: 'black',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        borderRadius: '1rem',
        width: '400px',
        height: '400px',
        aspectRatio: '1/1',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '0.5rem'
      }}>
        {squares.map((index) => (
          <div
            key={index}
            onClick={() => handleSquareClick(index)}
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              border: '2px solid #e0e0e0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            {crossSquares.includes(index) && (
              <img src="/images/cross.png" alt="cross" style={{ width: '60%', height: '60%' }} />
            )}
            {circleSquares.includes(index) && (
              <img src="/images/circle.png" alt="circle" style={{ width: '60%', height: '60%' }} />
            )}
          </div>
        ))}
      </div>
    </main>
  );
} 