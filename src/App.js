import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/user';
import Auth from './views/Auth/Auth';
import Todo from './views/Todo/Todo';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logOut = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <div className="to-do">
                  <Todo />
                </div>
                <button onClick={logOut}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
