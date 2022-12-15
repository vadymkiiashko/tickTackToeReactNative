import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface GameState {
  board: string[][];
  player: string;
  winner: null | string;
}

const initialState: GameState = {
  board: new Array(3).fill(new Array(3).fill('')),
  player: '',
  winner: '',
};

const checkDiagonals = (board: string[][], player: string) => {
  if (
    (board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[2][2] === player) ||
    (board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[2][0] === player)
  )
    return true;

  return false;
};

const isVictory = (
  board: string[][],
  indexRow: number,
  index: number,
  player: string,
) => {
  console.log(`indexROw = ${indexRow} index = ${index} board =${board}`)
  //check row
  if (board[indexRow].filter(element => element === player).length === 3)
    return true;
  // check column
  let column: string[] = [];
  for (let i = 0; i < 3; i++) {
    if (board[i][index] !== player) break;
    column.push(player);
  }
  if (column.length === 3) return true;
  //checkDiagonals
  return checkDiagonals(board, player);
};

const isDraw = (board: string[][]) => {
  return !board.map(row => row.includes('')).includes(true);
};

export const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    
    
    markCell: (
      state,
      action: PayloadAction<{indexRow: number; index: number}>,
    ) => {
      const {indexRow, index} = action.payload;
      if (state.board[indexRow][index] !== '') return;
      state.board[indexRow][index] = state.player || '';
      //check for victory
      if (isVictory(state.board, indexRow, index, state.player)) {
        state.winner = state.player;
        return;
      }
      //check for awaliable moves
      if (isDraw(state.board)) {
        state.winner = 'xy';
        return;
      }
      //togglePlayer
      state.player = state.player === 'x' ? 'o' : 'x';
    },
    toggleplayer: state => {
      state.player === 'x' ? 'y' : 'x';
    },
    abortGame: state => {
      state.board = new Array(3).fill(new Array(3).fill(''));
      state.player = '';
      state.winner = '';
    },
    startGame: state => {
      state.board = new Array(3).fill(new Array(3).fill(''));
      state.winner = '';
      state.player = 'x';
    },
  },
});

export const {markCell, abortGame, startGame} = GameSlice.actions;
export const selectGame = (state: RootState) => state.game.board;

export default GameSlice.reducer;
