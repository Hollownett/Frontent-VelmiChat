import React, {Component} from "react"
import { Link } from "react-router-dom"

class Navbar extends Component {

    constructor(props){
        super(props)

        this.logout = this.logout.bind(this)

    }

    logout(event){
        event.preventDefault();
        localStorage.removeItem("Token")
        this.props.history.push('/login');
    }

    render(){
        return(
            <nav className="container-fluid  p-1" style={{backgroundColor:"#4a76a8"}}>
                <div className="container" >
                    <div className="row justify-content-between">
    
                        <div className="col-5 ">
                            <Link className="navbar-brand ml-5" to="#" style={{color:"#fff"}}>Chat-client</Link>
                        </div>    
                        <div className="col-2 ">
                            <Link className="navbar-brand " to="#" onClick={this.logout} style={{color:"#fff"}}>Logout</Link>
                        </div>
                    </div>
                </div>                
            </nav>
        )
    }
}

export default Navbar