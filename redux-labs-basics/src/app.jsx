import {
    Route,Switch,Redirect,BrowserRouter as Router
} from 'react-router-dom' ;
import { PostsList } from "./features/posts/postlist.jsx";

export const App = () => {


  return (
    <>
         <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
          component={PostsList}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    </>
  )
}
export default App


