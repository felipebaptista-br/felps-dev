
import api from './api'

export const getRepositories = async (user) => {
    let res

    await api.get(`/users/${user}/repos`).then((response) => {
        res = response.data
    }).catch((error) => {
        res = error
    })

    return res
}