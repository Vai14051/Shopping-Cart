import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setloading] = useState(false);
  const [post, setpost] = useState([]);


  async function fetchproductData()
  {
    setloading(true);
    
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setpost(data);     
    }
    
    catch (error)
    {
      console.log("error aagya ji");
      setpost([]);
    }
    setloading(false);
  }

  useEffect(()=>{
    fetchproductData();
},[])

  return (
    <div>
      {
        
        loading ? <Spinner /> : post.length > 0 ? (
            <div className=" grid  grid-cols-4 max-w-6xl  p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]"> 
            {
              post.map( (post) =>{ 
               return <Product key={post.id} post={post} />
                  })  
                  
            }



          </div> ) : (<div className=" flex justify-center items-center "><p>No Data Found</p></div>)






       }


    </div>
  )
};

export default Home;
