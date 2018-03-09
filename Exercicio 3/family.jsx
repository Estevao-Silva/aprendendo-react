import React from 'react'
import { propagateProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Família</h1>
        { propagateProps(props) }
    </div>
)