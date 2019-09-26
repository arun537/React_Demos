import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div>
        <label style={{'font-size': '90px'}}>Enter you Name</label>
        <input />
        <button>Submit</button>
    </div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)