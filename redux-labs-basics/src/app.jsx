import {
    Route,Switch,Redirect,BrowserRouter as Router
} from 'react-router-dom' ;
import { PostsLists } from "./features/posts/postlist";
import {  AddFormPost } from "./features/AddFormPost.jsx"
export const App = () => {


  return (
    <>
         <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
          component={PostsLists}
          Component={AddFormPost}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    </>
  )
}
export default App


