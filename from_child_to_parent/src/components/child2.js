import React from 'react'

class Child2 extends React.Component{

    state = {name:'NAME_FORM_STATE'}

    // constructor(props){
    //     super(props);  
    // }

    componentDidMount(){
        console.log('THIS IS CHILD2 coponentDidMount');
    }

    componentWillMount(){
        console.log('THIS IS CHILD2 componentWillMount');
        this.setState({name : this.props.name})
    }

    shouldComponentUpdate(){
        console.log("THIS IS CHILD2 shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(){
        console.log("THIS IS CHILD2 componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("THIS IS CHILD2 componentDidUpdate");
    }

    render(){
        console.log("THIS IS CHILD2 Render")
        return (
            <div>
                <div>{this.state.name}</div>
                <button onClick={() => this.setState((prevState) => {return {name: prevState.name+'a'}})}>CHILD 2 Submit</button>
            </div>

        )
    }

}

export default Child2;