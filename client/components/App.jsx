import React from 'react'
import {Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Topic from './Topic'

const App = () => {
  return (
    <>
      <Route path = '/' component = {Header} />
      <Route exact path = '/' component = {Main} />
      <Route path = '/' component = {Footer} />
      <Route exact path = '/topic/:id' component = {Topic} />
    </>
  )
}

export default App
