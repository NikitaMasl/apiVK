import React, { Component } from 'react';
import UserData from './UserData';
import Friends from './Friends';

export class Userpage extends Component {
    constructor(props){
        super(props);
        this.state={
            UserId: '',
            access_token: ''
        }
    }
    componentWillMount(){
        let data =  [];
        let string = this.props.location.hash;
        let arr = string.split('&');
        arr.map(el =>{
            let keyValue = el.split('=');
                data.push(keyValue[1])
        })
        this.setState({
            UserId: data[2],
            access_token: data[0]
        })
    }
    render() {
        return (
            <div className = 'UserPage'>
                <UserData UserId={this.state.UserId} access_token={this.state.access_token}/>
                <Friends UserId={this.state.UserId} access_token={this.state.access_token}/>
            </div>
        )
    }
}

export default Userpage;