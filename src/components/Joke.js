import React, {Component} from 'react';

export class Joke extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('http://api.icndb.com/jokes/random/').then((Response) => Response.json()).then((findresponse) => {
            this.setState({
                data: findresponse.value['joke']
            })
        })
    }

    render() {
        return (
            <div className="container" id="joke-page">
                <div className="row">
                    <div className=" col-md-offset-4 col-md-4">
                        <img
                            src="https://thegoldwater.com/static/media_store/medium/c74461ae2a9917a2482ac7b53f195b3c6e2fdd59e778c673256fb29d1b07f181.jpg"
                            style={{height: '500px', width: '500px', marginLeft: 'auto', marginRight: 'auto'}}/>
                        <h1>{this.state.data}</h1>
                        <p><a class="btn btn-secondary" href="/#/" role="button">Get back »</a></p>
                    </div>
                </div>
            </div>
        )
    }
}