import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import "../styles/index.css"
import io from "socket.io-client"
import { getJwt } from './../helpers/jwt';

export let socket = null

class Manitor extends Component{

    constructor(props){
        super(props)

        socket = io.connect("http://localhost:3001", {
            query:{token:"Bearer " + getJwt()}
        });

        socket.on("connect",function () {
            console.log("Connected")
        })

        socket.on("addrequest",(data)=>{
            console.log(data)
            alert(data.user_id)
        })

    }

    render(){
        return(
            <div className="container p-3">
                <div className="row ">
                    <Sidebar/>
                    <Content/>
                </div>                    
            </div>
        )
    }

}

export default Manitor;