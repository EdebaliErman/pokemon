import {
    useEffect,
    useState
} from 'react'
import './style.css'
import { pokeInfo } from '../../api'
function Card({ name }) {
    const [info, setInfo] = useState()
    const [type, setType] = useState()
    const [bgColor, setBgcolor] = useState()
    useEffect(() => {
        pokeInfo(setInfo, name)
        if (info) {
            setType(info.types[0].type.name)
            setBgcolor(color[type])
        }
    }, [info])

    const color = {
        water: type === "water" ? "#b0b0d1" : "blue",
        fire: type === "fire" ? "#a40606" : "#a40606",
        grass: type === "grass" ? "#95c995" : "#95c995",
        shadow: type === "shadow" ? "black" : "black",
        fighting: type === "fighting" ? "rgb(117, 65, 71)" : "black",
        flying: type === "flying" ? "aqua" : "",
        normal: type === "normal" ? "#ddc998" : "",
        poison: type === "poison" ? "#6e496a" : "",
        bug: type === "bug" ? "#a1d013" : "",
        electric: type === "electric" ? "#f0d90d" : "",
        fairy: type === "fairy" ? "pink" : "",
        ground: type === "fairy" ? "#a17a03" : "",
        rock: type === "rock" ? "rgb(180, 180, 180)" : "",
        psychic: type === "psychic" ? "rgb(255, 172, 144)" : "",
        ghost: type === "ghost" ? "rgb(0, 8, 27)" : "",
        ground: type === "ground" ? "rgb(131, 73, 67)" : ""
    }

    return (
        <div className='pokeCard' style={
            {
                backgroundImage: `linear-gradient(to top, ${bgColor}, rgba(225, 225, 225, 0.1))`
            }


        }>
            <div className='name'>{name}</div> < br />
            {info && <div>


                <img src={info.sprites.other.home.front_default} />
                <h3 className="poke-id"> #{info.id}</h3>
                <div className="name">{type}</div>
                <div className="name">kg :{info.weight}</div>
                <div className="name">  height: {info.height}0.cm</div>
            </div>}
        </div >
    )
}

export default Card
