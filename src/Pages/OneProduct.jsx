import React,{useEffect, useState ,useContext } from 'react'
import {ChartCounter} from '../Provider.jsx/ChartCounter'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export  function OneProduct() {

  const params= useParams();
  const [productItem,setproductItem] = useState([]);


  let {increase,decrease}= useContext(ChartCounter);
 

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((response)=>{
           
      setproductItem(response.data)
 
  }

  ).catch(error =>{
      console.log(error);
  })

},[params])

  

  return (
    <div className="bg-light mt-5 p-5">
    <section class="row align-items-center m-5 " >
 
          <div class="col-md-6 ">
            <section class="vstack gap-2">
              <h3 class="section-title-sm ">{productItem.title}</h3>
              <div>
                <h4 className='d-inline'>Price: 
                <h5 className='d-inline'>{productItem.price}</h5>
                </h4>
                <br></br>
                
                <p class="text-sm text-black-50 py-3 ">
               {productItem.description}
              </p>

              <button onClick={increase} class="btn btn-dark m-3">Add To Cart</button>
              <button onClick={decrease} class="btn btn-outline-dark  m-3"><i class="bi bi-trash"></i></button>
              </div>
            </section>
          </div>

          <div class="col-md-6">
            <section className="aboutimg">
              <img src={productItem.image} alt="about-me " width={500}
               />
            </section>
          </div>
        
    
    </section>


  </div>
  // <div>justify</div>
  )
}
