import { gsap } from "gsap";
import { useEffect } from "react";
import doc from '../doc/Curriculum-GonzaloRando.pdf'

function Init(){

    //efecto para las animaciones
    useEffect(()=>{
        //animación texto 1
        gsap.from('#init1', {
            opacity: 0,
            y: 100,
        })

        gsap.to('#init1', {
            opacity: 1,
            y: 0,
            duration: .5
        })

        //animación texto 2
        gsap.from('#init2', {
            opacity: -.2,
            y: 120,
        })

        gsap.to('#init2', {
            opacity: 1,
            y: 0,
            duration: .7
        })

        //animación texto 3
        gsap.from('#init3', {
            opacity: -.4,
            y: 130,
        })

        gsap.to('#init3', {
            opacity: 1,
            y: 0,
            duration: 1
        })

        //animación texto 4
        gsap.from('#init4', {
            opacity: -.6,
            y: 140,
        })

        gsap.to('#init4', {
            opacity: 1,
            y: 0,
            duration: 1.2
        })

        //animación botón
        gsap.from('#init5', {
            opacity: -.6,
            y: 140,
        })

        gsap.to('#init5', {
            opacity: 1,
            y: 0,
            duration: 1
        })

        gsap.from('#about', {
            opacity: -.6,
            y: 140,
        })

        gsap.to('#about', {
            opacity: 1,
            y: 0,
            duration: 1
        })


    },[])

    return(
        <div className="init">
            <p id="init1">Hola! Mi nombre es</p>
            <h1 className="white" id="init2">Gonzalo Rando Serna</h1>
            <h1  id="init3">Desarrollador y <br/> administrador.</h1>
            <p  id="init4">Soy un administrador de sistemas y redes que se dedicó y especializó en el desarrollo. Me entusiasmó mucho, aprendí varias tecnologías y realicé algunos proyectos.</p>
            <a id="about" href={doc}>
                <button className="web" id="init5" >Puedes ver mi CV!</button>
            </a>
        </div>
    )
}

export default Init