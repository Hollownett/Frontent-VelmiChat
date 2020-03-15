import React, {Component} from 'react'
import "../../styles/AllUser.css"
import { Link } from 'react-router-dom'
import User from './User'
import axios  from 'axios';
import { getJwt } from './../../helpers/jwt';

class AllUsers extends Component{

    constructor(props){
        super(props)
        this.socket = null;
        this.state = {
            users: [
                {
                    userID:"",
                    name:"",
                    surname:"",
                    imgURL:"",
                }
            ]
        }
        this.deleteUser = this.deleteUser.bind(this)
    }

    async componentDidMount(){
        try {
            const result = axios.get("/users",{
                baseURL: `http://localhost:3001/api`,
                mode: 'no-cors',
                headers:{
                  Authorization: 'Bearer ' + getJwt()
                }
            })
            this.setState({users:(await result).data})

        } catch (error) {
            console.log(error)
        }
    }

    deleteUser(id){
        let user = this.state.users
        user.splice(id,1)
        this.setState({users:user})
    }

    render(){
        return(
            <div className="col-7">

                <div className="container border all_users_container" style={{backgroundColor:"#fff", borderRadius:"5px", position:"relative"}}>
                    <div className="row justify-content-start h-100" style={{backgroundColor:"#fafbfc"}}>
                        <Link className="tab_header_allUser" to="#" style={{textDecoration:"none"}}>Все пользователи</Link>
                    </div>
                    <div className="prokrutka clear_fix">
                        {
                            this.state.users.map((u,i)=>{
                                return(
                                    <User
                                        key={i}
                                        id={i}
                                        item={u}
                                        delete={this.deleteUser}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>    
        )
    }
}

export default AllUsers