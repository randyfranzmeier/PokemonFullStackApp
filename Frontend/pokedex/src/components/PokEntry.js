//this is the child component. Each piece of data will be sent here and styled accordingly
import '../styles/PokEntry.css';
import deleteBtn from '../images/deleteBtn.png';
export default function PokEntry(props) {

    let deleteEntry = async () => {
        if (window.confirm("are you sure you want to delete information for " + props.name + "?")) {
            await fetch('http://localhost:3001/api/exterminate/'+ props.name, {
                method: "DELETE",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }).catch(error => console.log("an error occured:", error)).then(() => {
                window.location.reload();
            })
        
    }

}

return (
    <div className="entryContainer">
        <img id="delete" onClick={deleteEntry} src={deleteBtn}></img>
        <h1 id="pName">{props.name}</h1>
        <h2 id="pNumber">{props.number}</h2>
        <h2 id="pType">{props.type}</h2>
        <h2 id="pDescription">{props.description}</h2>
    </div>
);
}