import React, { Component } from 'react';
import Navbar from './Navbar';
import Manitor from './Manitor';
import "../styles/index.css"

class Main extends Component{

    render(){
        return(
            <div style={{backgroundColor:"#edeef0"}} className="manitor">
                    <Navbar/>
                    <Manitor/>
            </div>
        )
    }

}

export default Main