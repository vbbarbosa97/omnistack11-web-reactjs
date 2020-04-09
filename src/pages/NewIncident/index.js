import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import{
    Container,
    Content,
    Section,
    Form,
}from './styles';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try{
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');
        } catch(err){
            alert('Algo deu errado na criação do caso, tente novamente!');
        }
    }

    return (
        <Container>
            <Content>
                <Section>
                    <img src={logoImg} alt="Logo" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link to="/profile" >
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </Section>
                <Form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value) }
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value) }
                    />
                    
                    <button type="submit">Cadastrar</button>
                </Form>
            </Content>
        </Container>
    );
}