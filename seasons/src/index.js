import React from 'react';
import ReactDOM from 'react-dom';

import Season from './season';
import Spinner from './spinner';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {latitude : null, errorMessage : ''}
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition((success) => {
            this.setState({latitude : success.coords.latitude});
        }, (error) => {
            this.setState({errorMessage : error.message})
        });
    }

    renderHelper(){
        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latitude){
            return <Season latitude={this.state.latitude}/>
        }
        return <Spinner text='Please accept location request.'/>
    }

    render(){
        return <div>{this.renderHelper()}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)