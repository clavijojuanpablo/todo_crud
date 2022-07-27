//-------CREAMOS NUESTRO ARREGLO DE USERS
const todoDB = 
[
    {
        id: 1,
        name: "Regar las plantas",
        category: "Home",
        status: "Completed"
    } 
]

//! Controlador GetAll
const getAllTasks = () => {
    return todoDB
}

//! Controlador GetById
const getTaskByID = (id) => {
    const filteredDB = todoDB.filter((task) => task.id == id)
    return filteredDB[0]
}

//! Controlador Create
const createTask = (taskObj) => {

    if(todoDB.length === 0){
        const newTask = {
            id:1,
            name: taskObj.name,
            category: taskObj.category,
            status: taskObj.status
        }
        todoDB.push(newTask)
        return newTask
    }else{
        const newTask = {
            id:todoDB[todoDB.length - 1].id + 1,
            name: taskObj.name,
            category: taskObj.category,
            status: taskObj.status
        }
        todoDB.push(newTask)
        return newTask
    }
}

//! Controlador Delete
const deleteTask = (id) => {
    
    const index = todoDB.findIndex((task) => task.id == id)

    if(index !== -1){
        todoDB.splice(index, 1)
        return true
    }else{
        return false
    }
    
}

//! Controlador Update
const updateTask = (id, taskObj) => {

    const index = todoDB.findIndex((task) => task.id == id)
    
    if(index !== -1){
        const newTask = {
            id: id,
            name: taskObj.name,
            category: taskObj.category,
            status: taskObj.status
        }
        todoDB[index] = newTask
        return todoDB[index]
    }else{
        createTask(taskObj)
        return todoDB.at(-1) //Retornamos el ultimo usuario que creamos
    }

}


module.exports = {
    getAllTasks: getAllTasks,
    getTaskByID: getTaskByID,
    createTask: createTask,
    deleteTask: deleteTask,
    updateTask: updateTask
}