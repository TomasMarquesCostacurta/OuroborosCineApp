function Footer(){
    return(
    <>
    <footer className='fixed bottom-0 left-0 z-20 w-full p-4 bg-headercolor   shadow md:flex md:items-center '>
                <div className='mb-4'>
                    <label htmlFor="email" className='text-Vermeiolegal'>Email:</label>
                    <input
                            type="email"
                            className="appearance-none border rounded w-full py-2 px-3 bg-Vermeiolegal text-OutroVermeio bg-searchBar"
                            placeholder="Entre no seu email:"
                        />
                </div>
                <div>
                <label htmlFor="message" className='text-Vermeiolegal'>Nome:</label>
                <textarea
                            id="message"
                            className="appearance-none border rounded  py-2 px-3 text-OutroVermeio bg-Vermeiolegal bg-searchBar w-40 h-10"
                            placeholder="Digite seu nome "
                        ></textarea>
                        </div>
                        <button
                        type="submit"
                        className="bg-headerRed hover:bg-blue-700 text-OutroVermeio font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                    <span class="text-sm text-gray-500 sm:text-center dark:text-OutroVermeio">© 2023-2024 <a href="https://flowbite.com/" class="hover:underline">Ouroboros™</a>. All Rights Reserved.
          </span>
            </footer>
</>
    )
}
export default Footer;