import React from 'react';
import SeachBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = {videos : [], selectedVideo: null};

    componentDidMount(){
        this.onSearchBarSubmit("display");
    }

    onSearchBarSubmit = (term) => {
        youtube.get('/search', {
            params : {
                q : term
            }
        }).then((response) => {
            this.setState({videos : response.data.items, selectedVideo:response.data.items[0]});
        })
    }

    onSelectVideo = (video) => {
        this.setState({selectedVideo : video})
    }

    render(){
        return( 
        <div className='ui container'>
            <SeachBar onSearchSubmit={this.onSearchBarSubmit}/> 
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'> 
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className='five wide column'>
                        <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;