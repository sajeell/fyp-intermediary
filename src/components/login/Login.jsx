import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sellerLogin } from '../../redux/user/user.action'

import './Login.css'
import 'react-toastify/dist/ReactToastify.css'

import illustration from './img/car-illustration.png'
import background from './img/illustration-bg.png'

import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.user.token)

  const onSubmitForm = async (e) => {
    e.preventDefault()

    if (email.length < 1) {
      setEmailError('Email field is required')
    }

    if (password.length < 1) {
      setPasswordError('Password field is required')
      return
    }

    const body = { username: email, password }

    dispatch(sellerLogin(body))
  }

  useEffect(() => {
    if (token) {
      return navigate('/dashboard')
    }
  }, [token])

  return (
    <>
      <div className='login-wrapper'>
        <div className='col'>
          <div className='row'>
            <div className='title'>Barganttic</div>
            <div className='sub-title'>The ECommerce Company</div>
          </div>
          <div className='row'>
            <img
              src={illustration}
              alt='Illustration composed of a car and trees in gray color'
              id='illustration'
            />
            <img
              src={background}
              id='background'
              alt='Simple amoeba shaped background in blue shade'
            />
          </div>
        </div>
        <div className='col'>
          <div className='row'>
            <span className='headline'>Sign In</span>
          </div>
          <Container className='login-form'>
            <div className='row'>
              {emailError && emailError.length > 0 ? (
                <small style={{ color: '#dc3545', marginBottom: 5 }}>
                  {emailError}
                </small>
              ) : (
                ''
              )}
              <div className='input-row'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Username'
                  required
                  className={`form-control ${
                    emailError && emailError.length > 0
                      ? 'is-invalid'
                      : 'is-valid'
                  }`}
                  value={email}
                  onChange={(e) => {
                    e.preventDefault()
                    setEmailError('')
                    setEmail(e.target.value)
                  }}
                />
              </div>
              {passwordError && passwordError.length > 0 ? (
                <small
                  style={{ color: '#dc3545', marginTop: 10, marginBottom: -12 }}
                >
                  {passwordError}
                </small>
              ) : (
                ''
              )}
              <div className='input-row'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  required
                  className={`form-control ${
                    passwordError && passwordError.length > 0
                      ? 'is-invalid'
                      : 'is-valid'
                  }`}
                  value={password}
                  onChange={(e) => {
                    e.preventDefault()
                    setPasswordError()
                    setPassword(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className='forgot-password'>
              <span>Forgot Password?</span>
            </div>
            <div className='signin-button' onClick={onSubmitForm}>
              Sign In
            </div>
          </Container>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login
