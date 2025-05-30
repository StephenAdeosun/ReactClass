import axios from 'axios';
import React, {useEffect, useState} from 'react';

export default function FetchData() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    
    // useEffect(function,dependency)
    useEffect(() => {
        const fetchData2 = async () => {
            try{
                const API_URL = import.meta.env.VITE_API_URL_2;
                const response = await axios.get(API_URL);
                console.log(response.data.results);
                setUser(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            }
        }
        fetchData2();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return(
        <div>
            <h1>User Data</h1>
            
            {user ? (
                <div>
                   {user.map((user,index)=> (
                        <div key={index}>
                            <h2>{user.name.first}</h2>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <img src={user.img_url} alt="" />
                            
                        </div>
                   ))}
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}