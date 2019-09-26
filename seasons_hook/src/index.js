import React from 'react';
import ReactDOM from 'react-dom';

import Season from './season';
import Spinner from './spinner';
import getLatitude from './getLatitude';

const App = () => {

   
    const {latitude, errorMessage} = getLatitude()
    // componentDidMount(){
    //     window.navigator.geolocation.getCurrentPosition((success) => {
    //         setLatitude(success.coords.latitude);
    //     }, (error) => {
    //         setErrorMessage(error.message)
    //     });
    // }

    const renderHelper = () =>{
        if(errorMessage && !latitude){
            return <div>Error: {errorMessage}</div>
        }
        if(!errorMessage && latitude){
            return <Season latitude={latitude}/>
        }
        return <Spinner text='Please accept location request.'/>
    }

    
    return <div>{renderHelper()}</div>
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)