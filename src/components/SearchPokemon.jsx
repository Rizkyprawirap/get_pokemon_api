import React, { useEffect, useState } from 'react'
import axios from 'axios';


const baseURL = "https://pokeapi.co/api/v2/ability/";

export default function SearchPokemon() {
    
    const [search, setSearch] = useState("");
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonEffectEntries, setPokemonEffectEntries] = useState([]);
    const [pokemonFlavorText, setPokemonFlavorText] = useState([]);


    const findPokemon = () => {
        console.log("Rendered!!");
        axios({
            method: 'GET',
            url: `${baseURL}${search}`,
        }).then((result, i) => {
            setPokemonName(result.data.pokemon);
            setPokemonEffectEntries(result.data.effect_entries)
            setPokemonFlavorText(result.data.flavor_text_entries)
            console.log(result.data.flavor_text_entries);
        });
    };

    return (
        <div>
            <h1>Pokemon Component</h1>
            <div>
                <input placeholder='Find skill' onChange={(write) => setSearch(write.target.value)} />
                <button onClick={() => findPokemon()}>Find Now!</button>
            </div>

            <div>
                <h3>Pokemon name list: </h3>
                {pokemonName.map((data, i) => {
                    return (
                        <span key={i}>{data.pokemon.name},</span>
                    )
                })}
            </div>
            
            <div>
                <h3>Pokemon Effect Entries : </h3>
                {pokemonEffectEntries.map((data, i) => {
                    return (
                        <span key={i}>{data.short_effect},</span>
                    )
                })}
            </div>
            
            <div>
                <h3>Pokemon Flavor Text : </h3>
                {pokemonFlavorText.map((data, i) => {
                    if(data.language.name === "en") {
                        return <span key={i}>{data.flavor_text}</span>
                    }
                })}
            </div>

        </div>
    )
}
