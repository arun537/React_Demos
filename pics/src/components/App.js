import React from 'react';
// import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import '../constant';
import jsonFromUnSplash from '../constant';

class App extends React.Component{

    state = { images : []}

    onSearchSubmit(text){
        console.log("THIS IS TEXT", text);
        // doing an async call here and changing the state from that.
        // this.setState({images : [1,2,3]})
        // axios.get('https://api.unsplash.com/search/photos', {
        //     params : {
        //         query : text
        //     }
        //     ,headers : {
        //         Authorization: 'Client-ID 37fcecb031726d24822f8bdbf64975cd59a3f07ed9b2149bc8aff881518edf5e'
        //     }
        // }).then(result => {
        //     console.log(result.data.results);
        //     this.setState({images : result.results})
        // })
        console.log(jsonFromUnSplash.results);
        this.setState({images : jsonFromUnSplash.results});
    }

    render(){
        return (
            <div className='ui container'>
                <SearchBar onSubmitProp={this.onSearchSubmit.bind(this)}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }

}

export default App;