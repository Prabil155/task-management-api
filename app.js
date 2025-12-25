import express from 'express'
import cors from'cors'
import TaskModel from './taskmodel.js'

const app=express()
app.use(express.json())
app.use(cors())
const taskRouter =express.Router()

app.use('/api/task', taskRouter)
taskRouter.post('/', async (req, res)=>{
    const {name} =req.body
    try{
        const task=await new TaskModel({name}).save()
        res.status(201).send({
            messege:"created successfully",
            task
        })

    }
    catch(error){
        res.status(500).send({
        error:"something went wrong"
        })
    }
})
export default app