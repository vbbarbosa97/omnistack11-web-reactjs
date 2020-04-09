import React, {useState, useEffect} from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import {
    Container,
    Header,
    IncidentsList,
} from './styles';

export default function Profile(){
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);

    async function handleIncidents(){
        const response = await api.get('/profile', {
            headers: {
                Authorization: ongId,
            }
        });

        setIncidents(response.data);
    }

    useEffect(() => {

        handleIncidents();
    }, [ongId]);

    async function handleDeleteIncident(id){
      try{
        await api.delete(`/incidents/${id}`, {
            headers: {
                Authorization: ongId,
            }
        });

        handleIncidents();
      } catch(err){
          alert('Erro ao deletar o caso');
      }
    }

    function handleLogout(){
        localStorage.setItem('ongId','' );
        localStorage.setItem('ongName','' );

        history.push('/');
    }

    return (
        <Container>
            <Header>
                <img src={logoImg} alt="logo" />
                <span>Bem vinda, {ongName} </span>

                <Link to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"  />
                </button>
            </Header>
            <h1>Casos Cadastrados</h1>
            <IncidentsList>
                
                {
                    incidents.map( incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title} </p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description} </p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)} </p>

                            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>
                    ))
                }
                

            </IncidentsList>
        </Container>
    );
}