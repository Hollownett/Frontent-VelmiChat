import React, {  Component } from 'react';
import "../../styles/Dialog.css"
import User from './User';
import { connect } from 'react-redux';
class Dialog extends Component {
    render(){
        return(
            <div>
                <div className="card-header">
                    <div className="input-group">
                        <input type="text" placeholder="Поиск..." name="" className="form-control search"/>
                    </div>
                </div>
                <div className="prokrutka_message clear_fix">
                  <User/>
                </div>
            </div>         
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(
    mapStateToProps
    )(Dialog)