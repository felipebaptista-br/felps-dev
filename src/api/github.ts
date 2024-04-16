export const getAllRepositoriesByUserNameGitHub = async (userName: string) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}/repos`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}