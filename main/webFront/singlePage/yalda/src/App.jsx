import React, { Component } from 'react';
import Landing from './components/views/Landig';
import Loader from './components/partials/loader/loader';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        this.setState(
            {
                isLoading: false
            }
        )
    }
    render() {
        return this.state.isLoading ? <Loader /> : (
            <React.Fragment>
                <Landing />
            </React.Fragment>
        );
    }
}

export default App;