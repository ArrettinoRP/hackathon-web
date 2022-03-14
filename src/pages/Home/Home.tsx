import React, { useEffect, useState } from 'react';
import { HackathonCard } from '../../components';
import { useHackathon } from '../../hooks';
import { HackathonInterface } from '../../types';
import { Loading } from '../Loading';
import { Error500 } from '../Error500';
import './homeStyles.css';

export const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [hackathonList, setHackathonList] = useState<HackathonInterface[]>([]);
    const { findAllHackathon } = useHackathon();

    useEffect(() => {
        const initHome = async () => {
            try {
                const response = await findAllHackathon();
                setHackathonList(response);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
            }
        };
        initHome();
    }, []);

    if (error) {
        return <Error500 />;
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="home-container">
            {hackathonList.map((data) => (
                <HackathonCard
                    key={data.id}
                    id={data.id}
                    name={data.hackathon_name}
                    date={data.hackathon_date}
                    place={data.place}
                />
            ))}
        </div>
    );
};
