import React from 'react'
import {render} from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import {App} from './components/App'
import {Home} from './components/Home'
import {About} from './components/About'
import {Contact} from './components/Contact'
import {Joke} from './components/Joke'
import {Router, Route, hashHistory} from 'react-router'

window.React = React

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/first" componet={Home}/>
            <Route path="/second" component={About}/>
            <Route path="/third" component={Contact}/>
        </Route>
        <Route path="/joke" component={Joke}/>
    </Router>,
    document.getElementById('react-container')
)


