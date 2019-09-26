import React from 'react'

import {connect} from 'react-redux';

class Child1 extends React.Component{

    componentDidMount(){
        console.log('THIS IS CHILD1 coponentDidMount');
    }

    componentWillMount(){
        console.log('THIS IS CHILD1 componentWillMount');
    }

    shouldComponentUpdate(){
        console.log("THIS IS CHILD1 shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(){
        console.log("THIS IS CHILD1 componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("THIS IS CHILD1 componentDidUpdate");
    }

    render(){
        console.log("THIS IS CHILD1 Render")
        return (
            <div>{this.props.name}</div>
        )
    }

}

mapStateToProps = (state ) => {

}

export default connect(mapStateToProps)(Child1);