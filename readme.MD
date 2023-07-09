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