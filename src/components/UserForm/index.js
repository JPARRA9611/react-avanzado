import React, { useRef } from 'react'
import { Form, Input, Title, Error, Div } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const inputEmail = useRef('')
  const inputPassword = useRef('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: inputEmail.current.value, password: inputPassword.current.value })
  }

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Escribe tu correo' ref={inputEmail} />
        <Input disabled={disabled} placeholder='Escribe tu contraseña' type='password' ref={inputPassword} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Div>
  )
}
