import React from 'react'
import './Nav.css'
import Foto from '../../assets/imgs/foto.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faFraduationCap, faGraduationCap, faAddressBook } from "@fortawesome/free-solid-svg-icons"

export default props =>
    <aside className="menu-area">
        <nav className="perfil">
            <a href="">
                <img src={Foto} alt="foto" className="mt-3"/>
            </a>
            <p className="nome">NATHAN DE ARAUJO FERREIRA</p>
            <p>DESENVOLVEDOR FRONT END</p>          
        </nav>
        <hr/>
        <nav className="menu">
            <a href="">
                <FontAwesomeIcon icon={faBook}/> Conhecimentos
            </a>
            <a href="">
                <FontAwesomeIcon icon={faCode}/> Projetos
            </a>
            <a href="">
                <FontAwesomeIcon icon={faGraduationCap}/> Formação
            </a>
            <a href="">
                <FontAwesomeIcon icon={faAddressBook}/> Contato
            </a>
        </nav>
    </aside>