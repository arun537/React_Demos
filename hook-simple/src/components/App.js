import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {


    const [resource, setResource] = useState('posts');
    // componentDidMount(){
    //     axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`).then((response) => {
    //         this.setState({resources : response.data});
    //     })
    // }

    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}> POSTS</button>
                <button onClick={() => setResource('todos')}> TODOS</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    )
}

export default App;