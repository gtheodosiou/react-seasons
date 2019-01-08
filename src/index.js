import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {latitude: null, errorMessage: ''};

    // Use componentDidMount for data loading
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('My component was updated');
    }

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div> Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <div> Latitude: {this.state.latitude}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

