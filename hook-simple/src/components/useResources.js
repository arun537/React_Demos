
import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    const fetchResource = (resource) => {
        axios.get(`https://jsonplaceholder.typicode.com/${resource}`).then((response) => {
            // this.setState({resources: response.data})
            setResources(response.data);
        })
    }

    useEffect(() => {
        fetchResource(resource)
    }, [resource]);

    return resources;
};

export default useResources;