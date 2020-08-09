export const getGameData = (groupId) => ({
  type: 'GET_GAME_DATA',
  payload: {
    request: {
      url: `getGameData?groupId=${groupId}`,
    },
  },
});

export const setGameDataField = (name, value) => ({
  type: 'SET_GAME_DATA_FIELD',
  name,
  value,
});
