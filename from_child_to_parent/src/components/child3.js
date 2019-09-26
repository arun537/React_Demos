import React from 'react'

class Child3 extends React.Component{

    componentDidMount(){
        console.log('THIS IS CHILD3 coponentDidMount');
    }

    componentWillMount(){
        console.log('THIS IS CHILD3 componentWillMount');
    }

    shouldComponentUpdate(){
        console.log("THIS IS CHILD3 shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(){
        console.log("THIS IS CHILD3 componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("THIS IS CHILD3 componentDidUpdate");
    }

    render(){
        console.log("THIS IS CHILD3 Render")
        return (
            <div>ANAND CHILD3</div>
        )
    }

}

export default Child3;