import React, {  Component } from 'react';
import "../../styles/User.css"

class User extends Component {
    render(){
        return(                
                    <div className="nim-dialog ">
                        <div className="nim-dialog--photo ">
                            <div className="nim-peer--photo-w">
                                <img src={require('../../logo192.png')} alt="" width="50" height="50"/>
                            </div>
                        </div>
                        <div className="nim-dialog--content">
                            <div className="nim-dialog--cw">
                                <div className="nim-dialog--date ">
                                    20:07
                                </div>
                                <div className="nim-dialog--name">
                                    <span className="nim-dialog--name-w">Mekan Nepesow</span>
                                </div>
                                <div className="nim-dialog--text-preview">
                                    <span className="">Bolya</span>
                                </div>
                                <div className="blind_label">
                                    1 новое сообщение
                                </div>
                                <div className="unread nim-dialog--unread">
                                    1
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default User