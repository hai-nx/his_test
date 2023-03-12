const roles = [
    {
        id: 1,
        code: 'ADMIN',
        name: 'Quản trị viên',
        description: 'Vai trò của quản trị viên',
        isActive: true
    },
    {
        id: 2,
        code: 'KT',
        name: 'Kế toán',
        description: 'Vai trò của kế toán',
        isActive: false
    },
    {
        id: 3,
        code: 'LT',
        name: 'Lập trình viên',
        description: 'Vai trò của lập trình viên',
        isActive:true
    }
]

function getAll(filter) {
    if (filter)
        return roles.filter(x => x.isActive == filter.isActive);
    return roles.filter(x => x.id > 0);
}

function getById(id) {
    return roles.find(x => x.id == id);
}

function createOrEdit(input) {
    let index = roles.map((x) => x.id).indexOf(input.id)
    console.log(index)
    if (index > -1) {
        roles[index] = input
    }
    else {

        input.id = roles.length + 1
        roles.push(input)
    }
    
}

function _delete(id) {
    let index = roles.map(e=>e.id).indexOf(id)
    if (index > -1) {
        roles.splice(index, 1)
        return true;
    }
    return false;
}

export default {
    getAll,
    getById,
    createOrEdit,
    delete: _delete
}