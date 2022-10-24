import { gsap } from "gsap";
import { useEffect } from "react";

function Main(props){

    //efecto para las animaciones 
    useEffect(() => {

        //animación para la transición
        gsap.from('.transition', {
            opacity: 1
        })

        gsap.to('.transition',{
            opacity: 0,
            display: 'none',
            delay: .2
        })

        //animación para el header
        gsap.from('#header', {
            y: -100
        })

        gsap.to('#header',{
            duration: .5,
            y: 0,
            ease: 'linear',
        })

        //Ejecutar el codigo al hacer scroll
        let scrollPos = 0 //posición inicial del scroll
        window.addEventListener('scroll', function()  { //escuchamos el evento de scroll 
            //se ejecuta si va hacia arriba
            if ((document.body.getBoundingClientRect()).top > scrollPos){
                //timeout para que no se ejecute cada pixel que scrolleamos
                this.setTimeout(()=>{}, 1000)
                gsap.to('#header',{
                    duration: .5,
                    y: 0,
                    ease: 'linear'
                })
            //se ejecuta si va hacia abajo
            }else{
                gsap.to('#header',{
                    duration: .5,
                    y: -100,
                    ease: 'linear'
                })
            }
                
            scrollPos = (document.body.getBoundingClientRect()).top;
          });
        
        //animaciones para las redes y el correo
        gsap.from('#social', { 
            opacity: -1,
        })

        gsap.to('#social',{
            duration: .7,
            opacity: 1,
            ease: 'linear'
        })


        //menu para moviles
        const nav = document.getElementById('menuNav')
        const button = document.getElementById('menuButton')
        const list = document.getElementById('menuList')
        let active = false
        
        gsap.from(nav, {
            x: -1200
        })

        gsap.to(nav, {
            x: -1200
        })

        button.addEventListener('click', function(){
            if (active){
                gsap.to(nav, {
                    x: -1200,
                    duration: .5
                })
            }else{
                gsap.to(nav, {
                    x: 0,
                    duration: .5
                })
            }
            active = !active
        })


        list.addEventListener('click', function(){
            gsap.to(nav, {
                x: -1200,
                duration: .5
            })
        })
       

        

    }, [])

    


    return (
        <div>
            {/* CABECERA */}
            <header id="header">
                <div className="circle">
                    <b>G</b>
                </div>

                    <ol>
                        <li><a id="hli" href="#about">Sobre mí</a></li>
                        <li><a id="hli" href="#tech">Tecnologías</a></li>
                        <li><a id="hli" href="#projects">Proyectos</a></li>
                        <li><a id="hli" href="#contact">Contacto</a></li>
                    </ol>

                <button id="menuButton">
                    <div className="linea"></div>
                    <div className="linea"></div>
                    <div className="linea"></div>
                </button>
            </header>

            <nav id="menuNav">
                <div className="center">
                    <ol id="menuList">
                        <li className="green"><a className="white" id="hli" href="#about">Sobre mí</a></li>
                        <li className="green"><a className="white" id="hli" href="#tech">Tecnologías</a></li>
                        <li className="green"><a className="white" id="hli" href="#projects">Proyectos</a></li>
                        <li className="green"><a className="white" id="hli" href="#contact">Contacto</a></li>
                    </ol>
                </div>
            </nav>

            <div className="transition"></div>
            

            {/* REDES Y CORREO */}
            <div id="social">
                <div>
                    <ul className="social">
                        <li >
                            <a href="https://github.com/GonzaloRando03" target="_blank" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            </a>
                        </li>
                        <li >
                            <a href="https://www.instagram.com/gonzaloors_23/" target="_blank" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                <title>Instagram</title>
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/gonzalo-rando-serna-876a10249/" target="_blank" aria-label="Linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                                <title>LinkedIn</title>
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mailRight">
                    <a href="mailto:gonzalorando03@gmail.com">gonzalorando03@gmail.com</a>
                </div>
            </div>
            {props.children}
            <footer>
                <p>Developed by Gonzalo Rando Serna (gonzalorando03@gmail.com)</p>
            </footer>
        </div>
    )
}

export default Main