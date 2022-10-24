import gsap from "gsap"
import { useEffect } from "react"

import Web from "./Web"
import elementInView from "../animations/elementInView"

import angularMongo from '../img/AngularMongo.png'
import angularDjango from '../img/angularDjango.png'
import tkinter from '../img/tkinter.png'


function Projects(){
    
    useEffect(() => {
        //guardamos el elemento en una variable para comprobar si esta en pantalla
        const title = document.getElementById('titleProjects')
        const project1 = document.getElementById('project1')
        const project2 = document.getElementById('project2')
        const project3 = document.getElementById('project3')

        //animamos el estado inicial
        gsap.from('#titleProjects', {
            y: 50,
            opacity: 0
        })

        gsap.from('#project1', {
            y: 100,
            opacity: 0
        })

        gsap.from('#project2', {
            y: 100,
            opacity: 0
        })

        gsap.from('#project3', {
            y: 100,
            opacity: 0
        })

        gsap.to('#titleProjects', {
            y: 50,
            opacity: 0
        })

        gsap.to('#project1', {
            y: 100,
            opacity: 0
        })

        gsap.to('#project2', {
            y: 100,
            opacity: 0
        })

        gsap.to('#project3', {
            y: 100,
            opacity: 0
        })


        window.addEventListener('scroll', function()  { //escuchamos el evento de scroll 
            if (elementInView(title, 100)){
                //ejecutamos el condicional solo si el elemento se encuentra en la pantalla
                gsap.to('#titleProjects',{
                    duration: .4,
                    y: 0,
                    opacity: 1,
                    ease: 'linear'
                })

            }
        })

        window.addEventListener('scroll', function()  { //escuchamos el evento de scroll 
            if (elementInView(project1, 100)){
                //ejecutamos el condicional solo si el elemento se encuentra en la pantalla
                gsap.to('#project1',{
                    duration: .4,
                    y: 0,
                    opacity: 1,
                    ease: 'linear',
                    delay: .2
                })

            }
        })

        window.addEventListener('scroll', function()  { //escuchamos el evento de scroll 
            if (elementInView(project2, 100)){
                //ejecutamos el condicional solo si el elemento se encuentra en la pantalla
                gsap.to('#project2',{
                    duration: .4,
                    y: 0,
                    opacity: 1,
                    ease: 'linear',
                    delay: .2
                })

            }
        })

        window.addEventListener('scroll', function()  { //escuchamos el evento de scroll 
            if (elementInView(project3, 100)){
                //ejecutamos el condicional solo si el elemento se encuentra en la pantalla
                gsap.to('#project3',{
                    duration: .4,
                    y: 0,
                    opacity: 1,
                    ease: 'linear',
                    delay: .2
                })

            }
        })
      
   }, [])

    return (
        <div id="projects" className="projects">
            <div id="titleProjects">
                <h2 className="title"><b className="green">03.</b>Proyectos</h2>
            </div>
            <div className="centerMobile">
            <div>
                <Web/>

                <div id="project1" className="right">
                    <div className="project">
                        <div className="flex">
                            <div className="projectGreen"><a href="https://github.com/GonzaloRando03/ProyectoAngularMongoDB">link</a></div>
                            <img src={angularMongo} alt='angularMongo' className="projectImg"/>
                            <h2 className="projectTitle">Aplicación Web con Angular, Node y MongoAtlas</h2>
                        </div>
                        <ul className="flex mo">
                            <li className="green"><span className="white">Angular</span></li>
                            <li className="green"><span className="white">Node JS</span></li>
                            <li className="green"><span className="white">Mongo Atlas</span></li>
                            <li className="green"><span className="white">TypeScript</span></li>
                        </ul>
                        <div className="projectContentRight">
                            Una aplicación Web donde puedes <span class="green">guardar</span> información y realizar <span class="green">consultas</span> en una base de datos MongoAtlas. Frontend desarrollado en <span class="green">Angular</span> y backend usando <span class="green">Node.js</span>.<br/> <br/> Aplicación enfocada a una <span class="green">tienda de ordenadores</span> que registra sus productos y ventas.
                        </div>
                    </div>
                </div>

                <div id="project2" className="left">
                    <div className="project">
                        <div className="flex">
                            <h2 className="projectTitle">Aplicación de escritorio Python concesionario</h2>
                            <img src={tkinter} alt='tkinter' className="projectImg"/>
                            <div className="projectGreen"><a href="https://github.com/GonzaloRando03/App_PythonSQL_Tkinter">link</a></div>
                        </div>
                        <ul className="flex">
                            <li className="green"><span className="white">Python</span></li>
                            <li className="green"><span className="white">Tkinter</span></li>
                            <li className="green"><span className="white">SQLite</span></li>
                        </ul>
                        <div className="projectContentLeft">
                            Una aplicación de escritorio donde puedes <span class="green">guardar, editar y eliminar </span> coches y clientes de una base de datos <span class="green">SQLite</span>. <br/><br/> Desarrollado con <span class="green">Tkinter</span>, una librería de Python que nos permite hacer <span class="green">aplicaciones de escritorio</span>.
                        </div>
                    </div>
                </div>

                <div id="project3" className="right">
                    <div className="project">
                        <div className="flex">
                            <div className="projectGreen"><a href="https://github.com/GonzaloRando03/Bus-AngularDjango">link</a></div>
                            <img src={angularDjango} alt='angularDjango' className="projectImg"/>
                            <h2 className="projectTitle">Aplicación Web reserva de billetes de autobús.</h2>
                        </div>
                        <ul className="flex">
                            <li className="green"><span className="white">Angular</span></li>
                            <li className="green"><span className="white">Django</span></li>
                            <li className="green"><span className="white">My SQL</span></li>
                            <li className="green"><span className="white">TypeScript</span></li>
                            <li className="green"><span className="white">Python</span></li>
                        </ul>
                        <div className="projectContentRight">
                            Una aplicación Web donde puedes <span class="green">reservar y cancelar</span> viajes de autobuses, <span class="green">consultar</span> las distintas líneas, paradas y horarios. <br/><br/> Frontend desarrollado en <span class="green">Angular</span> y backend desarrollado en <span class="green">Django</span> usando TypeScript y Python respectivamente y una base de datos <span class="green">MySQL</span>.
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects