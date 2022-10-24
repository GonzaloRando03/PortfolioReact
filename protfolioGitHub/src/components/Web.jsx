import { useEffect } from 'react'
import gsap from 'gsap'
import elementInView from '../animations/elementInView'

import webImg from '../img/web.png'

function Web(){

    useEffect(() => {
        //guardamos el elemento en una variable para comprobar si esta en pantalla
        const web = document.getElementById('web')

        //animamos el estado inicial

        gsap.from('#web', {
            x: -50,
            opacity: 0
        })

        gsap.to('#web', {
            x: -50,
            opacity: 0
        })


        window.addEventListener('scroll', function()  { //escuchamos el evento de scroll 
            if (elementInView(web, 100)){
                //ejecutamos el condicional solo si el elemento se encuentra en la pantalla
                gsap.to('#web',{
                    duration: .4,
                    x: 0,
                    opacity: 1,
                    ease: 'linear',
                    delay: .2
                })

            }
          });
      
   }, [])

    return(
        <div className='center web'>
            <div id='web'>
                <h2>Web personal</h2>
                <div className='webBefore'>
                    <a href='https://grproyectos.netlify.app'><b>Visitar la página</b></a>
                </div>
                <img className='webImg' src={webImg} alt='Imagen Web' />
                <div className='webFooter'>
                    <p>Página web GRProyectos donde podrás encontrar todos mis proyectos de interés personal donde trabajo tecnologías que me llaman la atención o practico otras que me gustaría usar mas profesionalmente</p>
                </div>
            </div>
            
        </div>
    )
}

export default Web