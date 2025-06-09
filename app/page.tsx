import React from 'react';

export default function Home() {
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
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              border: '2px solid #e0e0e0'
            }}
          />
        ))}
      </div>
    </main>
  );
} 