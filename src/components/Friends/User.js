import React, {Component} from 'react'
import { Link } from 'react-router-dom';

const styles = {
    user_name:{
        color:"#1a0592"
        
    }
}

class User extends Component{

    render(){
        const {item} = this.props
        return(
            <div className=" col mt-1">				
                <div className=" contacts_body">
                    <ul className="contacts">
                        <li>
                            <div className="d-flex bd-highlight">
                                <Link to={item.user_id + ""} className="img_cont">
                                    <img src={item.imgURL} alt="" className="rounded-circle user_img"/>
                                    <span className="online_icon"></span>
                                </Link>
                                <div className="user_info">
                                    <Link to={item.user_id + ""} style={styles.user_name}>{item.name + " " + item.surname}</Link>
                                    <br></br>
                                    <Link to="#" >Написать сообщение</Link>
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