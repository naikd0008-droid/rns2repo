import './comp.css'
import { FaBook } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { LuDollarSign } from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";



function Comp() {
 

  return (
    <>
    <div className='main'>
        <div className='top'>
            <div className='a1'> 
            <div className='a11'><b>Admin Portal</b></div>
            <div className='a12'>Demo User</div></div>
        </div>
        <div className='middle'>
            <button className='b1'><LuLayoutDashboard /> <b>Dashboard</b></button>
            <button className='d2'><CiStar /> <b>Celebreties</b></button>
            <button  className='b3'><FaBook /> <b>Bookings</b></button>
            <button className='b4'><TbUsers /> <b>Users</b></button>
            <button  className='b5'><LuDollarSign /> <b>Payments</b></button>
        </div>
        <div className='bottom'>
            <div className='d1'></div>
            <button className='d2'><FiLogOut/>Logout</button>
        </div>
    </div>
    
    </>
  )
}

export default Comp