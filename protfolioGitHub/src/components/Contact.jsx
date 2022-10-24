import { useEffect } from "react";
import elementInView from "../animations/elementInView";
import gsap from "gsap";

function Contact(){

    useEffect(() => {
        //guardamos el elemento en una variable para comprobar si esta en pantalla
        const contact = document.getElementById('contact')

        //animamos el estado inicial

        gsap.from('#contact', {
            opacity: 0
        })

        gsap.to('#contact', {
            opacity: 0
        })


        window.addEventListener('scroll', function()  { //escuchamos el evento de scroll 
            if (elementInView(contact, 100)){
                //ejecutamos el condicional solo si el elemento se encuentra en la pantalla
                gsap.to('#contact',{
                    duration: .4,
                    opacity: 1,
                    ease: 'linear',
                    delay: .2
                })
            }
        });
      
   }, [])

    return(
    <div id="contact" className="contact">
        <h2 className="contactTitle"><b className="green">04.</b>Contacto</h2>
        <p>¿Quieres contactar conmigo? <br/> Pulsa el botón y dejame un mensaje en mi bandeja de entrada. <br/> Te responderé lo antes posible!</p>
        <a href="mailto:gonzalorando03@gmail.com"><button>Escríbeme!</button></a>
    </div>
    )
}

export default Contact