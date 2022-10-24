import { gsap } from "gsap";
import { useEffect } from "react";

import elementInView from "../animations/elementInView";

import angular from '../img/angular.png'
import css from '../img/css.png'
import git from '../img/git.png'
import html from '../img/html.png'
import js from '../img/js.png'
import mongo from '../img/mongo.png'
import node from '../img/node.png'
import python from '../img/python.png'
import reactimg from '../img/react.png'
import sql from '../img/sql.png'
import ts from '../img/ts.png'

function Tech(){

    const arrayImg = [html, css, git, js, ts, python, mongo, sql, node, reactimg, angular ]

    //efecto para las animaciones 
    useEffect(() => {
         //guardamos el elemento en una variable para comprobar si esta en pantalla
         const tech = document.getElementById('tech')

         //animamos el estado inicial
 
         gsap.from('#tech', {
             y: 100,
             opacity: 0
         })

         gsap.to('#tech', {
          y: 100,
          opacity: 0
      })
 
 
         window.addEventListener('scroll', function()  { //escuchamos el evento de scroll 
             if (elementInView(tech, 100)){
                 //ejecutamos el condicional solo si el elemento se encuentra en la pantalla
                 gsap.to(tech,{
                     duration: .4,
                     y: 0,
                     opacity:1,
                     ease: 'linear',
                     delay: .2
                 })
 
             }
           });


        const carrusel = document.querySelector(".roulete");

        //tamaño de la barra de scroll
        const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
        let intervalo = null;
        let step = 1;

        //función start que crea un intervalo que se ejecuta cada 10ms y mueve 1 la barra de scroll
        const start = () => {
          intervalo = setInterval(function () {
            carrusel.scrollLeft = carrusel.scrollLeft + step;
            if (carrusel.scrollLeft === maxScrollLeft || carrusel.scrollLeft >= maxScrollLeft) {
              step = step * -1;
            } else if (carrusel.scrollLeft === 0) {
              step = step * -1;
            }
          }, 15);
        };
        
        //función para parar el intervalo
        const stop = () => {
          clearInterval(intervalo);
        };
        
        //controlador de evento que para el carrusel cuando el raton esta encima
        carrusel.addEventListener("mouseover", () => {
          stop();
        });
        
        //controlador de evento que activa
        carrusel.addEventListener("mouseout", () => {
          start();
        });
        
        start();

       
    }, [])

    


    return (
        <div id="tech" className="tech">
            <h2 className="title"><b className="green">02.</b>Tecnologías</h2>
            <div className="roulete">
                {arrayImg.map((img, i) => <img key={i} className="techImg" src={img} alt='TechImg'/>)}
                {arrayImg.map((img, i) => <img key={i} className="techImg" src={img} alt='TechImg'/>)}
            </div>
        </div>
    )
}

export default Tech