import { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7146/api/Client/getAllMothers'); // שנה את ה-URL לכתובת האמיתית של ה-API שלך
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data && (
                <ul>
                    {data.map(mother => (
                        <li key={mother.idMother}>{mother.motherName}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyComponent;
