## useReducer

Reducers are a different way to handle state. You can migrate from useState to useReducer in three steps:

Move from setting state to dispatching actions.
Write a reducer function.
Use the reducer from your component

setting state tells react what to do,
reducers specify what the user justt did by dispatching actions from event handlers.

The useReducer Hook takes two arguments:

A reducer function
An initial state

And it returns:

A stateful value
A dispatch function (to “dispatch” user actions to the reducer)

## AddedPostForm Component

Inside of reducers, add a function named postAdded, which will receive two arguments: the current state value, and the action object that was dispatched. Since the posts slice only knows about the data it's responsible for, the state argument will be the array of posts by itself, and not the entire Redux state object.

The action object will have our new post entry as the action.payload field, and we'll put that new post object into the state array.

When we write the postAdded reducer function, createSlice will automatically generate an "action creator" function with the same name. We can export that action creator and use it in our UI components to dispatch the action when the user clicks "Save Post".