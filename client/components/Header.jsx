import React,{useState,useEffect} from 'react'
import {getMenu} from '../apis/menu'
import { Link } from 'react-router-dom'

const Header = () =>{
  const [Topics,setTopics]= useState([])
  useEffect(()=>{
    return refreshMenu()
  },[])
  const refreshMenu=()=>{
  getMenu().then(menu=>{return setTopics(menu)})
}
  return (
    <>
    <div id = 'header'>
      <div id = 'logo'>
        <img id='logoimg' src='./img/logo.jpg'/>
      </div>
      <div id = 'menu'>
        
        {
            Topics.map(topic=>{
              return(
                <div id='topic' key={topic.id}><Link to={`/topics/${topic.name}`}>{topic.name}</Link></div>
              )
            })
        }
        
      </div>
    </div>
    </>
  )
}

export default Header