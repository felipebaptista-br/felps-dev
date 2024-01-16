import axios, { AxiosResponse } from 'axios';

interface FetchGitHubRepositoriesParams {
    userName: string;
}

async function fetchGitHubRepositories({ userName }: FetchGitHubRepositoriesParams) {
    try {
        const response: AxiosResponse = await axios.get(`https://api.github.com/users/${userName}/repos`);
        return response.data;
    } catch (error: any) {
        throw new Error('Failed to fetch GitHub repositories' + error.message);
    }
}

export {
    fetchGitHubRepositories
}
