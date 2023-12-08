import React from 'react'
import { Button } from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function ForgetPassword() {
    let navigate = useNavigate()
  return <>
 <div className='container'>
    <h1 style={{textAlign:"center"}}>Forget Password</h1>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      <center><Button variant="primary">
        Submit
      </Button>
      </center>
    </Form>
  </div>
  </>
}

export default ForgetPassword