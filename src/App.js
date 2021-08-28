import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Chats from "./Chats";
import TinderCards from "./TinderCards.js";
import SwipeButtons from "./SwipeButtons.js";
import ChatScreen from "./ChatScreen.js";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/profile">
            <Header />
            <h1>I am profile page</h1>
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
