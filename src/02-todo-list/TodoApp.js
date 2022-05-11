import React from 'react';

import TodoList from './TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <div>
        <h3>À faire</h3>
        <TodoList items={this.state.items} onDelete={this.handleDelete} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">C&apos;est quoi la suite ?</label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text} />
          <button>Ajouter #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }

  handleDelete(e, item) {
    console.log(item);
    this.setState({
      items: this.state.items.filter(({ id }) => id !== item.id),
    });
  }
}

export default TodoApp;
