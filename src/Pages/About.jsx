import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";


export  function About() {

  let navigate = useNavigate();
  let goToHome = () => {
    navigate("/home");
  };

  return (
    <div className="bg-light mt-5 p-5">
      <section class="row align-items-center m-5 " >
   
            <div class="col-md-6 ">
              <section class="vstack gap-2">
                <h3 class="section-title-sm ">ABOUT OUR STORE</h3>
                <p class="text-sm text-black-50 ">
                Cloth shop is owned and operated by White Orchid, an Egyptian company that started in 2002.

                Cloth shop is a reputed online international Cloths, delivering pretty and prim Cloths in Egypt. 

                We have an excellent team of Employees who are passionate about what they create, and dependable drivers and assistants to assure that we can provide the absolute best service possible.


               Our Working Hours: Daily: 9:00 AM – 3:00 PM 
                </p>
                <div>
                  <a href="#" class="btn btn-dark">view full details</a>
                </div>
              </section>
            </div>

            <div class="col-md-6">
              <section className="aboutimg">
                <img src="https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about-me"
                 />
              </section>
            </div>
          
      
      </section>

      <button onClick={goToHome} className="btn btn-outline-dark mt-4 my-5">
        Countine Shoping
      </button>
      
    </div>
  );
}
