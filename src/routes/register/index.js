import React, {useState} from 'preact/compat'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import {useHistory} from "react-router";
import {registerUser} from "../../redux/actions";
import '../../style/sign.css'

const RegisterRoute = () => {
        const [form, setForm] = useState(null)
        const [agreed, setAgreed] = useState(true)
        const dispatch = useDispatch()
        const {request, loading} = useHttp()
        const history = useHistory()

        const signUpHandler = async () => {
            if(agreed) {
                await dispatch(registerUser(form, request))
                return history.push('/')
            }
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
                    <div className="sign__group">
                        <input name="name" type="text" className="sign__group-input" placeholder="Name*" onChange={changeHandler} />
                    </div>
                    <div class="sign__group">
                        <input onChange={changeHandler} name="email" class="sign__group-input" type="email" placeholder="Email*" />
                    </div>
                    <div class="sign__group">
                        <input onChange={changeHandler} name="password" class="sign__group-input" type="password" placeholder="Password*" />
                    </div>
                    <button disabled={loading} onClick={signUpHandler} class="sign__btn">
                        sign up
                    </button>

                    <span className="sign__text">Already have an account? <Link
                        to="/login">Sign in!</Link></span>
                </div>
            </div>
        </>
    )
}

export default RegisterRoute
