
import React from 'react'




export  function Myfooter() {

  return (
   
  <footer className=" bg-dark text-white align-items-center justify-content-center text-center">
                            
        <div className="container">

          <div className="row gy-4 gx-sm-4">

            <div className="col-sm-6 col-lg-6 text-left">
              <section>
                {/* <h3 className="text-capitalize mb-4 fs-4 text-left">about me</h3> */}
                <p className="text-sm text-black-50-dark lh-lg">
                <i class="bi bi-quote"></i>
                You can’t buy happiness, but you can buy clothes and that’s sort of the same thing.
                <i class="bi bi-quote"></i>
                  <br /><br />
                  Copyright ©2022 All rights reserved 
                </p>
              </section>
            </div>

          

            <div className="col-lg-6 col-sm-6">
              <section>
                <h3 className="text-capitalize mb-4 fs-4">follow me</h3>
                <div className="social-links ">

                  <a href="#" ><i class="bi bi-facebook m-3"></i></a>
                   <a href="#" ><i class="bi bi-instagram m-3"></i></a>
                   <a href="#" ><i class="bi bi-linkedin m-3"></i></a>
                  <a href="#" ><i class="bi bi-whatsapp m-3"></i></a>
                  </div>
                 
                </section>
              
            </div>

            </div>

            </div>
           

  </footer>

  
  )
}

