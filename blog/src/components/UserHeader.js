import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';

class UserHeader extends React.Component{
    
    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        
        if(this.props.user){
            return (
                <div className='header'>{this.props.user.name}</div>
            )
        }else{
            return null
        }
        
    }
}

const mapStateToProps = (state,ownsProperty) => {
    return {user : state.users.find(user => user.id === ownsProperty.userId)}
}

export default connect(mapStateToProps, {fetchUsers})(UserHeader);