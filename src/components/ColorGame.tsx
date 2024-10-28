import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Award, XCircle, CheckCircle, Zap } from 'lucide-react';

interface GameState {
  score: number;
  timeLeft: number;
  isPlaying: boolean;
  highScore: number;
  streak: number;
}

interface Color {
  name: string;
  hex: string;
  variants: {
    light: string;
    dark: string;
  };
}

const GAME_DURATION = 20;

// Enhanced colors with variants
const COLORS: Color[] = [
  {
    name: 'Red',
    hex: '#EF4444',
    variants: {
      light: '#FCA5A5',
      dark: '#B91C1C'
    }
  },
  {
    name: 'Blue',
    hex: '#3B82F6',
    variants: {
      light: '#93C5FD',
      dark: '#1D4ED8'
    }
  },
  {
    name: 'Green',
    hex: '#10B981',
    variants: {
      light: '#6EE7B7',
      dark: '#047857'
    }
  },
  {
    name: 'Yellow',
    hex: '#F59E0B',
    variants: {
      light: '#FCD34D',
      dark: '#B45309'
    }
  },
  {
    name: 'Purple',
    hex: '#8B5CF6',
    variants: {
      light: '#C4B5FD',
      dark: '#6D28D9'
    }
  },
  {
    name: 'Pink',
    hex: '#EC4899',
    variants: {
      light: '#F9A8D4',
      dark: '#BE185D'
    }
  },
  {
    name: 'Orange',
    hex: '#F97316',
    variants: {
      light: '#FDBA74',
      dark: '#C2410C'
    }
  },
  {
    name: 'Teal',
    hex: '#14B8A6',
    variants: {
      light: '#5EEAD4',
      dark: '#0F766E'
    }
  }
];

const ColorGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    timeLeft: GAME_DURATION,
    isPlaying: false,
    highScore: parseInt(localStorage.getItem('colorGameHighScore') || '0'),
    streak: 0
  });

  const [currentRound, setCurrentRound] = useState({
    backgroundColor: COLORS[0],
    textColor: COLORS[0],
    displayedName: COLORS[0].name,
    isMatching: true,
    useVariant: false
  });

  const [lastResult, setLastResult] = useState<'correct' | 'wrong' | null>(null);
  const [timeBonus, setTimeBonus] = useState<number | null>(null);

  const generateNewRound = useCallback(() => {
    const bgColorIndex = Math.floor(Math.random() * COLORS.length);
    const bgColor = COLORS[bgColorIndex];

    // Determine if we'll use a variant color (33% chance)
    const useVariant = Math.random() < 0.33;

    // Determine if the colors should match (50% chance)
    const isMatching = Math.random() > 0.5;

    let textColor = bgColor;
    let displayedName = bgColor.name;

    if (!isMatching) {
      // For non-matching rounds, either use a different color name or a variant
      if (Math.random() > 0.5) {
        // Use a different color name
        do {
          const textColorIndex = Math.floor(Math.random() * COLORS.length);
          textColor = COLORS[textColorIndex];
          displayedName = textColor.name;
        } while (textColor === bgColor);
      } else {
        // Keep the same color but use a variant
        textColor = bgColor;
        const differentNameIndex = Math.floor(Math.random() * COLORS.length);
        displayedName = COLORS[differentNameIndex].name;
      }
    }

    setCurrentRound({
      backgroundColor: bgColor,
      textColor,
      displayedName,
      isMatching,
      useVariant
    });
  }, []);

  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      score: 0,
      timeLeft: GAME_DURATION,
      isPlaying: true,
      streak: 0
    }));
    generateNewRound();
  };

  const handleAnswer = (userAnswer: boolean) => {
    const isCorrect = userAnswer === currentRound.isMatching;
    setLastResult(isCorrect ? 'correct' : 'wrong');

    const streakBonus = isCorrect ? Math.floor(gameState.streak / 3) : 0;
    const timeBonus = isCorrect ? Math.max(0, Math.floor(gameState.timeLeft / 5)) : 0;

    if (timeBonus > 0) {
      setTimeBonus(timeBonus);
      setTimeout(() => setTimeBonus(null), 1000);
    }

    setGameState(prev => ({
      ...prev,
      score: prev.score + (isCorrect ? 1 + streakBonus : 0),
      streak: isCorrect ? prev.streak + 1 : 0,
      timeLeft: prev.timeLeft + (isCorrect ? 1 : -1)
    }));

    setTimeout(() => {
      setLastResult(null);
      generateNewRound();
    }, 300);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState.isPlaying && gameState.timeLeft > 0) {
      timer = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    } else if (gameState.timeLeft <= 0 && gameState.isPlaying) {
      setGameState(prev => {
        const newHighScore = Math.max(prev.highScore, prev.score);
        localStorage.setItem('colorGameHighScore', newHighScore.toString());
        return {
          ...prev,
          isPlaying: false,
          highScore: newHighScore,
          timeLeft: 0
        };
      });
    }
    return () => clearInterval(timer);
  }, [gameState.isPlaying, gameState.timeLeft]);

  const getDisplayColor = () => {
    if (!currentRound.useVariant) {
      return currentRound.textColor.hex;
    }
    return Math.random() > 0.5
      ? currentRound.textColor.variants.light
      : currentRound.textColor.variants.dark;
  };

  return (
    <section id="game" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Speed Color Match 🎮
          </h2>
          <p className="text-gray-400 mb-6">
            Match colors and their names! Watch out for color variants and tricky combinations.
          </p>
        </motion.div>

        <div className="glass p-8 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <span className="text-xl font-semibold">{gameState.timeLeft}s</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="text-xl font-semibold">{gameState.score}</span>
              </div>
            </div>
            {gameState.streak >= 3 && (
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">
                  {gameState.streak}x Streak!
                </span>
              </div>
            )}
          </div>

          {!gameState.isPlaying ? (
            <div className="text-center">
              {gameState.timeLeft === 0 && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-6"
                >
                  <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
                  <p className="text-gray-400">Final Score: {gameState.score}</p>
                  <p className="text-gray-400">High Score: {gameState.highScore}</p>
                </motion.div>
              )}
              <motion.button
                className="btn"
                onClick={startGame}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {gameState.timeLeft === GAME_DURATION ? 'Start Game' : 'Play Again'}
              </motion.button>
            </div>
          ) : (
            <motion.div
              key={currentRound.backgroundColor.hex + currentRound.displayedName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div
                className="h-40 rounded-lg flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: currentRound.backgroundColor.hex }}
              >
                <span
                  className="text-4xl font-bold transition-colors duration-300"
                  style={{ color: 'white' }}
                >
                  {currentRound.displayedName}
                </span>
              </div>

              <div className="flex justify-center gap-4">
                <motion.button
                  className="btn-secondary flex items-center gap-2"
                  onClick={() => handleAnswer(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XCircle className="w-5 h-5" />
                  Different
                </motion.button>
                <motion.button
                  className="btn flex items-center gap-2"
                  onClick={() => handleAnswer(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  Same
                </motion.button>
              </div>

              <AnimatePresence>
                {(lastResult || timeBonus) && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-2"
                  >
                    {lastResult && (
                      <div className={`font-bold text-lg ${lastResult === 'correct' ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {lastResult === 'correct' ? 'Correct! +1' : 'Wrong!'}
                      </div>
                    )}
                    {timeBonus && (
                      <div className="text-yellow-400 font-semibold">
                        Time Bonus: +{timeBonus}s
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Tip: Watch out for color variants and name mismatches! The game gets trickier as you progress.</p>
        </div>
      </div>
    </section>
  );
};

export default ColorGame;