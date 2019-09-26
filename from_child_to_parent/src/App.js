import React from 'react';
import Child1 from './components/child1';
import Child2 from './components/child2';
import Child3 from './components/child3';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.child1Ref = React.createRef();
  }

  componentDidMount() {
    console.log("THIS IS CHILD2 REF in PARENT", this);
  }

  state = { name: 'Anand' }

  render() {
    return (
      <div>
        <Child1 name={this.state.name} />
        <Child2 ref={this.child1Ref} name="Anand" />
        <Child3 />
        <button onClick={() => this.setState((prevState) => {
          return { name: prevState.name + 'a' }
        })}>Change State</button>
      </div>
    );
  }
}

export default App;
