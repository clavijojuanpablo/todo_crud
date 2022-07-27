const {getAllTasks, getTaskByID, createTask, deleteTask, updateTask} = require('./todo.controller')

//! Servicio GetAll
const getAll = (req, res) => {
    const data = getAllTasks()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

//! Servicio GetById
const getById = (req, res) => {
    const id = Number(req.params.id)

    if(id){ //?VALIDAMOS QUE EL ID SEA UN NÚMERO

        const data = getTaskByID(id)

        if(data.id){ //?VALIDAMOS QUE EL USER CON ESE ID, EXISTA
            res.status(200).json(data)
        }else{            
            res.status(400).json({message: "ID is not a number"})
        }

    }else{
        res.status(400).json({message: "ID is not a number"})
    }
}

//! Servicio Create
const create = (req, res) => {
    const data = req.body
    if(data.name && data.category && data.status){
        const response = createTask(req.body)
        res.status(200).json(response)
    }else{
        res.status(400).json({message: "Invalid Arguments"})
    }    
}

//! Servicio Delete
const deleteById = (req, res) => {
    const id = Number(req.params.id)

    if(id){ //?VALIDAMOS QUE EL ID SEA UN NÚMERO

        const deleted = deleteTask(id)

        if(deleted){ 
            res.status(204).json()
        }else{            
            res.status(400).json({message: "ID is not valid"})
        }

    }else{
        res.status(400).json({message: "ID is not a number"})
    }
}

//! Servicio Update
const updateById = (req, res) => {
    const id = Number(req.params.id)
    const obj = req.body

    if(id){
        const updated = updateTask(id, obj)

        if(updated){ 
            res.status(204).json()
        }else{            
            res.status(400).json({message: "The data is invalid"})
        }


    }else{
        res.status(400).json({message: "ID is not a number"})
    }

}


module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    updateById
}