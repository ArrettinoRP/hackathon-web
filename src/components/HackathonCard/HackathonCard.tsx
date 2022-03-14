import React from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import './hackathonCard.css';

interface HackathonCardProps {
    id: number;
    name: string;
    place: string;
    date: string;
}

export const HackathonCard: React.FC<HackathonCardProps> = ({ id, name, place, date }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`hackathon/${id}`);
    };
    return (
        <div className="Hackathon_card_container" onClick={onClick}>
            <h3 className={'name'}>{name}</h3>
            <div className="details_container">
                <div>{place}</div>
                <div>{dayjs(date).format('YYYY-MM-DD')}</div>
            </div>
        </div>
    );
};
