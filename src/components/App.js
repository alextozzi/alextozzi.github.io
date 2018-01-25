import {Component} from 'react'
import {Menu} from './Menu'
import {Home} from './Home'
import {About} from "./About"
import {Contact} from './Contact'


let today = new Date();
let body = document.body;


function tick() {

    today.getHours() > 4 && today.getHours() < 17 ? body.className = ' ' + 'day'
        : body.className = ' ' + 'night'
}

setInterval(tick, 1000);

export class App extends Component {


    render() {
        return (
            <div className="app">
                <Menu/>
                <Home/>
                <About/>
            </div>
        )
    }
}




