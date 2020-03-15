import React, {Component} from 'react'
import User from './User';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import { getJwt } from './../../helpers/jwt';


class Friends extends Component{
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
    }

    async componentDidMount(){
        try {
            const result = axios.get("/friends",{
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

    render(){
        return(
            <div className="col-7">

                <div className="container border all_users_container" style={{backgroundColor:"#fff", borderRadius:"5px", position:"relative"}}>
                    <div className="row justify-content-start h-100" style={{backgroundColor:"#fafbfc"}}>
                        <Link to="#" className="tab_header" style={{textDecoration:"none"}}>Все друзья</Link>
                        <Link to="#" className="tab_header" style={{textDecoration:"none"}}>Друзья онлайн</Link>
                    </div>
                    <div className="prokrutka clear_fix">
                    {
                            this.state.users.map((u,i)=>{
                                return(
                                    <User
                                        key={i}
                                        id={i}
                                        item={u}                                        
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

export default Friends