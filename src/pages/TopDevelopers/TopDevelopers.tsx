import React, { useEffect, useState } from 'react';
import { DeveloperCard } from '../../components';
import { useHackathonRanking } from '../../hooks';
import './topDevelopersStyles.css';

export const TopDevelopers: React.FC = () => {
    const [developersRanking, setDevelopersRanking] = useState<any[]>([]);
    const { getDevelopersRanking } = useHackathonRanking();

    useEffect(() => {
        const initHome = async () => {
            const response = await getDevelopersRanking();
            setDevelopersRanking(response);
        };
        initHome();
    }, []);

    return (
        <div className="top_developers_container">
            <h1 className="top_developers_title">Top Developers</h1>
            {developersRanking.map((data) => (
                <DeveloperCard
                    key={data.id}
                    username={data.username}
                    points={data.points}
                    imageUrl={data.profile_picture}
                />
            ))}
        </div>
    );
};
