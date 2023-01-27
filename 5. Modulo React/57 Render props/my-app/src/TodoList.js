import { Component } from "react";

export class TodoList extends Component {
  state = {
    items: ["Todo0", "Todo1", "Todo2"],
    newTodo: "",
    warning: null, // to not add empty todos
    error: null, // to not clear empty todos array
  };

  // to update state value of newTodo based on input
  setNewTodo = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  // to add new todo in todos array
  addTodo = () => {
    if (this.state.newTodo) {
      this.state.items.push(this.state.newTodo);
      this.setState({
        newTodo: "",
        warning: null,
      });
    } else {
      this.setState({
        warning: (
          <div>
            <strong>Write something before adding!</strong>
          </div>
        ),
      });
    }
  };

  // to clear list
  clearTodos = () => {
    if (this.state.items.length > 0) {
      this.setState({
        items: [],
        error: null,
      });
    } else {
      this.setState({
        error: (
          <div>
            <strong>List already empty!</strong>
          </div>
        ),
      });
    }
  };

  // to delete one items from list, using unique key given by index
  deleteItem = (key) => {
    let _items = [...this.state.items];
    _items = _items.filter((todo, i) => i !== key);
    this.setState({
      items: _items,
    });
  };

  render() {
    return (
      <>
        <div>
          <h4>List</h4>
          <ul>
            {/* children prop takes array to render and function to delete from array */}
            {this.props.children(this.state.items, this.deleteItem)}
          </ul>
        </div>
        <div>
          <h4>Add other todos</h4>
          <input
            onChange={this.setNewTodo}
            value={this.state.newTodo}
            placeholder="Write here a new todo"
            type="text"
          ></input>
          <button onClick={this.addTodo}>Click her to add new todo</button>
          {/* better warning, deleted from render if user starts to write something */}
          {this.state.newTodo.length === 0 && this.state.warning}
        </div>
        <div>
          <h4>Clear all list</h4>
          <button onClick={this.clearTodos}>Reset list items</button>
          {/* error is deleted from render if user adds new todo */}
          {this.state.items.length > 0 ? null : this.state.error}
          {/* error visibility conditions: "list is empty" and "user tries to clear empty list" */}
        </div>
      </>
    );
  }
}
