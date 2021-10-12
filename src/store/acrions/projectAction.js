export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make some asynch code
    dispatch({ type: "CREATE_PROJECT", payload: project });
  };
};
