import '../styles/Navstyles.css'; //styles for the navbar

/**
 * this @function NavBar is a simple 
 * react functional component that
 * @returns a navbar displaying the 
 * name of the website!
 */
export default function Navbar() {

    return (
        <div>
            <nav>
                <ul>
                    <li id="appName">Pokedex 5.0</li>
                </ul>
            </nav>
        </div>
    );
}