
//this is where we put our state logic 
//we simply write a reducer function
//const reducer(state,action)=> newState
const tasks = [
   {id: 2, text: 'lecasa', done: false},
  {id: 4, text: 'hobby', done: false},
]

export const taskReducers=(tasks,action)=>{
    switch (action.type){
        case 'added':{
            return[
                ...tasks,
                {
                    id:action.id,
                    text:action.text,
                    done:false
                },
            ]
        }
        case 'changed':{
            return[
                    tasks.map((t)=>{
                        if(t.id ===action.task.id){
                            return action.task
                        }
                        else{
                            return t
                        }
                    })
            ]
            }
        case 'deleted':{
            return[
                tasks.filter((t) =>{
                    t.id !== action.id
                })
            ] 
        }
        default:
        throw new Error('unknown action:' + action.type)
    }
}


