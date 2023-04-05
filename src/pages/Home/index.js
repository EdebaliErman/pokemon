import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../../component/Card';
import { Link } from 'react-router-dom';
import { pokeApi } from '../../api';
function Home() {
    const [poke, setPoke] = useState()
    const [search, setSearch] = useState()
    useEffect(() => {
        pokeApi(setPoke)

    }, [])
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const filteredData = poke && poke.filter(item =>
        item.name.toLowerCase().includes(search)
    );
    return (
        <div>
            <div>
                <form className='search' onSubmit={handleSearch}>
                    <input type='text' value={search} onChange={handleSearch} />
                </form>
            </div>

            <div className='poke-list'>
                {poke && !search && poke.map((item, i) => <Link key={i} to={`/pokemon/${item.name}`}>< Card name={item.name} /></Link>)}
                {poke && filteredData.map((item, i) => <Link key={i} to={`/pokemon/${item.name}`}>< Card name={item.name} /></Link>)}
            </div>
        </div>
    )
}

export default Home
