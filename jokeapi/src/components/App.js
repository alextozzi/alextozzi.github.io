import {Component} from 'react'
import {JokeApi} from './JokeApi'


export class App extends Component {
    render() {
        return (
            <div className="app">
                <JokeApi />
            </div>
        )
    }
}