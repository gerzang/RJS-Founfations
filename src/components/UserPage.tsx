import axios from "axios"
import { useEffect, useState } from "react"
import { User, UserListResponse } from "../interfaces";

export const UserPage = () => {

    const [users, setUsers] = useState<User[]>([])

    const fetchUsers = async (): Promise<User[]> => {
        // fetch('https://reqres.in/api/users?page=2').
        // then(res => res.json()).
        // then(data => console.log(data))

        // axios.get<UserListResponse>('https://reqres.in/api/users?page=2').
        // then(res => console.log(res.data)); 
        try {
            const { data } = await axios.get<UserListResponse>('https://reqres.in/api/users?page=2');
            return data.data;
        } catch (error) {
            console.log(error);
            return [];
        }

    }

    useEffect(() => {
        fetchUsers().then(data => setUsers(data))
    }, [])


    return (
        <>
            <h3>Usuarios: </h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td><img style={{ width: 50 }} src={user.avatar} alt="user avatar" /></td>
                                <td>{user.first_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </>
    )
}


