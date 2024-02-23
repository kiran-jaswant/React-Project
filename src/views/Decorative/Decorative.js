import React from 'react'
import "./Decorative.css"
import thumbnail from "./pachira-indoor-house-plant300250.jpg"
import { articles } from '../../config/blogconfig'
import Blogcard from '../../components/Card/Card'
function Decorative(){
  return (
    
    <div>
    
     <h1> Decorative</h1>
     <hr/><hr/>
     <div className='blogs-container'>
     {
      articles.map((article,index)=>{
        const{title, thumbnail,description}=article
        return (<Blogcard key={index} title={title} thumbnail={thumbnail} description={description} />)
      })
     }
     </div>
     </div>
  )
}
export default Decorative
