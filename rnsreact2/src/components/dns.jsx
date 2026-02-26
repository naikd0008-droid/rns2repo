import './dns.css'

function Dns() {
return (
    <>
    <div className="page">
      <h2>Manage Bookings</h2>

      <div className="cards">
        <div className="card blue">
          <p>Total Bookings</p>
          <h1>3</h1>
        </div>

        <div className="card orange">
          <p>Pending</p>
          <h1>1</h1>
        </div>

        <div className="card purple">
          <p>In Progress</p>
          <h1>1</h1>
        </div>

        <div className="card green">
          <p>Completed</p>
          <h1>1</h1>
        </div>
      </div>

      <div className="controls">
        <input placeholder="Search by celebrity, user, or booking ID..." />

        <div className="filters">
          <button className="active">All</button>
          <button>Pending</button>
          <button>In Progress</button>
          <button>Completed</button>
        </div>
      </div>

      <div className="table-box">
        <h3>Bookings (3)</h3>

        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Celebrity</th>
              <th>Customer</th>
              <th>Occasion</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>B001</td>
              <td>Rajesh Kumar</td>
              <td>Rahul Sharma</td>
              <td>Birthday</td>
              <td>Invalid Date</td>
              <td className="amount">₹5,000</td>
              <td><span className="status pending">Pending</span></td>
            </tr>

            <tr>
              <td>B002</td>
              <td>Meera Patel</td>
              <td>Rahul Sharma</td>
              <td>Anniversary</td>
              <td>Invalid Date</td>
              <td className="amount">₹3,000</td>
              <td><span className="status progress">In Progress</span></td>
            </tr>

            <tr>
              <td>B003</td>
              <td>Tanvi Mehta</td>
              <td>Rahul Sharma</td>
              <td>Best Wishes</td>
              <td>Invalid Date</td>
              <td className="amount">₹3,500</td>
              <td><span className="status completed">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
      </>
  )
}


export default  Dns
