import React from 'react'

const propagateProps = props => (
    React.Children.map(props.children,
        child => React.cloneElement(child, { ...props })
    )
)

export { propagateProps }