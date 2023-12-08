import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import {Form} from 'react-bootstrap'

function SignUp() {
    let navigate = useNavigate()
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
  return <>

<div className='container'>
    <h1 style={{textAlign:"center"}}>Sign Up!</h1>
  <Form>
  <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
      <center>
      <Button variant="primary">
        Submit
      </Button>
      </center>
    </Form>
  </div>
   
    </>
  
}

export default SignUp