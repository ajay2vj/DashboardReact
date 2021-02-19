import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
    return(
        <div>
					<div id="wrapper">
						<Sidebar/>
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<h1>DashBoard</h1>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
}

export default Dashboard;