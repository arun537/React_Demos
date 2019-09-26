import React from 'react'

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            trim : ''
        }
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onSubmitProp(this.state.trim);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={(e) => this.onSubmit(e)}>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' onChange={(e) => this.setState({trim : e.target.value})} value={this.state.trim}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;