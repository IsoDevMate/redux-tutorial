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
    PostReducer:(state , action) => {
        switch (action.type) {
            case 'added':
                return 
            default:
                return state
        }
    }
}
}
)

export default PostSlice.reducer
