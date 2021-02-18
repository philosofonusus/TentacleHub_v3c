import React from 'preact/compat'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import AuthMiddleware from "../auth/AuthMiddleWare";

const MiddleLayer = ({children}) => (

    <Provider store={store}>
    <AuthMiddleware>
        <BrowserRouter>
                {children}
        </BrowserRouter>
    </AuthMiddleware>
    </Provider>
    )
export default MiddleLayer
