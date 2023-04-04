import React from 'react';

export default props => {
    return(
        <header className="page-header">
            <h1>{props.name} <small>{props.small}</small></h1>
        </header>
    )
}