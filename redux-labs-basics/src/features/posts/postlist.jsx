/*If we're going to render a list of posts, we need to get the data from somewhere.
 React components can read data from the Redux store using the useSelector hook from the React-Redux library.
  The "selector functions" that you write will be called with the entire Redux state object as a parameter, 
  and should return the specific data that this component needs from the store.

Our initial PostsList component will read the state.
posts value from the Redux store, then loop over the array of posts and show each of them on screen:*/