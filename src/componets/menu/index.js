import { Link } from "react-router-dom";
import './style.css'

function Menu(props) {
    return (
        <div className='menu'>
            <ul>
                <li>
                    <div> Agentes </div>
                </li>
                <li>
                    <Link to='/'> Modos de Jogos </Link>
                </li>
                <li>
                    <div> Armas </div>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
