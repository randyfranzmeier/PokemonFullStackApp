//this is the child component. Each piece of data will be sent here and styled accordingly
import '../styles/PokEntry.css';
export default function PokEntry (props){

    return (
        <div className="entryContainer">
            <h1 id="pName">{props.name}</h1>
            <h2 id="pNumber">{props.number}</h2>
            <h2 id="pType">{props.type}</h2>
            <h2 id="pDescription">{props.description}</h2>
        </div>
    );
}