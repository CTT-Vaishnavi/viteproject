import projects from "../data/projects";
import { useNavigate } from "react-router-dom";

function ProjectList(){

const navigate = useNavigate();

return(

<div className="p-5">

<h1 className="text-2xl font-bold mb-4">Projects</h1>

<div className="grid md:grid-cols-3 gap-4">

{projects.map((p)=>(
<div
key={p.id}
className="border p-4 shadow cursor-pointer"
onClick={()=>navigate("/dpr")}
>

<h2 className="font-bold">{p.name}</h2>

<p>Status: {p.status}</p>

<p>Start: {p.date}</p>

<p>{p.location}</p>

</div>
))}

</div>

</div>

);

}

export default ProjectList;