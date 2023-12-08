import React from 'react'
import { Button } from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
function ResetPassword() {
    let navigate = useNavigate()
  return <>
  <div className='container'>
    <h1 style={{textAlign:"center"}}>Reset Password</h1>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
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

export default ResetPassword