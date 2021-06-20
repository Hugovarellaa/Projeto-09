import React, { Component } from 'react';

export default class AddTask extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  handleInput(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <input type="text" value={title} onChange={this.handelInput} />
        <button type="button"> Adicionar Tarefa </button>
      </form>
    );
  }
}
