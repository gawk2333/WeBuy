import React from 'react'
import {Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Route path = '/' component = {Header} />
      <Route path = '/' component = {Main} />
      <Route path = '/' component = {Footer} />
    </>
  )
}

export default App
