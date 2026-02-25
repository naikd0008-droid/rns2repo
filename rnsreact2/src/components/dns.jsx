import './dns.css'

function Dns() {
 

  return (
    <>
 
    <div className="apb">
      <aside className="sidebar">
        <h2>Admin Portal</h2>
        <p className="user">Demo User</p>

        <nav>
          <a>Dashboard</a>
          <a>Celebrities</a>
          <a className="active">Bookings</a>
          <a>Users</a>
          <a>Payments</a>
        </nav>

        <button className="logout">Logout</button>
      </aside>

      <main className="content">
        <h1>Manage Bookings</h1>

        <div className="stats">
          <div className="card blue">
            <p>Total Bookings</p>
            <h2>3</h2>
          </div>
          <div className="card orange">
            <p>Pending</p>
            <h2>1</h2>
          </div>
          <div className="card purple">
            <p>In Progress</p>
            <h2>1</h2>
          </div>
          <div className="card green">
            <p>Completed</p>
            <h2>1</h2>
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
                <td className="money">₹5,000</td>
                <td><span className="badge pending">Pending</span></td>
              </tr>

              <tr>
                <td>B002</td>
                <td>Meera Patel</td>
                <td>Rahul Sharma</td>
                <td>Anniversary</td>
                <td>Invalid Date</td>
                <td className="money">₹3,000</td>
                <td><span className="badge progress">In Progress</span></td>
              </tr>

              <tr>
                <td>B003</td>
                <td>Tanvi Mehta</td>
                <td>Rahul Sharma</td>
                <td>Best Wishes</td>
                <td>Invalid Date</td>
                <td className="money">₹3,500</td>
                <td><span className="badge done">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
      </>
  )
}

export default Dns

