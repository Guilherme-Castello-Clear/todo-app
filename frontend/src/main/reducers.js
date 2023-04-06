import { combineReducers} from 'redux'

const rootReducer = combineReducers({

    todo: () => ({
        descriptions: 'Ler livro',
        list: [{
            _id: 1,
            descriptions: 'Pagar Fatura',
            done: true
        },
        {
            _id: 2,
            descriptions: 'Reunião',
            done: false 
        },
        {
            _id: 3,
            descriptions: 'Consulta',
            done: false 
        }]
    })
})

export default rootReducer