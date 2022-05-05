import { useState } from "react"

const List = ()=>{

    const [items, setItems] = useState([
        { name:"MOSES", title:"MR",nationality:"USA",grade:"20%", experience:"2YRS"},
        { name:"BRIGHTSTAR", title:"DR.",nationality:"UK",grade:"30%", experience:"7YRS"}
])


    const adName =()=>{
        let n = prompt("what is your fullname 'pls write in CAPITAL LETTER'")
        let c = prompt("what is your nationality 'pls write in CAPITAL LETTER'")
        let t = prompt("what is your title 'pls write in CAPITAL LETTER'")
        let g = prompt("Enter your highest grade in your education life 'pls write in CAPITAL LETTER'")
        let e = prompt("What are your real life experience (this tell us your real age) 'pls write in CAPITAL LETTER'")
        let obj = {name:n,nationality:c,title:t,grade:g,experience:e}
        setItems([...items,obj])
    }


    const removeData = ()=> {
        // items.splice(1,2)
        items.pop()
        setItems([...items])
    }

    const removeItem = ()=> {
        // items.splice(1,2)
        items.pop()
        setItems([...items])
    }                               

    
    return (
        
            <main>
    
   
                
              
    <div  style={{textAlign:"center"}}>
                <h2>
                    Register your NIN by following the instruction to fill the form.
                    </h2>
                    <h3>click on the button to get Registered</h3>
                    <b>NOTE:</b> <span>fill the form faithfully and carefully</span>
                    </div>

                {
                items.map((ite,index) =>

               

                    <div className="card m-3" >
                         <span>{index}</span>
                        <h1 style={{color:"lawngreen"}}>  SUCCESSFULL!!! <b> WELCOME {ite.title} {ite.name} your NIN slip will be ready very soon</b></h1>
                  <div style= {{display:"flex",justifyContent:"space-around"}}>
                     
                      <h4>
                          NAME
                      </h4>
                      <h4>
                          NATIONALITY
                      </h4>
                      <h4>
                          TITLE
                      </h4>
                      <h4>
                          GRADE
                      </h4>
                      <h4>
                          EXPERIENCE
                      </h4>
                  </div>
                        {/* <span>{index}</span> */}
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                        <h5 className="card-title">{ite.name} </h5> |
          <h5 className="card-title">{ite.nationality} </h5> |
          <h5 className="card-title">{ite.title} </h5> |
          <h5 className="card-title">{ite.grade} </h5>|
          <h5 className="card-title">{ite.experience} </h5> 
          </div>
          {/* <button className = "btn btn-primary mx-auto w-50"  onClick={editName}>Edit</button> */}
                        <button className = "btn btn-danger" onClick={removeItem}>remove items</button>
                        </div>
                        )
                        
                }
                <div>
                <button className = "btn btn-success" onClick={adName}>Add list </button>
                        <button className = "btn btn-danger" onClick={removeData}>Delete list</button> 
                        </div>
            </main>
    );
            }
export default List