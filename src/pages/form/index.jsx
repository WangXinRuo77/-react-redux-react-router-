import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: '文字提示',
            value: 'coconut',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            // value: e.target.value.toUpperCase(),
            value: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.state.value}
                </label>
                {/* <input type="text" value={this.state.value} onChange={this.handleChange}/> */}
                {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form;