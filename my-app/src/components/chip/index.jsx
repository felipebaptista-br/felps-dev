'use client'

// Importação de Bibliotecas Externas
import './style.css'

// Exportação do Componente em formato de Função JavaScript
export default function Chip({ title, description }) {
    // Retorno da função em forma HTML
    return (
        <main className='ui-chip'>
            <h1>{title}</h1>
            <p>{description}</p>
        </main>
    )
}