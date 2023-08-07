import { useSelector } from "react-redux";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import { PostsLists } from "./features/posts/postlist";
import { AddFormPost } from './features/AddFormPost';

// Define the callback function
const LoadingRouteComponent = () => {
  const isLoading = useSelector((state) => state.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <PostsLists />;
};

 const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoadingRouteComponent} />
            <Route path="/add-post" component={AddFormPost} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
