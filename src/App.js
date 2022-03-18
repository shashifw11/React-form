import logo from './logo.svg';
import './App.css';
 import {useEffect, useState} from "react" ;
 
function App() {  
  const [getdata , setGetdata] = useState([]);

  const [data , setData] = useState({}) 
 
  
   const handleChange = (e)=>{
         // console.log(e.target.name,e.target.value);
         const {name} = e.target ; 
          setData({...data,[name] : e.target.value}) 
           //console.log(data);
   } 


    useEffect(()=>{
       getData();
    },[])
     const getData = ()=>{
       fetch("http://localhost:3001/form").then((d)=>d.json()).then((res)=>{
            setGetdata(res);
            // console.log(getdata);
       })
     }
  return (
    <div className="App">
      <form onSubmit={(e)=>{
                e.preventDefault() ; 
      }}>
       <lable>Name</lable> 
       <input onChange ={handleChange} name = "UserName" type = "text" placeholder = "Enter Name"/><br/><br/>
       <lable>Age</lable>
       <input onChange ={handleChange} name = "Age" type = "number" placeholder = "Enter Age"/><br/><br/>
       <lable>Addresh</lable>
       <input onChange ={handleChange} name = "Addresh" type = "text" placeholder = "Enter Addresh"/><br/><br/>
       <lable>Department</lable>
       <input onChange ={handleChange} name = "Department" type = "text" placeholder = "Enter Department"/><br/><br/>
       <lable>Salary</lable>
       <input onChange ={handleChange} name = "Salary" type = "number" placeholder = "Enter Salary"/><br/><br/>
      
       <h3>Check Maritail staus <input onChange ={handleChange} name = "marital_status" type = "checkbox" placeholder = "Enter marital status"/></h3><br/>
        <input onClick = {()=>{ 
                  const Data = data ;
                 fetch("http://localhost:3001/form",{
                  method:"POST" ,
                  body : JSON.stringify(Data),
                  headers :{
                    "content-type" : "application/json" ,
                  }
                } ).then(getData);
        }} type = "submit" value = "submit"/>
       </form> 
      <table className = "table">
        <thead>
          <tr>
          <th>UserName</th>
          <th>Age</th>
          <th>Addresh</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Marital_Status</th>

          </tr>
        </thead>
    {getdata.map((e)=>
        <tbody key = {e.id}>
            <tr>
             <td>{e.UserName}</td>
             <td>{e.Age}Year</td>
             <td>{e.Addresh}</td>
             <td>{e.Department}</td>
             <td>Rs:{e.Salary}</td>
             <td>{e.marital_status?"Married":"Un-Married"}</td>
          </tr>
             </tbody>
            )}

      </table>  

    
    </div>
  );
}

export default App;  

     
             
