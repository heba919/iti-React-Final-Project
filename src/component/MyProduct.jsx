import React,{useEffect, useState , useContext} from 'react'
import { ProductItem } from './ProductItem'
import axios from 'axios';
import {ChartCounter} from '../Provider.jsx/ChartCounter'

   
export  function MyProduct(props) {

  let [Product,setProduct] = useState([])
  
  

  useEffect(() => {

        axios.get("https://fakestoreapi.com/products").then((response)=>{
           
            setProduct(response.data)
            
           
          
        }

        ).catch(error =>{
            console.log(error);
        })
    },[])

    
    
    let result = Product.filter((curcateg)=>{
  

      if ('all'=== props.props)
      { 
        return curcateg;
       }
      else{
      return (curcateg.category == props.props);
      }
      
    })
   


    
  return (
    <div className='row g-3'>
        
    
        { result.map((elem)=>
        {
            
            return <ProductItem key={elem.id} elem={elem}/>
            
        }) }
       
    </div>
  )
      }


