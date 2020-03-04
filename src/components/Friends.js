import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import Friend from './Friend';

class Friends extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            count:'',
            friendsList:[],
            searchString:''
            
        }
    }
    componentWillMount(){
        fetchJsonp('https://api.vk.com/method/friends.get?v=5.52&fields=photo_200&access_token='+this.props.access_token, {
            mode: 'no-cors'
        })
        .then(res => res.json())
        .then(data => this.setState({
            count:data.response.count,
            friendsList:data.response.items
        }))
        .catch(e => [])
    }
    getSearch = ({ key })=>{
        let UserID = Number(this.props.UserId);
        if(key === 'Enter'){
            fetchJsonp('https://api.vk.com/method/friends.search?v=5.52&user_id='+UserID+'&fields=photo_200&q='+this.state.searchString+'&access_token='+this.props.access_token, {
                mode: 'no-cors'
            })
            .then(res => res.json())
            .then(data => this.setState({
                friendsList:data.response.items
            }))
            .catch(e => [])
        }
    }
    changeSearchString = ({ target: {value}}) =>{
        this.setState({
            searchString: value
        })
    }
    render() {
        return (
            <div>
            <div className='btnFriends'>
                <button type="button" class="btn btn-secondary btn-block" onClick={() => {
                    if(this.state.isOpen != true){
                        this.setState({
                        isOpen: true
                    })}else{
                        this.setState({
                            isOpen: false
                        })
                    }
                }}>
                    {this.state.isOpen?'Hide the whole list':'Show the whole list'}
                </button>
            </div> 
            {
            this.state.isOpen           
            ?
            <div className="card mb-3 friends">
                <input onChange={this.changeSearchString} onKeyPress={this.getSearch} className='form-control mb-3' placeholder="Enter friend name"/>
                {this.state.friendsList.map( friend => (
                    <Friend friendFN={friend.first_name} friendLN={friend.last_name} friendPhoto={friend.photo_200}/>
                ))}
            </div>
            :
                <h5 className="card-title">You have {this.state.count} friends</h5>
            }
            </div>
        )
    }
}

export default Friends; 
