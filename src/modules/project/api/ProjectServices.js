
import API from '../../../api/Api'



const ProjectServices = {

    updateProject(data) {
        // console.log(data);
        let projectModel = {
            text: data.content
        }
        console.log(data);
        return API.put("/project/" + data.id, projectModel)
    },
    createProject(name) {
        let projectModel = {
            name: name,
        }
        return API.post('project', projectModel)
    },
    fetchProjects() {
        return API.get('project')
    },
    removeProjects(id) {
        return API.delete('project/' + id)
    },
    getProject(id) {
        return API.get('project/' + id)
    },
    getMarker(id) {
        return API.get('marker/' + id)
    },
    uploadPattern(id, formData) {

        return API.post('pattern/' + id, formData)
    }
}

export default ProjectServices
