import {  configureStore } from '@reduxjs/toolkit'
import { PostReducer } from './features/posts/postsSlice'
 export const store = configureStore({
    reducer:{
        posts:PostReducer
    }
}
)