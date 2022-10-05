import React , { useContext } from 'react'
import {ChartCounter} from '../Provider.jsx/ChartCounter'
import "../JS/main"
 import { Link  } from 'react-router-dom'

export  function ProductItem(elem) {
  let product =elem.elem
  

    let {increase,decrease,}= useContext(ChartCounter)
  
  return (
 
                    <div className="col-md-6 col-lg-3 project-card"  >

                      <article className="gap-3">
                        <section className="position-relative">
                         
                          <img src={product.image} alt="01" />
                        
                        </section>
                        <h6
                          className="text-sm text-black-50 fw-normal m-0 whitespace-nowrap "
                        >
                          {product.category}
                        </h6>
                        <h5 className="text-capitalize m-0 fw-semibold whitespace-nowrap p-3">
                        {product.title} 
                        </h5>
                        
                        <div className='down mb-0'>
                        <button onClick={increase} className="btn btn-dark m-3">Add To Cart</button>
                        <button onClick={decrease} className="btn btn-outline-dark  m-3"><i className="bi bi-trash"></i></button>
                        </div>
                        <div
                            className="img-overlay d-flex align-items-center justify-content-center pt-4"
                          >
                          
                          <Link to={{
                            pathname:`/oneproduct/${product.id}`,
                            state:{
                            stateParam: true
                           }
                          }}>
                            Show More Details <i className="bi bi-ticket-detailed mx-1"></i>
                            </Link>
                          </div>
                      </article>
                      
                    </div>
    
  )
}
