import 'react-native-gesture-handler';
import React from 'react';
import {Theme} from './theme/index';
import {Provider} from 'react-redux';
import store from './redux/store';
import Navigator from './Navigation/';
import {createContext, useState} from 'react';

export const authContext = createContext([null, function () {}]);

/*

          LOST & FOUND APPLICATION

Javascript & JSX  
SERVER SIDE : MVC Architecture.

We can also see this client architecture as an MVC because:

 - all the logic that handles the requests to get data is implemented in Helpers/api.js (Model)

 - The view is implemented separatly which displays the data and calls the redux functions that calls the api functions. (View)

 - The intermediary "layer" between the view and model is the redux implementation that takes the inputs from users and passes them 
  to the model which send the requests to the server and stores the responses on the state. (Controller)

Modules:

  1- State management : React Hooks + Redux Toolkit 
  2- HTTP Requests management : Axios 
  3- Navigation : React Navigation
  4- Theming: React Native Paper

Flows:

  Authentication flow (Async):
    User enters Username and Password in Login Page => Connection opens to the server => login POST Request is sent to server  => Server checks the credentials 
    => send back a signed JWT token => JWT token gets stored on the device => User gets redirected to home page which requires authentication

  Other Requests flow (Async): 
    User triggers function the requires data from the server => Connection opens to the server => Application takes the stored token from local storage => 
    => Request is sent to send (POST, GET, PUT, or DELETE) with a Authorization header with takes the JWT token => Request is served by the server => Receive a response 
    => store response on the state of the application => state is accesed by the function that needed the data  
    
HTTP Requests are managed in Helpers/api, took the idea of the stub object to abstract the http requests management with a good presentation and more organized structure.
*/

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <authContext.Provider value={[token, setToken]}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </authContext.Provider>
  );
};

export default App;
