'use client';

import React, { useReducer } from 'react';

// Define initial state for the game
const initialGameState = {
  board: Array(9).fill(null), // Represents the 9 squares: null, 'X', or 'O'
  isCrossTurn: true,          // true for Cross's turn, false for Circle's turn
  winner: null,               // 'X', 'O', or null
  isDraw: false,              // true if it's a draw
  notification: {             // State for notification message
    message: null,
    visible: false
  }
};

// Winning patterns
const winningPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
  [0, 4, 8], [2, 4, 6]             // Diagonal
];

// Helper to check for a winner
const checkWinner = (board: (string | null)[]) => {
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return 'X' or 'O'
    }
  }
  return null;
};

// Reducer function to manage game state
function gameReducer(state: typeof initialGameState, action: { type: string; payload?: number }) {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { board, isCrossTurn, winner, isDraw } = state;
      const index = action.payload as number;

      // If square is already filled or game is over, do nothing
      if (board[index] || winner || isDraw) {
        return state;
      }

      const newBoard = [...board];
      newBoard[index] = isCrossTurn ? 'X' : 'O';

      const newWinner = checkWinner(newBoard);
      const newIsDraw = !newWinner && newBoard.every(square => square !== null);

      let notificationMessage = null;
      if (newWinner) {
        notificationMessage = `${newWinner} wins!`;
      } else if (newIsDraw) {
        notificationMessage = 'It\'s a draw!';
      }

      return {
        ...state,
        board: newBoard,
        isCrossTurn: !isCrossTurn,
        winner: newWinner,
        isDraw: newIsDraw,
        notification: {
          message: notificationMessage,
          visible: !!notificationMessage // Visible if there's a message
        }
      };

    case 'DISMISS_NOTIFICATION':
      return {
        ...state,
        notification: {
          message: null,
          visible: false
        }
      };
    
    case 'RESET_GAME':
      return initialGameState;

    default:
      return state;
  }
}

export default function Home() {
  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);
  const { board, isCrossTurn, winner, isDraw, notification } = gameState;

  const handleSquareClick = (index: number) => {
    dispatch({ type: 'MAKE_MOVE', payload: index });
  };

  const handleDismissNotification = () => {
    dispatch({ type: 'DISMISS_NOTIFICATION' });
  };

  const handleResetGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  // Create array of 9 elements (still using a loop for clarity)
  const squares = [];
  for (let i = 0; i < 9; i++) {
    squares.push(i);
  }

  return (
    <main style={{ 
      backgroundColor: 'black',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    }}>
      {notification.visible && notification.message && (
        <div style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '1rem',
          textAlign: 'center',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>{notification.message}</span>
          <button 
            onClick={handleDismissNotification}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer'
            }}
          >
            &times;
          </button>
        </div>
      )}
      <div 
        style={{
          backgroundColor: 'rgb(245, 245, 245)',
          padding: '2rem',
          borderRadius: '1rem',
          width: '400px',
          height: '400px',
          aspectRatio: '1 / 1',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: '0.5rem',
        }}
        suppressHydrationWarning={true}
      >
        {squares.map((index) => (
          <div
            key={index}
            onClick={() => handleSquareClick(index)}
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              border: '2px solid rgb(224, 224, 224)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: (winner || isDraw || board[index]) ? 'default' : 'pointer'
            }}
            suppressHydrationWarning={true}
          >
            {board[index] === 'X' && (
              <img src="/images/cross.png" alt="cross" style={{ width: '60%', height: '60%' }} />
            )}
            {board[index] === 'O' && (
              <img src="/images/circle.png" alt="circle" style={{ width: '60%', height: '60%' }} />
            )}
          </div>
        ))}
      </div>
      <button 
        onClick={handleResetGame}
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          zIndex: 10
        }}
      >
        <img src="/images/reset.png" alt="Reset" style={{ width: '4rem', height: '4rem' }} />
      </button>
    </main>
  );
} 