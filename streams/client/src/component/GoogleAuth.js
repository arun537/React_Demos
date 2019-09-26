import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{


    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '119393276502-mbm3k2dm3533tlr7r7rmi7sn3i12ni4m.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    onClickSignOut = () => {
        this.auth.signOut();
    }

    onClickSignInWithGoogle = () => {
        this.auth.signIn();
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return <div>I don't know</div>
        }else if(this.props.isSignedIn){
            return (
                <button className='ui red google button' onClick={this.onClickSignOut}>
                    <i className='google icon' />
                    Signout
                </button>
            )
        }else{
            return (
                <button className='ui red google button' onClick={this.onClickSignInWithGoogle}>
                    <i className='google icon' />
                    Sign In with Google
                </button>
            )
        }
    }

    

    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);