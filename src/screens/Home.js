import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BASE_URL from '../../config/Config';
import Container from '../components/Container';
import UserCard from '../components/UserCard';

const api = axios.create(BASE_URL);


const Home = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        await api.get('/').then((reponse) => {
            console.log(reponse); const myusers = reponse.data;
            setUsers(myusers);
        });
    };
    useEffect(() => getUsers(), []);
    return (
        <Container>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </Container>
    );
}

export default Home;