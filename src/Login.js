import React from 'react'
import './Style.css';
function Login() {
  return (
<>
<div className="body-login">
<div class="center">
		<h1>Login</h1>
		<form>
			<div class="txt_field">
				<input type="email" required placeholder=" "/>
				<label>Email-Id</label>
			</div>
			<div class="txt_field">
				<input type="password" required placeholder=" "/>
				<label>Enter password</label>
			</div>
			<input type="submit" value="Login" required/>
			<div class="pass">Forgot password ?</div>
			<div class="signup_link">
				Not a member? <a href='/Signup'>Signup</a>
			</div>
			<script src="sweetalert.min.js"></script>
			

		</form>
	</div>

    </div>

</>  )
}

export default Login