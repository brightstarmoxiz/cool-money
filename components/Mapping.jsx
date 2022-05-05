import { useState } from "react"

const Mapping= () => {
    const [data, setData] = useState([
        { name:"Moses", country:"water"},
        { name:"gold", country:"progress"}

])


    const addName =()=>{
        let n = prompt("enter a name")
        let c = prompt("enter a country")
        let obj = {name:n,country:c}
        setData([...data,obj])
    }


    const removeData = ()=> {
        data.splice(1,2)
        // data.pop()
        setData([...data])
    }


    return(
        <main>

            <button className = "btn btn-primary" onClick={addName}>
Add name
            </button>
            
            <button className = "btn btn-primary" onClick={removeData}>
   remove name
            </button>

            <h1>
                List of Names
            </h1>
            {
                data.map((item,index) =>
                <div className="card m-3"style= {{width: "30rem"}}>
                    <span>{index}</span>
                    <p>{item.name}</p>
                    <p>{item.country}</p>
                    </div>
                    )
                    
            }
        </main>
    )
}
export default Mapping