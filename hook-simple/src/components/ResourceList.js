import React from 'react';
import useResources from './useResources'

const ResourceList = (props) => {

    // state = {resources: []}
    
    const resources = useResources(props.resource);
    // componentDidUpdate(prevProps){
    //     if(prevProps.resource !== this.props.resource){
    //         axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`).then((response) => {
    //             this.setState({resources: response.data})
    //         })
    //     }
    // }

    
    return(
        <ul>{resources.map( record => {
            return <li>{record.title}</li>
        })}</ul>
    )
    
}

export default ResourceList;