import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './family'
import Membro from './member'

ReactDOM.render(
    <Familia surname="Silva">
        <Membro name="João" />
        <Membro name="Jéssica" />
        <Membro name="Mariana" />
        <Membro name="Rubens" />
    </Familia>
,document.getElementById('app'))
