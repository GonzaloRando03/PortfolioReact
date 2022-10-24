import { gsap } from "gsap";
import { useEffect } from "react";

import gonzaloImg from '../img/gonzalo.jpg'
import elementInView from "../animations/elementInView";

function About(){


    //efecto para las animaciones
    useEffect(()=>{
        //guardamos el elemento en una variable para comprobar si esta en pantalla
        const element = document.getElementById('about')

        //animamos el estado inicial
        gsap.from('.title', {
            y: 100,
            opacity: 0
        })

        gsap.to('.title', {
            y: 100,
            opacity: 0
        })



        gsap.from('.aboutContent', {
            y: 100,
            opacity: 0
        })

        gsap.to('.aboutContent', {
            y: 100,
            opacity: 0
        })

        window.addEventListener('scroll', function()  { //escuchamos el evento de scroll 
            if (elementInView(element, 100)){
                //ejecutamos el condicional solo si el elemento se encuentra en la pantalla
                gsap.to('.title',{
                    duration: .5,
                    opacity: 1,
                    y: 0,
                    ease: 'linear'
                })


                gsap.to('.aboutContent',{
                    duration: .7,
                    y:0,
                    delay: .3,
                    opacity: 1
                })
            }
          });

    },[])

    return(
        <div id='about' className="about">
            <h2 className="title"><b className="green">01.</b>Sobre mí</h2>
            <div className="aboutContent">
                <div className="aboutText">
                    <p>Hola! Mi nombre es <span className="green">Gonzalo Rando Serna</span> y me dedico a la informática y al desarrollo. Mi interés por este oficio apareció desde que yo era muy pequeño, siempre me apasionó este mundo e hice mis primeras páginas con <span className="green">HTML y CSS</span>. Empecé a estudiar <span className="green">Administración de sistemas informáticos y redes</span>, pero cuando descubrí el mundo del <span className="green">desarrollo fullstack</span> me enamoró por completo.</p>
                    <p>A día de hoy tengo la suerte de dedicarme al oficio de mis sueños, donde <span className="green">nunca me canso de aprender cosas nuevas</span>. Estoy enfocado en convertirme en desarrollador full stack y aprendiendo tecnologías tanto de <span className="green">backend</span> como de <span className="green">frontend</span>.</p>
                </div>
                <div className="imgAbout"> 
                    <div className="aboutGreen"></div><img  src={gonzaloImg} alt="Gonzalo Rando Serna"/>
                </div>
            </div>
        </div>
    )
}

export default About