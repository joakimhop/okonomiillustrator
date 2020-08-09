const getGroupData = (groupId) => ({
  type: 'GET_GROUP_DATA',
  payload: {
    request: {
      url: `getGameData?groupId=${groupId}`,
    },
  },
});

export default getGroupData;
