import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'


class TodoForm extends Component {
    constructor(props){
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e){
        if(e.key === 'Enter'){
            e.shiftKey ? this.this.props.handleSearch() : this.this.props.handleAdd()
        }
        else if(e.key === 'Escape'){
            this.props.handleClear()
        }
    }

    componentWillMount(){
        this.props.search()
    }

    render(){
        return(
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input value={this.props.description} onChange={this.props.changeDescription} id='description' className='form-control' placeholder='Adicione uma tarefa' onKeyUp={this.keyHandler}/>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search' onClick={this.props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close' onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToprops = state => ({description: state.todo.description})

const mapDispatchToprops = dispatch => bindActionCreators({changeDescription, search}, dispatch)

export default connect(mapStateToprops, mapDispatchToprops)(TodoForm)