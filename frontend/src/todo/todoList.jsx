import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const lista = props.list || []
        return(
            lista.map(list => {
                return(
                    <tr key={list._id}>
                        <td>{list.description}</td>
                        <td><IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(list)}></IconButton></td>
                    </tr>
                 )
            })
        )
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}