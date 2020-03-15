import React, {Component} from 'react'
import "../../styles/AllUser.css"
import { Link } from 'react-router-dom'

import {socket} from "../Manitor"

const styles = {
    user_name:{
        color:"#1a0592"
        
    }
}

class User extends Component{

    constructor(props){
        super(props)

        this.addFriend = this.addFriend.bind(this)
    }

    async addFriend(event) {
        event.preventDefault()
        console.log(this.props.item.user_id)

        socket.emit("addfriend",{
            user_id: this.props.item.user_id
        })        

        socket.on("friendAdded",(data)=>{
            if(data.added){
                this.props.delete(this.props.id)
            }else{
                console.log("not add")
            }
        })

    }

    render(){
        const {item} = this.props
        return(
            <div className=" col mt-1">				
                <div className=" contacts_body">
                    <ul className="contacts">
                        <li>
                            <div className="d-flex bd-highlight">
                                <Link to={item.user_id + ""} className="img_cont">
                                    <img src={item.imgURL} alt=""  className="rounded-circle user_img"/>
                                    <span className="online_icon"></span>
                                </Link>
                                <div className="user_info">
                                    <Link to={item.user_id + ""} style={styles.user_name}>{item.name + " " + item.surname}</Link>
                                    <br></br>
                                    <button className="add_friend" onClick={this.addFriend}>Добавить в друзья</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default User