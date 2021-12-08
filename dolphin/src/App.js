import React from 'react';
// import {Router, NavLink , BrowserRouter} from 'react-router-dom';
// import {Route} from "react-router";
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {/*<p>*/}
                {/*    Edit <code>src/App.js</code> and save to reload.*/}
                {/*    <Router history={BrowserRouter}>*/}
                {/*        <NavLink to={'/about'}>关于</NavLink>*/}
                {/*        <Route path="/repos" component={App}/>*/}
                {/*        <Route path="/about" component={App}/>*/}
                {/*    </Router>*/}

                {/*</p>*/}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Let's Learn React test
                </a>
            </header>
        </div>
    );
}

export default App;
