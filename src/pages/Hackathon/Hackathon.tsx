import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { DeveloperCard } from '../../components';
import { Back } from '../../assets/icons';
import { useHackathonRanking, useHackathon } from '../../hooks';
import { HackathonInterface } from '../../types';
import { Error500 } from '../Error500';
import { Loading } from '../Loading';
import './hackathonStyles.css';
import { Error404 } from '../Error404';

export const Hackathon: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [hackathonRanking, setHackathonRanking] = useState<any[]>([]);
    const [hackathonData, setHackathonData] = useState<HackathonInterface>();
    const { findByHackathonIdHackathonRanking } = useHackathonRanking();
    const { findOneHackathon } = useHackathon();

    const onClickBack = () => {
        navigate('/');
    };

    useEffect(() => {
        const initHackathon = async () => {
            try {
                let response = await findByHackathonIdHackathonRanking(params.id);
                setHackathonRanking(response);
                response = await findOneHackathon(params.id);
                setHackathonData(response[0]);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setError(true);
                setLoading(false);
            }
        };
        initHackathon();
    }, []);

    if (error) {
        return <Error500 />;
    }

    if (loading) {
        return <Loading />;
    }

    if (!hackathonData) {
        return <Error404 />;
    }

    return (
        <div className="hackathon_container">
            <div className="back_icon_container" onClick={onClickBack}>
                <Back />
            </div>
            <h1 className="hackathon_title">{hackathonData?.hackathon_name}</h1>
            <div className="hackathon_details_container">
                <p>Place: {hackathonData?.place}</p>
                <p>Date: {dayjs(hackathonData?.hackathon_date).format('YYYY-MM-DD')}</p>
            </div>
            <div className="hackathon_list_container">
                {hackathonRanking.map((data) => (
                    <DeveloperCard
                        key={data.id}
                        username={data.username}
                        ranking={data.ranking}
                        imageUrl={data.profile_picture}
                    />
                ))}
            </div>
        </div>
    );
};
