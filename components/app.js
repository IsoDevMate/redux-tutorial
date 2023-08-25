//array of tasks
//import useReducer hook
//replace useState
import { useReducer } from 'react';
import taskReducers from './reducers.js'
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export const App=()=>{
const [tasks,dispatch]=useReducer(taskReducers,initialTasks)
//I have 3 actions addtask  addTask,save/editTask,deleteTask
//object you pass to dispatch is called an action
const handleAddTask =(text) =>{
    dispatch({
        type:'Added',
        id:nextId++,
        text:text,
})
}

const handleChangeTask = (task) =>{
    dispatch({
        type:'changed',
        task: task
    })
}

const handleDeleteTask = (taskId) =>{
dispatch({
    type:'deleted',
    taskId: taskId
})
}
 return (
    <>
      <h1>YOUR todos</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
let nextId=3
const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
]

const tasks = [
   {id: 2, text: 'lecasa', done: false},
  {id: 4, text: 'hobby', done: false},
]