import React, { useEffect, useState } from 'react';
import { DeveloperCard } from '../../components';
import { Error500 } from '../Error500';
import { Loading } from '../Loading';
import { useHackathonRanking } from '../../hooks';
import './topDevelopersStyles.css';

export const TopDevelopers: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [developersRanking, setDevelopersRanking] = useState<any[]>([]);
    const { getDevelopersRanking } = useHackathonRanking();

    useEffect(() => {
        const initHome = async () => {
            try {
                const response = await getDevelopersRanking();
                setDevelopersRanking(response);
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
