import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <div key={item.id} style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="checkbox"/>
            <li>{item.text}</li>
            <button onClick={(e) => this.props.onDelete(e, item)}>Delete</button>
          </div>
        ))}
      </ul>
    );
  }
}

export default TodoList;
