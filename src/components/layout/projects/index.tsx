'use client';

import React, { useEffect, useState } from 'react';
import { RepositoryProps } from '@/@types/repository';
import { ResponsesControllerProps } from '@/@types/responses';
import { getAllRepositoriesByUserNameGitHub } from '@/api/github';
import { Card, Loader } from '@/components';
import { FaConnectdevelop } from "react-icons/fa6";

import './style.css';

const Root = ({ initialRepos }: { initialRepos: RepositoryProps[] }) => {
    const [repos, setRepos] = useState<RepositoryProps[]>(initialRepos);
    const [requestController, setRequestController] = useState<ResponsesControllerProps>({
        loading: true,
        error: { error: false, message: '' }
    });

    useEffect(() => {
        const fetchRepos = async () => {
            const repos = await getAllRepositoriesByUserNameGitHub('felipebaptista-br');
            setRepos(repos);
            setRequestController({
                loading: repos ? false : true,
                error: {
                    error: repos.message === 'Not Found' ? true : false,
                    message: repos.message
                }
            });
        }
        fetchRepos();
    }, [])

    if (requestController?.loading) {
        return (
            <div>
                <IntroProjects />
                <div className='project-layout-loader'>
                    <Loader.Root message='Loading...' />
                </div>
            </div>
        )
    }

    if (!requestController?.loading && !requestController?.error?.error) {
        return (
            <div>
                <IntroProjects />
                <GridProjects repos={repos} />
            </div>
        )
    }

    if (requestController?.error?.error) {
        return (
            <div>
                <IntroProjects />
                <div className='project-layout-error'>
                    <h3>Ops... {requestController?.error?.message} :(</h3>
                </div>
            </div>
        )
    }
}

const IntroProjects = () => {
    return (
        <div className='intro-projects'>
            <h1>A little of my works</h1>
            <p>Constantly striving to make my repositories well-documented and user-friendly, I aim for the developer community to utilize them for problem-solving and feel empowered to contribute.</p>
        </div>
    )
}

const GridProjects = ({ repos }: { repos: RepositoryProps[] }) => {
    return (
        <div className='grid-projects'>
            {repos.map((repo) => (
                <Card.Root onClick={() => window.open(repo.html_url, '_blank')} key={repo.id}>
                    <Card.Icon icon={<FaConnectdevelop size={25} color='#B779FF' />} />
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Description>{repo.description}</Card.Description>
                </Card.Root>
            ))}
        </div>
    );
};

Root.getServerData = async () => {
    const repos = await getAllRepositoriesByUserNameGitHub('felipebaptista-br');
    return { initialRepos: repos };
};

export { Root };
