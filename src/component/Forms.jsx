import React from 'react'


export  function Forms() {
  return (
    <div>



        <section class=" about-banner justify-content-center">
            <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
            <h1 class="text-white ">
                Contact Us
            </h1>
            
            </div>
            </div>
            </div>
        </section>


         <section className="row d-flex align-items-center justify-content-center form py-5">
            <div className="col-lg-3 d-flex flex-column address-wrap py-5">
              <div className="single-contact-address d-flex flex-row py-3">
              <div class="icon">
              <i class="bi bi-geo-fill"></i>
              </div>
              <div className="contact-details">
              <h5 className ="text-sm text-black-50 text-sm text-black-50" >Egypt</h5>
              <p className ="text-sm text-black-50">
              AL-Qalyubia ,Banhaa
              </p>
              </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
              <div class="icon">
              <i class="bi bi-telephone"></i>
              </div>
              <div className="contact-details">
              <h5 className ="text-sm text-black-50">+20 123 456 6789</h5>
              <p  className ="text-sm text-black-50"> Available from 9am to 6pm</p>
              </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
              <div class="icon">
              <i class="bi bi-envelope-paper"></i>
              </div>
              <div className="contact-details">
              <h5 className ="text-sm text-black-50 px-3">  cloth@shop.com</h5>
              <p className ="text-sm text-black-50">Send us anytime!</p>
              </div>
              </div>
              </div>
         
  
              <div className="col-lg-8">
                <form className="text-right" action="" method="post">
                <div className="row">
                <div className="col-lg-6 ">
                <input className="inp mb-20" name="name" placeholder="Enter your name" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'"  required type="text"/>
                <input className="inp mb-20" name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'"  required type="email"/>
                <input className="inp mb-20" name="subject" placeholder="Enter subject" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Enter subject'"  required type="text"/>
                </div>
                <div className="col-lg-6 ">
                <textarea className="inp py-3 " name="message" placeholder="Enter Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Messege'" required></textarea>
                <button className="btn btn-dark my-5" >Send Message</button>
                </div>
                
                </div>
                </form>
                </div>
  
              </section>

    </div>
  )
}
