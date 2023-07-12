import { CreateSlice } from '@reduxjs/toolkit'


const InitialState= [
    {
    id:1,username:"barack", message:"Crispy"
},
{
id:2,username:"wuodOuma", message:"yummy"
}
]
const PostSlice = CreateSlice({
    name: 'posts',
    InitialState,
 reducer :{ 
    postAdded(state, action) {
        state.push(action.payload)
      }
      /*  switch (action.type) {
            case 'added':
                return{
                    id:action.id,
                } 
            default:
                return state
        }*/
    }
}

)
export const { postAdded } = PostSlice.actions

export default PostSlice.reducer
