import React, {Component} from "react";
import axios from "axios";
import { getJwt } from './../helpers/jwt';
import "../styles/Login.css"

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

class Register extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:"",
            surname:"",
            email:"",
            password:"",
            formErrors:{
                error:"",
                name:"",
                email:"",
                surname:"",
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
            axios.post("http://localhost:3001/register",{
                headers: {
                    'Content-Type' : 'application/json'
                },
                name:this.state.name,
                surname:this.state.surname,
                email:this.state.email,
                password:this.state.password
            })
            .then(res => {
                var authToken = res.data
                localStorage.setItem("Token",authToken.token);
                console.log(res)
                this.props.history.push('/message');
            }).catch(err =>{
                let formErrorsCopy = this.state.formErrors
                formErrorsCopy.error = "Email уже существует!"
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
            case "name":
                formErrors.name = 
                value.length < 1
                ? "Введите имя"
                : ""
                break;
            case "surname":
                    formErrors.surname = 
                    value.length < 1
                    ? "Введите Фамилию"
                    : ""
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
                    <h1>Регистрация</h1>
                    {formErrors.error.length > 0 && (
                        <span className="errorMessage">{formErrors.error}</span>
                    )}
                    <form onSubmit={this.handleSubmit} noValidate>                        
                        <div className="email">
                            <input
                                className={formErrors.name.length > 0 ? "error" : null}
                                placeholder="Имя"
                                type="name"
                                name="name"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.name}</span>
                            )}
                        </div>
                        <div className="email">
                            <input
                                className={formErrors.surname.length > 0 ? "error" : null}
                                placeholder="Фамилия"
                                type="name"
                                name="surname"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.surname}</span>
                            )}
                        </div>
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
                            <button type="submit">Загеристрироваться</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;