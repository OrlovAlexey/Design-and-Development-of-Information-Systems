import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {deleteNote} from '../../actions/projectActions'
import {connect} from 'react-redux'

class DashboardItem extends Component {
    deleteBtnClick = () =>{
        if(window.confirm("Are you use, you wan to delete this note")){
            this.props.deleteNote(this.props.note.id)
        }
    }
    render() {
        const note = this.props.note
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-md-10">
                            <h3>{note.name}</h3>
                            <p>{note.description}</p>
                        </div>
                        <div className="col-md-2 d-lg-block">
                            <ul className="list-group">
                                <Link to={'/dashboard'}>
                                    <li className="list-group-item board text-success">
                                        <i className="fa pr-1"> Copy </i>
                                    </li>
                                </Link>
                                <Link to={`/updatenote/${note.id}`}>
                                    <li className="list-group-item update text-info">
                                        <i className="fa pr-1"> Edit </i>
                                    </li>
                                </Link>
                                <Link to="/dashboard" onClick={()=>this.deleteBtnClick()}>
                                    <li className="list-group-item delete text-danger">
                                        <i className="fa pr-1"> Delete </i>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{deleteNote})(DashboardItem)
