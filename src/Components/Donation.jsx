import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {  ref,get} from "firebase/database";
import { remove } from 'firebase/database';

import { db } from '../Config/firebase';
import Button from 'react-bootstrap/Button';
// import "./ShowCards.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';






function ShowCards() {

  
const [data,setdata] = useState([])







useEffect(()=>{
 let data1 = ref(db,"users/donate/")

    get(data1).then((snap) => {
        console.log(snap.val())
        if(snap.val()!=null){
       console.log(Object.values(snap.val()));
       setdata(Object.values(snap.val()))
        }

    })
        .catch((e) => console.log(e.code))
  

},[])



const handleDelete=(key)=>{
  console.log(key)
  let data1 = ref(db,`Men_Collection/${key}`)
  remove(data1)
  toast.success("Item has been Deleted",{
    autoClose:1000
  })
  


}





console.log(data)

// console.log(data.length)
  return (


<>

<Sidebar/>






    <div style={{marginLeft:'25%',position: 'relative' }}>
      
      <h1 style={{color:"GrayText",padding:"5%"}}>Donation</h1>
     <Table responsive="lg">
     <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Additional Info </th>
            <th>Amount</th>
          </tr>
        </thead>
<tbody>
{



  data.map((v,i)=>{
return(
  <>
      <tr>
    <td>{i}</td>
    <td>{v.name}</td>
    <td>{v.email}</td>
    <td>{v.phone}</td>
    <td>{v.country}</td>
    <td>{v.additionalinfo}</td>
    <td>{v.amount}</td>
{/* <td> <Button onClick={()=>handleDelete(v.key)} variant="danger">Delete</Button>  </td> */}

  </tr>
  </>
)

  })
}



</tbody>




      
      </Table>

<ToastContainer/>
    
    </div>


    </>
  )
}













export default ShowCards
