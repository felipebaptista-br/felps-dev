'use client'

// Importação de Bibliotecas Externas
import { useEffect, useState } from 'react'
import { getRepositories } from '@/api/github/functions'
import { BsGithub as GitHubIcon, BsLinkedin as LinkedinIcon } from 'react-icons/bs'
import Button from '@/components/button'
import Card from '@/components/card'
import Chip from '@/components/chip'
import Footer from '@/components/footer'

import './style.css'

// Exportação da Página em formato de Função JavaScript
export default function Home() {
  // Declaração de Variáveis
  const [repos, setRepos] = useState()
  const stack = [
    {
      title: 'HTML',
      description: 'In-depth knowledge of HTML'
    },
    {
      title: 'CSS',
      description: '5 years using flex and grid'
    },
    {
      title: 'JavaScript',
      description: 'Advanced knowledge in ES6'
    },
    {
      title: 'TypeScript',
      description: 'Creating high-performance codes'
    },
    {
      title: 'Nodejs',
      description: '3 years building robust servers with fastify & express'
    },
    {
      title: 'React',
      description: 'More than 4 years building components and managing states in this SPA'
    },
    {
      title: 'Cypress',
      description: 'Guarantee of clean and end-to-end tested code'
    },
    {
      title: 'Cloud',
      description: 'Years of experience with AWS and Vercel'
    }
  ]
  const socialMedia = {
    linkedin: 'https://www.linkedin.com/in/felpsbaptista/',
    github: 'https://github.com/felipebaptista-br'
  }

  // Requisitando todos os respositórios no carregamento de página
  useEffect(() => {
    fetchGithubApi()
    setRepos()
  }, [])

  const fetchGithubApi = async () => {
    const res = await getRepositories('felipebaptista-br')
    setRepos(res)
  }

  // Retorno da função em forma de HTML
  return (
    <main className='home-main'>
      <div className='home-background'>
        <section className='home-background-panel'>
          <p>Felipe Baptista</p>
          <article className='home-background-panel-content'>
            <GitHubIcon
              size={25}
              style={{
                cursor: 'pointer'
              }}
              onClick={() => window.location.href = socialMedia.github}
            />
            <LinkedinIcon
              size={25}
              style={{
                cursor: 'pointer'
              }}
              onClick={() => window.location.href = socialMedia.linkedin}
            />
          </article>
        </section>
        <section className='home-background-content'>
          <h1>Nice to meet you!. I’m Felipe Baptista</h1>
          <p>I have been a Software Engineer for over 4 years. Passionate about technology and development, call me! Let's create ideas</p>
          <Button
            type={1}
            children='CONTACT ME'
            action={() => window.scrollTo(0, document.body.scrollHeight)}
          />
        </section>
      </div>

      <div className='home-chips'>
        <section className='home-chips-content'>
          {stack.map((item) => (
            <Chip
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </div>

      <div className='home-projects'>
        <section className='home-projects-panel'>
          <h1>Projects</h1>
          <Button
            type={1}
            children='CONTACT ME'
            action={() => window.scrollTo(0, document.body.scrollHeight)}
          />
        </section>
        <section className='home-projects-content'>
          {repos ? repos.map((item) => (
            <Card
              title={item.name}
              description={item.description}
              urlProject={item.html_url}
              urlCode={item.html_url}
            />
          )) : undefined}
        </section>
      </div>

      <Footer />
    </main>
  )
}
