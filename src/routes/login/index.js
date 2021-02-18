import React, {useState} from 'preact/compat'
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import {loginUser} from "../../redux/actions";
import "../../style/sign.css"

const LoginRoute = () => {
    const [form, setForm] = useState(null)
    const [remember, setRemember] = useState(true)
    const dispatch = useDispatch()
    const {request, loading} = useHttp()
    const history = useHistory()

    const signInHandler = async () => {
        await dispatch(loginUser(form, remember, request))
        return history.push('/')
    }
    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return(
        <>

            <div class="sign__container">
                <div class="sign__form">
                    <Link to="/" class="sign__logo">
                        TENTACLEHUB
                    </Link>
                    <div class="sign__group">
                        <input onChange={changeHandler} name="email" class="sign__group-input" type="email" placeholder="Email" />
                    </div>
                    <div class="sign__group">
                        <input onChange={changeHandler} name="password" class="sign__group-input" type="password" placeholder="Password" />
                    </div>
                    <button disabled={loading} onClick={signInHandler} class="sign__btn">
                        sign in
                    </button>
                    <span class="sign__text">
        Don't have an account? <Link to="/register">Sign Up!</Link>
     </span>
                    <span class="sign__text">
        <a href="/forgot">Forgot Password?</a>
     </span>
                </div>
            </div>
        </>
    )
}
export default LoginRoute
