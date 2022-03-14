import React from 'react';
import './DeveloperCard.css';

interface DeveloperCardProps {
    imageUrl: string;
    username: string;
    ranking: string;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ imageUrl, username, ranking }) => {
    return (
        <div className="developer_card_container">
            <img src={imageUrl} alt="avatar" />
            <span>{username}</span>
            <h2>{ranking}º</h2>
        </div>
    );
};
