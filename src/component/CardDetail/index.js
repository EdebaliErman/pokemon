import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pokeInfo, pokeSpecies } from '../../api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faKhanda,
    faJedi,
    faEarthAsia,
    faDna,
    faEgg
} from '@fortawesome/free-solid-svg-icons';
import './style.css'

function CardDetail() {
    const { name } = useParams()
    const [info, setInfo] = useState()
    const [species, setSpecies] = useState()

    useEffect(() => {
        pokeInfo(setInfo, name)
        pokeSpecies(setSpecies, name)
    }, [])
    return (
        <div className='card-detail'>
            {info &&
                species &&
                <div className='poke-detail' >
                    <div className='poke-img-power' style={{ color: species.color.name }}>
                        <h1 style={{ fontSize: "3rem" }}>{name} #{info.id}</h1>
                        <img src={info.sprites.other.home.front_default} alt='pokemonImage' style={{ filter: ` drop-shadow(12px 12px 3px ${species.color.name})` }} /><br></br>
                        <h2>KG #{info.weight} height : {info.height}0.cm</h2>
                        <div className='stat-bar' >

                            <h2>Happines</h2>
                            <div className='skill-container' >
                                <div className='skill' style={{ width: `${species.base_happiness}%`, backgroundColor: species.color.name }}>{species.base_happiness}</div>
                            </div>
                            <h2>capture rate</h2>
                            <div className='skill-container' >
                                <div className='skill' style={{ width: 100 > `${species.capture_rate}%`, backgroundColor: species.color.name }}>{species.capture_rate}</div>
                            </div>
                        </div>
                        <div className='font-icon'>
                            <div>
                                <FontAwesomeIcon icon={faKhanda} />
                                <h1>{info.abilities[0].ability.name}</h1>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faJedi} />
                                <h1>{info.abilities[1].ability.name}</h1>
                            </div>
                            <div> <FontAwesomeIcon icon={faEarthAsia} />
                                <h1>{species.habitat.name}</h1>
                            </div>
                            <div> <FontAwesomeIcon icon={faDna} />
                                <h1>{species.growth_rate.name}</h1>
                            </div>
                            {species.egg_groups.map((egg, i) =>
                                <div key={i}> <FontAwesomeIcon icon={faEgg} />
                                    <h1> {egg.name}</h1>
                                </div>
                            )}
                        </div>
                        <div>
                            <p>
                                {species.flavor_text_entries[0].flavor_text}
                            </p>
                        </div>
                    </div>

                    <div>
                        {info.stats.map((item, i) =>
                            <div className='stat-bar' key={i}>
                                <h4>{item.stat.name} </h4>
                                <div className='skill-container' >
                                    <div className='skill' style={{ width: 100 > `${item.base_stat}%`, backgroundColor: "red" }}>{item.base_stat}</div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>}

            <div style={{ display: 'flex', justifyContent: "space-around", marginBottom: "10rem", flexWrap: "wrap" }}>
                <div className='game-index' >
                    <h2>Game Index</h2>

                    {info && info.game_indices.slice(0, 9).map((item, g) => item.game_index &&
                        <div key={g} className='star-bar'>
                            <div className='skill-container'>
                                <div className='skill' style={{ width: 100 > `${item.game_index}%`, backgroundColor: `${item.version.name}` }} >{item.game_index}</div>
                            </div>
                        </div>)}
                </div>

                <div>
                    <h1>Moves</h1>
                    <div className='move'>
                        {info && info.moves.map((item, i) => <div key={i}>
                            <div>
                                <h2>
                                    {item.move.name}
                                </h2>
                            </div>
                        </div>)}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardDetail
