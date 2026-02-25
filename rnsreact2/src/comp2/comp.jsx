import './comp.css'
import img1 from '../assets/icons8-group-16.png'
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
            <div className='b1'></div>
            <div className='d2'></div>
            <div className='b3'></div>
            <div className='b4'><img src={img1} alt="" img1/><b>Users</b></div>
            <div className='b5'></div>
        </div>
        <div className='bottom'>
            <div className='d1'></div>
            <div className='d2'>Logout</div>
        </div>
    </div>





    </>
  )
}

export default Comp