import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");

const navigate = useNavigate();

const handleLogin=(e)=>{
e.preventDefault();

if(email==="test@test.com" && password==="123456"){
navigate("/projects");
}else{
setError("Invalid Email or Password");
}
};

return(

<div className="flex items-center justify-center h-screen">

<form onSubmit={handleLogin} className="bg-white p-6 shadow-md w-80">

<h2 className="text-xl font-bold mb-4">Login</h2>

<input
type="email"
placeholder="Email"
className="border p-2 w-full mb-3"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border p-2 w-full mb-3"
onChange={(e)=>setPassword(e.target.value)}
/>

{error && <p className="text-red-500">{error}</p>}

<button className="bg-blue-500 text-white p-2 w-full">
Login
</button>

</form>

</div>
);

}

export default Login;