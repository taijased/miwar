
export function selectObjectFromScene({commit}, payload) {
  commit("SELECT_OBJECT_FROM_SCENE", payload);
}



export function setProjectName({commit}, payload) {
  commit("SET_PROJECT_NAME", payload);
}


export function setLoadingStatus({commit}, payload) {
  commit("UPDATE_LOADING_STATUS", payload);
}
