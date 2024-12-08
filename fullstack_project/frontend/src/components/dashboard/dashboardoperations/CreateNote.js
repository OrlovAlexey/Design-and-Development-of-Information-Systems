import React, { Component } from 'react'
import {createNote} from '../../../actions/projectActions'
import {connect} from 'react-redux'
import classnames from 'classnames'

class CreateNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            priority: '',
            errors:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const newNote = {
            name: this.state.name,
            description: this.state.description,
            priority: this.state.priority
        }
        this.props.createNote(newNote, this.props.history)
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Note</h5>
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group mt-5">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Note Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>
                                <div className="form-group mt-2">
                                    <textarea onChange={(event) => this.changeHandler(event, "description")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.description})} placeholder="Note Body"></textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                </div>
                                <div className="form-group mt-2">
                                    <select className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "priority")} defaultValue={0}>
                                        <option value={0} disabled>Choose Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    errors:state.errors
})

export default connect(mapStateToProps, {createNote})(CreateNote)
