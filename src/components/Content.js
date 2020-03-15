import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import Message from './Message/Message';
import AllUsers from './AllUsers/AllUsers';
import Friends from './Friends/Friends';
import Groups from './Groups/Groups';

class Content extends Component{

    render(){
        return( 
            <Switch>
                <Route path="/message" component={Message}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/users" component={AllUsers}/>
                <Route path="/groups" component={Groups}/>
                <Route exact path="/:id" component={Profile}/>
            </Switch>
        )
    }
}

export default Content