import React from 'react';

class SeachBar extends React.Component{

    state= {term: ''};

    onInputChange = (event) => {
        this.setState({term : event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        // TODO : MAKE sure we call
        // callback from parent
        this.props.onSearchSubmit(this.state.term);
    }

    render(){
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Video Serch</label>
                        <input type='text' value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SeachBar;