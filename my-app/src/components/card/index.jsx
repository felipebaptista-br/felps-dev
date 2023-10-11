'use client'

// Importação de Bibliotecas Externas
import Button from '@/components/button'

import './style.css'

// Exportação do Componente em formato de Função JavaScript
export default function Card({
    title,
    description,
    urlProject,
    urlCode
}) {
    // Retorno da Função em forma HTML
    return (
        <main className='ui-card'>
            <section className='ui-card-content'>
                <Button
                    children='VIEW PROJECT'
                    action={() => window.location.href = urlProject}
                    type={2}
                />
                <Button
                    children='VIEW CODE'
                    action={() => window.location.href = urlCode}
                    type={2}
                />
            </section>
            <h3>{title ? title : 'Sem conteúdo'}</h3>
            <p>{description ? description : 'Sem conteúdo'}</p>
        </main>
    )
}