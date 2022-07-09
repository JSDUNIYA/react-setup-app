import React from "react";
import "./App.css";
import thumb from "./ig.png"
import Nav from "./Nav"

const App = () => (
    <div>
        <Nav />
        <h1 className="wow">Hello React</h1>
        <img src={thumb} />
    </div>
)

export default App;