import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom'
function LoginPage() {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState(initialState)
    const onEmailHandler = (event) => {
        setEmail.apply(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword.apply(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault(); //리프레시방지

        let body = {
            email: Email,
            Password: Password
        }

        dispatch(loginUser(body))
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                }
                else {
                    alert('Error')
                }
            })

        /*Axios.post('/api/user/login', body)
            .then(response => {

            }) 리덕스 안쓰는 경우 (Axios)*/
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="email" value={Password} onChange={onPasswordHandler} />

                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)