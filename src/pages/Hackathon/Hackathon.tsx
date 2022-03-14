import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { DeveloperCard } from '../../components';
import { Back } from '../../assets/icons';
import { useHackathonRanking, useHackathon } from '../../hooks';
import { HackathonInterface } from '../../types';
import './hackathonStyles.css';

export const Hackathon: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [hackathonRanking, setHackathonRanking] = useState<any[]>([]);
    const [hackathonDate, setHackathonDate] = useState<HackathonInterface>();
    const { findByHackathonIdHackathonRanking } = useHackathonRanking();
    const { findOneHackathon } = useHackathon();

    const onClickBack = () => {
        navigate('/');
    };

    useEffect(() => {
        const initHackathon = async () => {
            let response = await findByHackathonIdHackathonRanking(params.id);
            setHackathonRanking(response);
            response = await findOneHackathon(params.id);
            console.log(response);
            setHackathonDate(response[0]);
        };
        initHackathon();
    }, []);

    return (
        <div className="hackathon_container">
            <div className="back_icon_container" onClick={onClickBack}>
                <Back />
            </div>
            <h1 className="hackathon_title">{hackathonDate?.hackathon_name}</h1>
            <div className="hackathon_details_container">
                <p>Place: {hackathonDate?.place}</p>
                <p>Date: {dayjs(hackathonDate?.hackathon_date).format('YYYY-MM-DD')}</p>
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
