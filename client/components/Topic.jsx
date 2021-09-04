import React, { useState, useEffect } from 'react'


const Topic = (prop) => {
  const [Title, setFruit] = useState([])

  useEffect(() => {
    refreshFruit()
  }, [])

  const refreshFruit = () => {
    getFruit()
      .then(fruit => setFruit(fruit))
  }

  return null
}

export default Topic