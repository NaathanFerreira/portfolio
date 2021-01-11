import React from 'react'
import Main from '../templates/Main'

export default props =>
    <Main>
        <h3>Educação</h3>

        <div className="mt-5">
            <h6>Ensino Médio</h6>
            <p className="ml-3">- Colégio Ateneu | Conclusão: 12/2017</p>
        </div>

        <div className="mt-5">
            <h6>Ensino Superior</h6>
            <div className="ml-3">
                <p>- Universidade Fatec Rio Preto</p>
                <p>- Graduação em Análise e Desenvolvimento de Sistemas</p>
                <p>- 6º Semestre (cursando)</p>
            </div>
        </div>

        <div className="mt-5">
            <h6>Cursos Complementares</h6>
            <div className="ml-3">
                <p>- Programação Orientada a Objetos C# – <strong>UDEMY</strong></p>
                <p>- Desenvolvimento Mobile (Flutter e Dart) - <strong>UDEMY</strong> </p>
                <p>- Web Moderno Completo com JavaScript - <strong>UDEMY</strong></p>
            </div>
        </div>

    </Main>