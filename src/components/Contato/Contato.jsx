import React from 'react'
import Main from '../templates/Main'
import {FaPhone} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

export default props =>
    <Main>
        <h3>Contatos</h3>
        <div className="mt-5">
            <FaPhone/> (17) 99140-7968
        </div>
        <p>
            <MdEmail/> nathanferreira00@hotmail.com
        </p>
    </Main>