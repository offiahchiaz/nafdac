import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './pages/signup/Signup';
import Login from './pages/login/Login';

function App() {
 
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
