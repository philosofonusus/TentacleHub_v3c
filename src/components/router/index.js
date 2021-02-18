import React from 'preact/compat'
import {connect} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";

import HomeRoute from "../../routes/home";
import RegisterRoute from "../../routes/register";
import LoginRoute from "../../routes/login";
import ItemRoute from "../../routes/item";

const Router = ({user}) => {
    return (
        <Switch>
            <Route exact path="/" component={HomeRoute}/>
            <Route exact path="/item/:id" component={ItemRoute}/>
            {!user && <Route exact path="/register" component={RegisterRoute}/>}
            {!user && <Route exact path="/login" component={LoginRoute}/>}
            <Redirect to="/"/>
        </Switch>
    )
}

export default connect(state => ({user: state.user}))(Router)
