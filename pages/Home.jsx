import DefaultLayout from "../layouts/DefaultLayout";
import axios from 'axios'
// import {notification as notify} from "antd"
import { useState } from "react";
const Home =()=> {
//  const getData = async () => {

// try {
//     const res = await fetch("http://jsonplaceholder.typicode.com/posts/1",{
//         method:"GET"

//     })
//     const data = await res.json()
//     console.log(data)
// }
// catch (error) {
//     return notify.error({
//         message:"",
//         description:"Error has occur"
//     })
// }
//  }

const [data, setData] = useState([])
const [loading, setLoading] = useState(false);

 const getDataAxios = async () => {
     try {
         setLoading(true)
         const response =await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=caf30b49992f4df29028d653e0de2de5");
        //  "http://jsonplaceholder.typicode.com/posts"
        // "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=caf30b49992f4df29028d653e0de2de5"
         setData(response.data.articles)

        console.log(response.data.articles)
     }
     catch (error){
         console.error(error)

     }
     finally{
         setLoading (false)
            console.log(data);
     }
 }
    return(
        
        
          
         <DefaultLayout>
             <h1>Home page</h1> 
             <button onClick={setData} className="btn btn-success">payload</button>
             <button disabled={loading} onClick={getDataAxios} className="btn btn-success"> 
             {loading && <span className="spinner-border spinner-border-sm"></span>}
              <span> axios request</span>
              </button>

              <main>
                  {
                  data.map ((m, index) => 
                  <div key={index} className="card card-body">
                      <h1>{m.author}</h1>
                      <strong>{m.content}</strong>
                      
                      <p>{m.urlToImage}</p>
                      <span>{m.description}</span>
                  </div>

                  )}
              </main>
         </DefaultLayout>
    );

}
export default Home;