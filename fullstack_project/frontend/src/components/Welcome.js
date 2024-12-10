import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Personal Expense Manager</h1>
                                <p className="lead">
                                Create your account to manage your notes easily!
                                </p>

                                <Link to="/dashboard" className="btn btn-lg btn btn-outline-primary">
                                    Start creating notes!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
