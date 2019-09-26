import './season.css'
import React from 'react';

const seasonConfig = {
    summer : {
        text : "Lets hit the beach.",
        iconName : "sun"
    },
    winter : {
        text : "Burr, it's chilly.",
        iconName : "snowflake"
    }
}

class Season extends React.Component{   

    getSeason(latitude, month){
        if(month > 2 && month < 9){
            return latitude > 0 ? 'summer' : 'winter';
        }else{
            return latitude > 0 ? 'winter' : 'summer';
        }
    }

    render(){

        const {iconName, text} = seasonConfig[this.getSeason(this.props.latitude, new Date().getMonth())]
        return (
            <div className={`season ${this.getSeason(this.props.latitude, new Date().getMonth())}`}>
                <i className={`icon-left massive ${iconName} icon`}/>
                <div>{text}</div>
                <i className={`icon-right massive ${iconName} icon`}/>
            </div>
        )
    }
}

export default Season;