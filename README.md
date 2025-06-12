# Ranked Multiplayer Tic-Tac-Toe

A modern, interactive Tic-Tac-Toe game built with Next.js and TypeScript. This project features a clean, minimalist design with smooth animations and responsive gameplay.

## Play Online

You can play the game directly in your browser at [https://tictactoe.pratftw.com/](https://tictactoe.pratftw.com/)

## Features

- 🎮 Classic Tic-Tac-Toe gameplay
- 🎯 Alternating turns between X and O players
- 🏆 Win detection for all possible winning combinations
- 🤝 Draw detection
- 🔄 Game reset functionality
- 📱 Responsive design that works on all devices
- 🎨 Modern UI with custom X and O icons
- 🔔 Notification system for game status updates

## Tech Stack

- Next.js 14
- TypeScript
- React
- CSS-in-JS for styling

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ranked-multiplayer-tic-tac-toe.git
cd ranked-multiplayer-tic-tac-toe
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to start playing!

## How to Play

1. The game starts with X's turn
2. Click on any empty square to place your mark (X or O)
3. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins
4. If all squares are filled and no player has won, the game ends in a draw
5. Click the reset button to start a new game

## Project Structure

```
ranked-multiplayer-tic-tac-toe/
├── app/
│   ├── page.tsx        # Main game component
│   └── layout.tsx      # Root layout
├── public/
│   └── images/         # Game assets (X, O, reset icons)
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 