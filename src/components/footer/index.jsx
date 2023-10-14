'use client'

// Importação de Bibliotecas Externas
import React, { useRef, useState } from 'react'
import {FcApproval} from 'react-icons/fc'
import emailjs from '@emailjs/browser';
import Button from '@/components/button'
import Input from '@/components/input'

import './style.css'

// Exportação do Componente em formato de Função JavaScript
export default function Footer() {
    // Declaração de Variáveis
    const form = useRef();
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState(false)
    const [data, setData] = useState({
        name: undefined,
        email: undefined,
        message: undefined
    })

    // Função que realiza o envio de E-mail
    function handleSubmitMessage(e) {
        e.preventDefault();
        let error

        // Validando todos os campos para verificar se existe algum vazio, nulo ou indefinido
        Object.keys(data).map(function (key) {
            if (data[key] === undefined || data[key] === null || data[key] === '') {
                error = true
            }
        });

        // Se não houver erros, a função fará a requisição ao Emailjs para enviar as informações
        if (!error) {
            emailjs.sendForm('service_x17vyt8', 'template_6wlp1jx', form.current, 'jMi4m2mZi3a8vuhMc')
                .then((result) => {
                    console.log(result.text);
                    setMessage(true)
                }, (error) => {
                    console.log(error.text);
                });
            setAlert(false)
        } else {
            setAlert(true)
        }
    }

    // Retorno da função em forma HTML
    return (
        <footer className='ui-footer'>
            <div className='ui-footer-content'>
                <section className='ui-footer-contact'>
                    <h1>Contact</h1>
                    <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </section>
                <form ref={form} onSubmit={handleSubmitMessage} className='ui-footer-form'>
                    <Input
                        name='name'
                        children='Name'
                        style={{
                            marginBottom: '20px'
                        }}
                        onChange={(event) => setData({ ...data, name: event.target.value })}
                    />
                    <Input
                        name='email'
                        children='E-mail'
                        style={{
                            marginBottom: '20px'
                        }}
                        onChange={(event) => setData({ ...data, email: event.target.value })}
                    />
                    <Input
                        name='message'
                        children='Message'
                        style={{
                            marginBottom: '20px'
                        }}
                        onChange={(event) => setData({ ...data, message: event.target.value })}
                    />
                    {alert ? <p className='alert-form'>Preencha todos os Campos!</p> : undefined}
                    {!message ?
                        <Button
                            type={1}
                            children='SEND'
                        /> :
                        <section className='message-form'>
                            <p>MENSAGEM ENVIADA COM SUCESSO!</p>
                            <FcApproval
                                size={30}
                                style={{
                                    cursor: 'pointer'
                                }}
                            />
                        </section>}
                </form>
            </div>
            <hr />
            <div className='ui-footer-nav'>
                <p>2023 © Felipe Baptista - todos os direitos reservados </p>
            </div>
        </footer>
    )
}