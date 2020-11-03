import React, { useContext } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Iniciar Sesión</Tab>
          <Tab>Registrarse</Tab>
        </TabList>

        <TabPanel>
          <LoginMutation>
            {
              (login, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  login({ variables }).then(({ data }) => {
                    const { login } = data
                    activateAuth(login)
                  })
                }

                const ErrorMsg = error && 'Usuario o contraseña incorrectos'

                return (
                  <UserForm error={ErrorMsg} disabled={loading} title='Iniciar Sesión' onSubmit={onSubmit} />
                )
              }
            }
          </LoginMutation>
        </TabPanel>

        <TabPanel>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(({ data }) => {
                    const { signup } = data
                    activateAuth(signup)
                  })
                }

                const ErrorMsg = error && 'El usuario ya existe o hay algún problema'

                return (
                  <UserForm error={ErrorMsg} disabled={loading} title='Registrarse' onSubmit={onSubmit} />
                )
              }
            }
          </RegisterMutation>
        </TabPanel>
      </Tabs>
    </>
  )
}
