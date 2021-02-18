import React from 'preact/compat'
import {useEffect, useState} from 'preact/hooks'
import {useDispatch} from "react-redux";
import {authUser} from "../../redux/actions";

const AuthMiddleware = (props) => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authUser()).finally(() => setLoading(false))
    }, [])
    if(loading) return <div />
    return(
        props.children
    )
}
export default AuthMiddleware
