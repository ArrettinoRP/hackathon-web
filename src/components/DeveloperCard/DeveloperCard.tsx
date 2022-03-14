import React from 'react';
import './DeveloperCard.css';

interface DeveloperCardProps {
    imageUrl: string;
    username: string;
    ranking?: string;
    points?: string;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ imageUrl, username, ranking, points }) => {
    return (
        <div className="developer_card_container">
            <img src={imageUrl} alt="avatar" />
            <span>{username}</span>
            {ranking && <h2>{ranking}º</h2>}
            {points && <h4>{points} PTS</h4>}
        </div>
    );
};
