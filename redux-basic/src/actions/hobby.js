export const addNewHobby = (hobby) => {
  return {
    type: "ADD_HOBBY",
    payload: hobby,
  };
};

export const settActiveHobby = (hobby) => {
  return {
    type: "SET_ACTIVE_HOBBY",
    payload: hobby,
  };
};
