import React, { useState, useEffect } from 'react'
import { Container, Button, Form, NavLink } from 'react-bootstrap'
import { useFirebaseApp, useUser } from 'reactfire'
import { useHistory } from 'react-router-dom'

export default function Signup() {
  const firebase = useFirebaseApp()
  const [form, setForm] = useState({ email: '', password: '' })
  const history = useHistory()
  const user = useUser()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(() => {
        console.log('user created!')
      })
      .catch((err) => alert(err.message))
  }
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
        <NavLink>Already a user?</NavLink>
      </Form>
    </Container>
  )
}
