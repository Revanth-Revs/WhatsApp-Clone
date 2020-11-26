import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM Naming Convention
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            {/* Sidebar */}
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                {/* Chat */}
                <Chat />
              </Route>

              <Route path="/">
                {/* Chat */}
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
