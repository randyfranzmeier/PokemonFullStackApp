//this is a child component. Each piece of data will be sent here and styled accordingly
import '../styles/PokEntry.css'; //styles
import deleteBtn from '../images/deleteBtn.png'; //for the user to delete an entry

export default function PokEntry(props) {

    /**
     * this @function deleteEntry() checks if the user really wants 
     * to delete the selected entry. If they press confirm, the name is sent
     * to the backend for deletion of that entry. Notice the use of 
     * the @function window.location.reload(). This refreshes the page
     * so the new list of entries can be displayed.
     */
    let deleteEntry = async () => {
        if (window.confirm("are you sure you want to delete information for " + props.name + "?")) {
            await fetch('http://localhost:3001/api/exterminate/' + props.name, {
                method: "DELETE",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }).catch(error => console.log("an error occured:", error)).then(() => {
                window.location.reload();
            })

        }

    }
    /** this displays the name, number, type, and description
     *  for a pokedex entry, and even an image for the delete
     *  button that calls the @function deleteEntry() on click.
     * the props object is used to show the different properties
     * of the object given to it by the parent component.  */
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