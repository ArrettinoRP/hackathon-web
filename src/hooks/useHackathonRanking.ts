import axios from 'axios';

export const useHackathonRanking = () => {
    return {
        findByHackathonIdHackathonRanking: async (id?: string) => {
            const response = await axios.get(`http://localhost:5000/hackathon-ranking/hackathon/${id}`);
            return response.data;
        },
    };
};
