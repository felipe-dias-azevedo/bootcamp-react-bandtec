import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import imgAdd from '../assets/images/add-music-img.png';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../api';

function EditMusic(props) {

  const [musicEdit, setMusicEdit] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // async function getMusicbyId() {
    //     const resposta = await api.get(`/${id}`);
    // }
    api.get(`/${id}`).then(res => {
      setMusicEdit(res.data);
    });
  }, [id]);

  function handle(e) {
    const newMusic = {...musicEdit};
    newMusic[e.target.id] = e.target.value;
    setMusicEdit(newMusic);
  }

  function atualizar(e) {
    e.preventDefault();
    api.put(`/${id}`, musicEdit).then(res => {
      console.log(res.statusText);
      if (res.status === 200) {
        alert("Música alterada com sucesso!");
      } else {
        alert("Opa! Não foi possível alterar esta música...");
      }
    })
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="add-music">
          <form onSubmit={atualizar}>
            <h1>Editar Musica</h1>
            <div>
              <label>Nome:
              <input type="text" id="nome" onChange={handle} defaultValue={musicEdit.nome} /></label>
            </div>
            <div>
              <label>Genêro:
              <input type="text" id="genero" onChange={handle} defaultValue={musicEdit.genero} /></label>
            </div>
            <div>
              <label>Ano Lançamento:</label>
              <input type="text" id="ano" onChange={handle} defaultValue={musicEdit.ano} />
            </div>

            <div>
              <label> Imagem (url):</label>
              <input type="text" id="url" onChange={handle} defaultValue={musicEdit.url} />
            </div>
            <div>
              <button className="btn-green left" type="submit" >ATUALIZAR</button>
              <Link to="/minhas-musicas">
                <button className="btn-green right" type="submit" >Voltar</button>
              </Link>
            </div>
          </form>
          <img src={imgAdd} alt="" />
        </div>
      </div>

    </>
  );
}

export default EditMusic;