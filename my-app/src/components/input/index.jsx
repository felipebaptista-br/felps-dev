'use client'

// Importação de Bibliotecas Externas
import './style.css'

// Exportação do Componente em formato de Função JavaScript
export default function Input({
    children,
    onChange,
    style,
    name,
    type
}) {
    // Retorno da função em forma HTML
    return (
        <input
            name={name ? name : undefined}
            className='ui-input'
            type={type}
            placeholder={children}
            style={style ? style : undefined}
            onChange={onChange ? onChange : undefined}
        />
    )
}
