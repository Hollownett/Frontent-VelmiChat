import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import "../styles/App.css"

const styles = {
    link:{
        textDecoration:"none"
    },
    item:{

    }
}
class Sidebar extends Component{

    render(){
        return(
            <div className="col-2" >
                <ul style={{listStyleType:"none"}}>
                    <li style={{padding:"5px"}} ><Link style={styles.link} to="/profile">Моя страница </Link>  </li>
                    <li style={{padding:"5px"}}><Link to="/news" style={styles.link}>Новости</Link></li>
                    <li className=" justify-content-start align-items-center"style={{padding:"5px"}}><Link  to="/message" style={styles.link}>Сообщения</Link></li>
                    <li style={{padding:"5px"}}><Link  to="/friends" style={styles.link}>Друзья</Link></li>
                    <li style={{padding:"5px"}}><Link  to="/groups" style={styles.link}>Сообщества</Link></li>
                    <li style={{padding:"5px"}}><Link  to="/users" style={styles.link}>Пользователи</Link></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar