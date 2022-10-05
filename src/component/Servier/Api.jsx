import axios from 'axios';


export let GetallProducts = ()=>{
    axios.get("https://fakestoreapi.com/products");
}



