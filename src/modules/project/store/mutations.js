export const SET_CONTENT = (state, data) => state.content = data
export const SET_PROJECTS = (state, projects) => state.projects = projects
export const SET_PROJECT = function(state, project) {
    state.content = project.text
    state.project = project
}

