import React ,{useState} from 'react'
import { ChartCounter } from './ChartCounter'

export  function CounterStoreProvider(proprs) {

    let [count,setcount] =  useState(0);
    // let [productList,setproductList] =  useState([]);

    let increase =()=>{
      setcount(count+1);
    }

    let decrease =()=>{
      if (count != 0) {

      setcount(count-1);
      }
      else {
        alert(" Your Cart Is Empty!");
        };
  }

  // function AddProductList(list){
  //   setproductList(list);
  // }


    let MyValue={
      count,
      increase,
      decrease,
      // productList,
      // AddProductList
      

    }



  return (
    <ChartCounter.Provider value={MyValue} >
        {proprs.children}
        
    </ChartCounter.Provider>
  )

  }