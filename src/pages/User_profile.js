import React from 'react';
import Sidebar from '../components/Sidebar';

function User_profile() {
    return(
        <div>
          <div id="wrapper">
						<Sidebar/>
						<div className="container">
							<div className="row">
								<div className="col-md-10">
									<h1>User Profile</h1>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
}

export default User_profile;