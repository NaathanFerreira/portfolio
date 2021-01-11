import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import Foto from '../../assets/imgs/foto.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faFraduationCap, faGraduationCap, faAddressBook } from "@fortawesome/free-solid-svg-icons"

export default props =>
    <aside className="menu-area">
        <nav className="perfil">
            <div className="foto mt-3">
                <img src={Foto} alt="foto"/>
            </div>
            <p className="nome">NATHAN DE ARAUJO FERREIRA</p>
            <p>DESENVOLVEDOR FRONT-END</p>          
        </nav>
        <hr/>
        <nav className="menu">
            <Link to="/conhecimentos">
                <FontAwesomeIcon icon={faBook}/> Conhecimentos
            </Link>
            <Link to="/projetos">
                <FontAwesomeIcon icon={faCode}/> Projetos
            </Link>
            <Link to="formacao">
                <FontAwesomeIcon icon={faGraduationCap}/> Formação
            </Link>
            <Link to="/contato">
                <FontAwesomeIcon icon={faAddressBook}/> Contato
            </Link>
        </nav>
    </aside>