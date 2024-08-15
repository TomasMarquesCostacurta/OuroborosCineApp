import { useState } from "react";
import emailjs from '@emailjs/browser'

function Footer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
function sendEmail(e){
    e.preventDefault();
    alert("TESTE")
    if(name==='' || email===''|| message ===''){
        alert('Preencha todos os campos')
    }

    const templateParams = { 
        from_name: name,
        message: message,
        email: email
    }
    emailjs.send("service_rn7f6ve","template_lsz5jzl", templateParams, "gm39eJixteC0899YU")
    .then((Response) => {
        console.log("EMAIL ENVIADO", Response.status, Response.text)
        setName('')
        setEmail('')
        setMessage('')

    }, (err) => {
        console.log("Erro: ", err)
    })
}
    return (
        <>
            <footer className='fixed bottom-0 left-0 z-20 w-full p-4 bg-headercolor   shadow md:flex md:items-center '>
                <div className='mb-4'>
                    <form className="form" onSubmit={sendEmail }>
                        <label htmlFor="email" className='text-Vermeiolegal'>Email:</label>
                        <input
                            type="text"
                            className="appearance-none border rounded w-full py-2 px-3 bg-Vermeiolegal text-OutroVermeio bg-searchBar"
                            placeholder="Entre no seu nome:"
                            onChange={(e) =>setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type="email"
                            className="appearance-none border rounded w-full py-2 px-3 bg-Vermeiolegal text-OutroVermeio bg-searchBar"
                            placeholder="Entre no seu email:"
                            onChange={(e) =>setEmail(e.target.value)}
                            value={email}
                        />
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 bg-Vermeiolegal text-OutroVermeio bg-searchBar"
                            placeholder="Entre no sua mensagem:"
                            onChange={(e) =>setMessage(e.target.value)}
                            value={message}
                        />

                        <input type="submit" value="Enviar" />
                    </form>
                </div>
                <span class="text-sm text-gray-500 sm:text-center dark:text-OutroVermeio">© 2023-2024 <a href="https://xvideos.com/" class="hover:underline">Ouroboros™</a>. All Rights Reserved.
                </span>
            </footer>
            <script
            >

            </script>
        </>

    )
}
export default Footer;