import React from 'react';
import { connect } from 'react-redux';



class SongDetail extends React.Component {

    

    render(){
        return (
            <div>
                {this.props.song 
                ? 
                <div >
                    <h3>Details for :</h3>
                    <p>
                        Title: {this.props.song.title}
                        <br/>
                        Duration: {this.props.song.duration}
                    </p>
                </div>
                :
                <div>Select Song</div>
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {song : state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);