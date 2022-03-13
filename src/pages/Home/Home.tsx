import React, { useEffect, useState } from 'react';
import { HackathonCard } from '../../components';
import { useHackathon } from '../../hooks';
import { HackathonInterface } from '../../types';
import './homeStyles.css';

export const Home: React.FC = () => {
    const [hackathonList, setHackathonList] = useState<HackathonInterface[]>([]);
    const { findAllHackathon } = useHackathon();

    useEffect(() => {
        const initHome = async () => {
            const response = await findAllHackathon();
            setHackathonList(response);
        };
        initHome();
    }, []);

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
