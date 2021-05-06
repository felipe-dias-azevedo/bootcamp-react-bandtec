import React, { useEffect, useState } from 'react';
import api from '../api';
import CardMusica from '../components/CardMusica';
import NavBar from '../components/NavBar';

function MinhasMusicas() {

    const [musics, setMusics] = useState([]);

    useEffect(() => {
        api.get('/');
        
        async function getAllMusics() {
            const res = await api.get('/');
            console.log(res.data);
            setMusics(res.data);
        }

        getAllMusics();
        // const resposta = api.get("/").then(() => {
        //     console.log("felipe")
        // });
        // console.log("res", resposta);
    }, []);

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="filter">
                    {/* adicionar button com filho, lado e destino aqui! */}
                        <button className="btn-green right">Adicionar</button>
                    {/* adicionar button com filho, lado e destino aqui! */}
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                {
                    musics.map(m => {
                        return (<CardMusica key={m.id} nome={m.nome} genero={m.genero} ano={m.ano} />)
                    })
                }
                </div>
            </div>
        </>
    );
}

export default MinhasMusicas;