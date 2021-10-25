export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make some asynch code

    return getFirebase()
      .ref("projects")
      .push({
        ...project,
        authFirstName: "Mohamed",
        authLastName: "Koko",
        authorId: 1234,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", payload: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", payload: err });
      });
  };
};
