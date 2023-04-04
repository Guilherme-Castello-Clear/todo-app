import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const lista = props.list || []
        return(
            lista.map(list => {
                return(

                    <tr key={list._id}>

                        <td className={list.done ? 'markedAsDone' : ''}>{list.description}</td>
                        <td>
                            <IconButton style='success' icon='check' hide={list.done} onClick={() => props.handleMarkAsDone(list)}></IconButton>
                            <IconButton style='warning' icon='undo' hide={!list.done} onClick={() => props.handleMarkAsPending(list)}></IconButton>
                            <IconButton style='danger' icon='trash-o' hide={!list.done} onClick={() => props.handleRemove(list)}></IconButton>
                        </td>
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