import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {



  
  






  return (
    <>


    <div style={{position:"fixed"}}>
    <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width:"20%"}} >
<img src="https://iconape.com/wp-content/files/pd/194086/svg/194086.svg" style={{width:"200px",marginTop:"30px",marginLeft:"20px"}} />
  <ul className=' text-sm mt-5' >
    <li ><Link className='no-underline' to="/AddPost">Add Post </Link> </li>
    <li ><Link  className='no-underline' to="/AddVideo"  >Add Videos </Link> </li>
    <li ><Link to="/Donation"  className='no-underline'  >Donations</Link> </li>
    <li ><Link to="/Request"  className='no-underline'  >Requests</Link> </li>
 

    

  </ul>
</div>
      </div>

      
    </>
  )
}
export default Sidebar
