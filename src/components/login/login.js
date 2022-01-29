import React, { useContext, useState } from 'react'
import { Switch, Route, Link,useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthContext from '../../store/auth-context'
import LoginDataService from "../../services/login";
import { Button, Form } from 'react-bootstrap'
import './login.css'
import Footer from '../footer/footer'
import axios from 'axios';
const Login = (props) => {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  const [user, setUser] = useState([]);
  const [cin, setCin] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    //alert(`The name you entered was: ${name} and password is : ${password}`);
    if (!cin) {
      alert(' CIN is required ! ')
    } 
    else if (!password) {
      alert('Password is required ! ')
    } 
    else  {
      axios.get(`http://localhost:9000/agent/${cin}/${password}`)
         .then(response =>{
          console.log(response.data);
          if(cin == response.data.cin && password == response.data.password){
            authCtx.login(cin)
            console.log(authCtx.isLoggedIn)
    
            alert('connected successfully')
            navigate('/search')
          }
         else {
          alert('Cin and Password combination is incorrect')
        }
        })
        .catch(e => {
          console.log(e);
        });
      
     
  }
}
  /*const login = () => {
    props.login(user)
    props.history.push('/');
  }
*/
  return (
    <div>
      <Form className='mb-4' onSubmit={handleSubmit}>
        <Form.Group className='mb-4'>
          <Form.Control
            value={cin}
            className='search_input'
            type='text'
            placeholder='CIN'
            onChange={(e) => setCin(e.target.value)}
          />
          <Form.Control
            value={password}
            className='search_input2'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className='search_button' variant='primary' type='submit'>
            Login
          </Button>
        </Form.Group>
      </Form>
      <Footer />
    </div>
  )
}
export default Login
