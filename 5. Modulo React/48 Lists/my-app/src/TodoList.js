import { Component } from "react";

export class TodoList extends Component {
    state = {
        // items as state variable and as array of strings
        items: ["Todo0", "Todo1", "Todo2"],
        // newTodo taken from input and added to list
        newTodo: "",
        // extra check for adding not empty todos
        warning: null,
        // extra to block user from clearing an empty items array
        error: null,
    }

    // to update state value of newTodo based on input
    setNewTodo = (event) => {
        this.setState({
            newTodo: event.target.value,
        })
    }

    // to add new todo in todos array (changes in array will trigger automatic re-render)
    addTodo = () => {
        if (this.state.newTodo) {
            this.state.items.push(this.state.newTodo);

            this.setState({
                newTodo: "", // <- to clear input after adding (+ value={this.state.newTodo} added in <input>)
                warning: null, // extra to delete warning from render
            })
        } else {
            // warning is rendered if user tries to add empty todo
            this.setState({
                warning: <div><strong>Write something before adding!</strong></div>,
            })
        }
    }

    // to clear list
    clearTodos = () => {
        if (this.state.items.length > 0) {
            this.setState({
                items: [],

                error: null, // extra to delete error from render
            })
        } else {
            // error is rendered if user tries to clear empty list
            this.setState({
                error: <div><strong>List already empty!</strong></div>,
            })
        }
    }
    // extra: error visibility conditions: "list is empty" and "user tries to clear empty list".

    // to delete one items from list, using unique key given by index 
    deleteItem = (key) => {
        let _items = [...this.state.items];
        _items = _items.filter((todo, i) => i !== key);
        this.setState({
            items: _items,
        })
    }

    render() {
        return (
            <>
                <div>
                    <h4>List</h4>
                    <ul>
                        {this.state.items.map((todo,i) => {
                            return (
                                <>
                                    <li key={i}>{todo}</li>
                                    <button onClick={() => {this.deleteItem(i)}}>Remove item</button>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h4>Add other todos</h4>
                    <input onChange={this.setNewTodo} value={this.state.newTodo} placeholder="Write here a new todo" type="text"></input>
                    <button onClick={this.addTodo}>Click her to add new todo</button>
                    {/* better warning, deleted from render if user starts to write something */}
                    {this.state.newTodo.length === 0 && this.state.warning}
                </div>
                <div>
                    <h4>Clear all list</h4>
                    <button onClick={this.clearTodos}>Reset list items</button>
                    {/* error is deleted from render if user adds new todo */}
                    {this.state.items.length > 0 ? null : this.state.error}
                </div>
            </>
        )
    }
}