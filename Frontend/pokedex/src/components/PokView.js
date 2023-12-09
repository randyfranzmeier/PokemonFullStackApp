import '../styles/PokView.css';
export default function PokView(props) {


    return (
        <div className="viewContainer">
            <h1 id="pName">{props.name}</h1>
            <h2 id="pNumber">{props.number}</h2>
            <h2 id="pType">{props.type}</h2>
            <p id="pDescription">{props.description}</p>
        </div>
    );
}