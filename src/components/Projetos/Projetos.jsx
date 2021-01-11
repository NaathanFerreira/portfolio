import React, {useState} from 'react'
import Main from '../templates/Main'
import Accordion from 'react-bootstrap/Accordion'
import './Projeto.css'

export default props => {
    return (
        <Main>
            <h3>Meus Trabalhos</h3>

            <Accordion defaultActiveKey="-1" className="accordion">

                <div className="card mt-5">
                    <Accordion.Toggle as="none" eventKey="0">
                        <div className="card-header font-weight-light">
                            <h6>Interdisciplinar Fatec</h6>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <div className="card-body">
                            <p>Esse projeto <strong>.NET Web MVC</strong> foi realizado no 4º semestre da faculdade, para a matéria de Programação Orientada a Objetos.</p>
                            <p>O projeto foi feito para ajudar no gerenciamento de estoque, funcionários e clientes de um empresa.</p>
                            <p><a href="https://github.com/NathanF100/interFatec" target="_blank">Repositório no GitHub</a></p>
                        </div>
                    </Accordion.Collapse>
                </div>

                <div className="card">
                    <Accordion.Toggle as="none" eventKey="1">
                        <div className="card-header">
                            <h6>Aplicativo BuscaPet</h6>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <div className="card-body">
                            <p>Projeto também realizado na faculdade (5º semestre), desenvolvido com <strong>Flutter e Dart</strong>, para a matéria de Programação para Dispositivos Móveis.</p>
                            <p>
                                O projeto foi feito para instituições de adoção de animais. No qual desenvolvemos dois aplicativos, um para que os usuários possam ver os animais disponíveis para
                                adoção naquela instituição, e outro somente para uso da instituição, no qual ela pode ver todos usuários cadastrados, e consegue também adicionar , alterar ou remover 
                                os animais que aparecem no outro aplicativo.
                            </p>
                            <p><a href="https://github.com/NathanF100/appBuscaPet" target="_blank">Repositório no GitHub</a></p>
                        </div>
                    </Accordion.Collapse>
                </div>

                <div className="card">
                    <Accordion.Toggle as="none" eventKey="2">
                        <div className="card-header">
                            <h6>Git Proj</h6>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <div className="card-body">
                            <p>Esse é um projeto <strong>Web SPA</strong> utilizando a API do GitHub que fiz quando comecei a estudar Desenvolvimento Web.</p>
                            <p>
                                O objetivo é escrever o nome de algum repositório do GitHub e exibir em Cards as principais informações de cada repositório.
                            </p>
                            <p><a href="https://github.com/NathanF100/gitProj" target="_blank">Repositório no GitHub</a></p>
                        </div>
                    </Accordion.Collapse>
                </div>

                <div className="card">
                    <Accordion.Toggle as="none" eventKey="3">
                        <div className="card-header">
                            <h6>Lê Modas</h6>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <div className="card-body">
                            <p>Meu mais recente projeto WEB desenvolvido com <strong>React JS.</strong></p>
                            <p>
                                O intuito desse projeto foi testar meus conhecimentos e desenvolver uma aplicação que ajudasse no trabalho da minha mãe.
                                A aplicação permite que ela gerencie seus clientes e pagamentos dos clientes.
                                Atualmente não possui um Back-End funcional, mas futuramente irei implementar.
                            </p>
                            <p><a href="https://github.com/NathanF100/leModas" target="_blank">Repositório no GitHub</a></p>
                        </div>
                    </Accordion.Collapse>
                </div>

                

            </Accordion>
        </Main>
    )
}
    