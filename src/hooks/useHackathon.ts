import axios from 'axios';

export const useHackathon = () => {
    return {
        findAllHackathon: async () => {
            const response = await axios.get('http://localhost:5000/hackathon');
            console.log(response.data);
            return response.data;
        },
    };
};
