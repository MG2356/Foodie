import React from 'react';
import './Style.css'

function Signup() {
  return (
  <>
 <div className="body-login">
<div class="center">
		<h1>Signup</h1>
		<form>
        <div class="txt_field">
				<input type="text" required placeholder=" "/>
				<label>Name</label>
			</div>
			<div class="txt_field">
				<input type="email" required placeholder=" "/>
				<label>Email-Id</label>
			</div>
			<div class="txt_field">
				<input type="password" required placeholder=" "/>
				<label>Enter password</label>
			</div>
			<input type="submit" value="Login" required/>
			<div class="signup_link">
				Not a member? <a href='/login'>login</a>
			</div>
			<script src="sweetalert.min.js"></script>
			

		</form>
	</div>

    </div>
</>
  );
}

export default Signup;