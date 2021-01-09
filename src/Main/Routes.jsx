import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Conhecimentos from '../components/Conhecimentos/Conhecimentos'
import Projetos from '../components/Projetos/Projetos'
import Formacao from '../components/Formacao/Formacao'
import Contato from '../components/Contato/Contato'

export default props =>
    <Switch>
        <Route path="/conhecimentos" component={Conhecimentos}/>
        <Route path="/projetos" component={Projetos}/>
        <Route path="/formacao" component={Formacao}/>
        <Route path="/contato" component={Contato}/>
        <Redirect from='*' to='/contato'/>
    </Switch>