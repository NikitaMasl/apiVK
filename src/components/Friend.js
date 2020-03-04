import React, { Component } from 'react'

class Friend extends Component {
    render() {
        return (
          <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    {this.props.friendPhoto
                    ?
                    <img src={this.props.friendPhoto} className="card-img friendIMG" alt="user profile" />
                    :
                    <img src='http://allbestballs.ru/img/no-photo.png' className="card-img friendIMG" alt="user profile" />  
                    }
            </div>
            <div className="card-body">
                <h5 className="card-title align-middle">{this.props.friendFN} {this.props.friendLN}</h5>
            </div>    
            </div>
          </div>
        )
    }
}

export default Friend;