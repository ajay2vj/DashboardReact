import React from 'react';
import Sidebar from '../components/Sidebar';

function Form() {
    return(
        <div>
          <div id="wrapper">
						<Sidebar/>
						<div className="container">
							<div className="row">
								<div className="col-md-10">
									<h1>Form</h1>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
}

export default Form;