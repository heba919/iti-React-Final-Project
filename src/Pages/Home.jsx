import React ,{useState , useEffect} from "react";
// import MyCard from "../components/functionComponents/MyCard";
import {MySlider} from "../component/MySlider";
import {MyProduct} from "../component/MyProduct"
import "../JS/main.js"
import { Offer } from "../component/Offer";

// import { products } from "../model/products";

export function Home() {
  
     const[cateory, setCateory] = useState("all");


  function FilterResult(event){
    // useEffect(() => {
    // setCateory(categptyitam)
    //    console.log(cateory);
      // },[cateory])
      // console.log(event.target.value)
      setCateory(event.target.value)
      // console.log(event.target.value)
  }

 
        
    

  return (
    <div className="">
      <MySlider />
      <Offer/>
      <section id="my-projects" class="section text-center">
      <div className="container mt-5  ">
      <div class="col-9 mx-auto">
                  <h2>The Product</h2>
                  <p class="text-sm text-black-50">
                   All our Product is here, Hope you like it! </p>
      </div>

      
      <ul
                  class="list-unstyled filters-btns hstack gap-1 justify-content-center d-none d-md-flex"
                >
                  <li>
                    <button
                     onClick={ FilterResult}
                      
                      value={"all"}
                      class="text-uppercase filter-btn btn text-sm fw-semibold active"
                    >
                      all
                    </button>
                  </li>
                  <li>
                    <button
                      
                      onClick={FilterResult}
                      class="text-uppercase filter-btn btn text-sm fw-semibold"
                      value={"men's clothing"}
                    >
                      men's clothing
                    </button>
                  </li>
                  <li>
                    <button
                      
                      onClick={FilterResult}
                      value={"jewelery"}
                      class="text-uppercase filter-btn btn text-sm fw-semibold"
                    >
                      jewelery
                    </button>
                  </li>
                  <li>
                    <button
                        onClick={ FilterResult}
                        value={"women's clothing"}
                        
                      class="text-uppercase filter-btn btn text-sm fw-semibold"
                    >
                      women's clothing
                    </button>
                  </li>
                  <li>
                    <button
                        onClick={ FilterResult}
                        
                        value={"electronics"}
                      class="text-uppercase filter-btn btn text-sm fw-semibold"
                    >
                    Other
                    </button>
                  </li>
                </ul>

        <div className="row">
          <MyProduct props={cateory} />
        </div>

      </div>
      </section>



      {<script src="../JS/main.js">
           </script>}
    </div>
  );
}