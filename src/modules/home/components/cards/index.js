import { Link } from 'react-router-dom';
import './style.css'

function Card(props) {
    return (
        <div className='card'>
            <div className='face face1'>
                <h2> {props.displayName} </h2>
            </div>
            <div className='face face2'>
                <img src={props.url} alt='...' />

                <div className='modoJogos-info'>
                    <h2>{props.displayName}</h2>
                    <p> <span> Duração: </span> {props.duration} </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
