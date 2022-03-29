import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../pages/home/home.css"
import { Sidebar, Navbar } from "../components"

const PokeMon = () =>{
    const [names, setNames] = useState({
        pokemon:'',
    });
    const [results, setResults] = useState({
        res1:'',
        res2:'',
        res3:'',
    })
    const [data, setData] = useState(false);
    const inputAdded = (event) =>{
        const { name, value } = event.target;
        setNames((previous)=>{
            return{
                ...previous,
                [name]:value,
            }
        })
    }
    // if a button clicked function:
    const getPokemon = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon-form/${names.pokemon}`).then(
            (response)=>{
                console.log(response.data);  //1-results
            }
        )
        // without axios:
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${names.pokemon}`).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data.whatEverValueComes);  //1-results
        })
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-form/${names.pokemon}`)
        .then((response) => {
            setResults((vals) => {
                console.log('api')
                return{
                    ...vals,
                    res1:response.data.name,
                    res2:response.data.order,
                    res3: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${names.pokemon}.png`,
                }
                
            })
            
        })
    },[names.pokemon]) 
    const Pok = () =>{
        if(names.pokemon != ''){
            return(
                <>
                    <p>Id: {names.pokemon} <br/>
                     Name:<span style={{textTransform:"uppercase"}}>{results.res1}</span><br/>
                    Order: {results.res2} <br/></p>
                    { setData(true) }
                </>
            )
        }else{
            return (
                <></>
            )
        }
    }
    return(
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <center><h1>PokeMon Search Api</h1></center>
                    <form>
                        <div >
                            <input type="search" placeholder='Enter/Search Pokemon Number' value={names.pokemon} name='pokemon' onChange={inputAdded}/>
                        </div>
                        <Pok/>
                        {
                        (data)&&<img src={results.res3} className='img-fluid' alt="Pokemon Api Results"/>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PokeMon;