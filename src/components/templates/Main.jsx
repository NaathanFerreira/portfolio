import React from 'react'
import './Main.css'

export default props =>
    <main className="content">
        <div className="p-3 m-3">
            {props.children}
        </div>
    </main>