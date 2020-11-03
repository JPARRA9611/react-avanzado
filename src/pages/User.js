import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h2>User</h2>
      <SubmitButton onClick={removeAuth}> Cerrar Sesión</SubmitButton>
    </>
  )
}
