import { useState } from "react";

function DPRForm(){

const [form,setForm] = useState({
date:"",
weather:"",
work:"",
workers:""
});

const handleSubmit=(e)=>{
e.preventDefault();
alert("DPR Submitted Successfully");
};

return(

<div className="p-5">

<h1 className="text-xl font-bold mb-4">Daily Progress Report</h1>

<form onSubmit={handleSubmit} className="max-w-md">

<input
type="date"
className="border p-2 w-full mb-3"
onChange={(e)=>setForm({...form,date:e.target.value})}
/>

<select
className="border p-2 w-full mb-3"
onChange={(e)=>setForm({...form,weather:e.target.value})}
>

<option>Weather</option>
<option>Sunny</option>
<option>Cloudy</option>
<option>Rainy</option>

</select>

<textarea
placeholder="Work Description"
className="border p-2 w-full mb-3"
/>

<input
type="number"
placeholder="Worker Count"
className="border p-2 w-full mb-3"
/>

<input
type="file"
multiple
className="mb-3"
/>

<button className="bg-green-500 text-white p-2 w-full">
Submit
</button>

</form>

</div>

);

}

export default DPRForm;