import {  configureStore } from '@reduxjs/toolkit'
import { PostReducer } from './features/posts/postsSlice'
 export const Store = configureStore({
    reducer:{
        posts:PostReducer
    }
}
)