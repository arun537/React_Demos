import React from 'react'

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {spans : 0};
        this.refDOM = React.createRef();
    }

    componentDidMount(){
        // console.log(this.refDOM);
        // console.log(this.refDOM.current);
        this.refDOM.current.addEventListener('load', this.setSpans.bind(this));


    }

    setSpans(){
        const height = this.refDOM.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans});
    }

    render(){
        const {decription, urls} = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.refDOM} alt={decription} src={urls.regular}/>
            </div>
        )
    }
}

export default ImageCard;