import api from "./api";


function update(id, params) {
    return api.put(`/api/${id}`, params);
}

const crudService = {
    update
}

export default crudService;