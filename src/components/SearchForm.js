import React from 'react';

class SearchFrom extends React.Component{
    constructor(){
        super();
        this.state ={
            userName: ""
        };
    }
    handleChanges = e => {
        this.setState({
            userName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.userName !== '') {
            this.props.searchUser(this.state.userName);
            this.setState({
                userName:''
            });
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChanges}
                    type='text'
                    name='User'
                    placeholder='Search for a GitHub User...'
                    value={this.state.userName}
                />
                <button>Git!</button>
            </form>
        )
    }
}

export default SearchFrom