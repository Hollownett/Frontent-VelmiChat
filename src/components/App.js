import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
//import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Main from './Main';
import Register from './Register';
import {createStore, applyMiddleware} from "redux"
import { Provider } from 'react-redux';
import reducers from './../redux/reducers/index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"


export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

function App() {
  return (
      <Provider store={store}>
        <div className="wrapper ">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Register}/>
              <Route path="/register" component={Register}/>
              <PrivateRoute path="/" component={Main}/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
  );
}

export default App;
