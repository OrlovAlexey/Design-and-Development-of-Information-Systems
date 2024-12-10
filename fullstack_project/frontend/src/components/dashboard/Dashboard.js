import React, { Component } from 'react'
import DashboardItem from './DashboardItem'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getNotes } from '../../actions/projectActions'

class Dashboard extends Component {

    componentDidMount() {
        this.props.getNotes()
    }

    render() {
        const notes = this.props.notes
        const noteComponent = notes.map(note => (<DashboardItem key={note.id} note={note} />))

        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">My Notes</h1>
                            <br />
                            <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create new
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/createnote">Note</Link>
                                    <button disabled className="dropdown-item">Contact</button>
                                </div>
                            </div>
                            <hr />

                            {noteComponent}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    notes: state.note.notes
})
export default connect(mapStateToProps, { getNotes })(Dashboard)
