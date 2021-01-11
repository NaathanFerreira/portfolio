import React from 'react'
import Main from '../templates/Main'
import './Conhecimentos.css'
import { DiJqueryLogo, DiBootstrap, DiReact, DiHtml5, DiCss3, DiJavascript1, DiJava, DiFsharp } from "react-icons/di";
import {SiDotNet} from 'react-icons/si'

export default props =>
    <Main>
        <h3>Habilidades</h3>

        <h5 className="mt-5">LINGUAGENS E FERRAMENTAS DE PROGRAMAÇÃO</h5>
        <div className="habilidades mt-3">
            <SiDotNet data-toggle="tooltip" data-placement="top" title=".NET Framework"/>
            <DiHtml5 data-toggle="tooltip" data-placement="top" title="HTML5"/>
            <DiCss3 data-toggle="tooltip" data-placement="top" title="CSS3"/>
            <DiJavascript1 data-toggle="tooltip" data-placement="top" title="JAVASCRIPT"/>
            <DiJqueryLogo data-toggle="tooltip" data-placement="top" title="JQUERY"/>
            <DiBootstrap data-toggle="tooltip" data-placement="top" title="BOOTSTRAP"/>
            <DiReact data-toggle="tooltip" data-placement="top" title="REACT JS"/>
        </div>
    </Main>