'use client'

// Importação de Bibliotecas Externas
import './style.css'

// Exportação do Componente em formato de Função JavaScript
export default function Button({
    children,
    action,
    type,
    style
}) {
    // Retorno da função em forma HTML
    return (
        <button
            onClick={action ? action : undefined}
            style={style ? style : undefined}
            className={`ui-button ui-button-${type}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </button>
    )
}