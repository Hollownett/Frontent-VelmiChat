import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux"
import { getJwt } from './../helpers/jwt';
import "../styles/Login.css"
import {userID} from "../redux/actions/UserInfo" 
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const formValid = formErrors =>{
    var valid = true

    Object.values(formErrors).forEach(val => {
        val.length > 0  &&  (valid=false)
    })

    return valid
};

class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            email:"",
            password:"",
            formErrors:{
                error:"",
                email:"",
                password:""
            }
        }
    }

    componentWillMount(){
        var jwt = getJwt()
        if(jwt){
            this.props.history.push('/message');
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if(formValid(this.state.formErrors)){
            axios.post("http://localhost:3001/login",{
                headers: {
                    'Content-Type' : 'application/json'
                },
                email:this.state.email,
                password:this.state.password
            })
            .then(res => {
                var authToken = res.data
                localStorage.setItem("Token",authToken.token);
                this.props.dispatch(userID(res.data.userID))
                setTimeout(()=>{
                    this.props.history.push('/message');
                },1)

            }).catch(err =>{
                let formErrorsCopy = this.state.formErrors
                formErrorsCopy.error = "Email или пароль не правильный"
                this.setState(function(state, props){
                    return {    
                        formErrors:formErrorsCopy
                    }
                });
            })
        }
    };

    handleChange =event => {
        event.preventDefault();

        const {name,value} = event.target

        let formErrors = { ...this.state.formErrors };

        switch(name){
            case "email":
                formErrors.email = 
                emailRegex.test(value)  &&  value.length > 0
                ? ""
                : "Неправильный Email"
                break;
            case "password":
                formErrors.password = 
                value.length < 6
                ? "Введите больше 6 символов"
                : ""
                break;
            default:
                break;
        }
        if(formErrors.error.length>0){
            formErrors.error=""
        }
        this.setState({formErrors,[name]:value})
    };

    render(){
        const {formErrors} =this.state
        return(
            <div className="wrapperSign">
                <div className="form-wrapperSign">
                    <h1>Войти</h1>
                    {formErrors.error.length > 0 && (
                        <span className="errorMessage">{formErrors.error}</span>
                    )}
                    <form onSubmit={this.handleSubmit} noValidate>                        
                        <div className="email">
                            <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                            </div>
                            <div className="signUpAccaunt">
                            <button type="submit">Войти</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default connect(
    null
    )(Login)