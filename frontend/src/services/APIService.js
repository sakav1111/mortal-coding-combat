import axios from 'axios';

export const listAvailableGames = () =>
  axios.get('/api/lobby')
    .then((response) => response.data.gameDtoList);

export const newGame = (difficulty, playerDto) =>
  axios.post(`/api/game/${difficulty}`, playerDto)
    .then((response) => response.data);

export const startGame = (gameId, playerDto) =>
  axios.put(`/api/game/${gameId}/start`, playerDto)
    .then((response) => response.data);

export const joinExistingGame = (gameId, playerDto) =>
  axios.put(`/api/game/${gameId}`, playerDto)
    .then((response) => response.data);
