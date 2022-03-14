import axios from 'axios';

export const useHackathon = () => {
    return {
        findAllHackathon: async () => {
            const response = await axios.get('http://localhost:5000/hackathon');
            return response.data;
        },
        findOneHackathon: async (id?: string) => {
            const response = await axios.get(`http://localhost:5000/hackathon/${id}`);
            return response.data;
        },
    };
};
