import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import Logout from './Logout';

class UserData extends Component {
    constructor(props){
        super(props);
        this.state={
                FN:'',
                LN:'',
                photo:''
        }
    }  
    componentWillMount(){
        let UserId = Number(this.props.UserId);
        fetchJsonp('https://api.vk.com/method/users.get?user_id='+UserId+'&v=5.52&fields=photo_200&access_token='+this.props.access_token, {
            mode: 'no-cors'
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                FN: data.response[0].first_name,
                LN: data.response[0].last_name,
                photo: data.response[0].photo_200
        })})
        .catch(e => [])
    }
    render() {
        return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    {this.props.photo
                    ?
                    <img src={this.state.photo} className="card-img userIMG" alt="user profile" />
                    :
                    <img src='http://allbestballs.ru/img/no-photo.png' className="card-img userIMG" alt="user profile" />  
                    }
            </div>
            <div className="card-body">
                <h5 className="card-title align-middle">{this.state.FN} {this.state.LN}</h5>
            </div> 
            <div className="card-body">
                <Logout />
            </div>       
            </div>
        </div>
        )
    }
}

export default UserData;
