import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import addMusic from '../assets/images/add-music-img.png';
import api from '../api';

function AddMusica() {

    const [musicData, setMusicData] = useState({
        nome: "",
        genero: "",
        ano: 0,
        url: "",
    });

    const handle = (e) => {
        const newMusic = {...musicData, [e.target.id]: e.target.value};
        // newMusic[e.target.id] = e.target.value;
        setMusicData(newMusic);
        // console.log(newMusic)
    }

    const sendMusic = (e) => {
        e.preventDefault();
        api.post("/", musicData)
            .then(res => {
                console.log(res);
            });
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form onSubmit={sendMusic}>
                        <h1>Adicionar</h1>
                        <div>
                            <label>Nome: <input type="text" id="nome" onChange={handle} /></label>
                        </div>
                        <div>
                            <label>Genêro: <input type="text" id="genero" onChange={handle} /></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text" id="ano" onChange={handle} />
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text" id="url" onChange={handle} />
                        </div>
                        <div>
                            <button className="btn-green left" type="submit">
                                Enviar
                            </button>
                            {/* <Button lado="left" destino="/minhas-musicas">Enviar</Button> */}
                        </div>
                    </form>
                    <img src={addMusic} alt="" />
                </div>
            </div>

        </>
    )
}

export default AddMusica;