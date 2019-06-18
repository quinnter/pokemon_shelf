import React, { Component } from 'react'

class SearchForm extends Component {

    state = {
        userInput: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.userInput} onChange={this.storeUserInput} type="text" />
                    <button>Search...</button>
                </form>
            </div>
        )
    }

    storeUserInput = event => {
        this.setState({ userInput: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.setSearchTerm(this.state.userInput)
    }

}

export default SearchForm
