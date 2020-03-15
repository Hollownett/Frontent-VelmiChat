import React, {  Component } from 'react';
import "../../styles/App.css"
import Dialog from './Dialog';
import {socket} from "../Manitor"

class Message extends Component {

    constructor(props){
        super(props)
        
        socket.on("message",function (data) {
            console.log(data)
            alert(data)
        })

    }

    render(){
        return(
            <div className="col-10">

                <div className="container border" style={{backgroundColor:"#fff", borderRadius:"5px"}}>
                    <div className="row">
                        <Dialog/>                        
                    </div>
                </div>
            </div>                
        )
    }
}

export default Message