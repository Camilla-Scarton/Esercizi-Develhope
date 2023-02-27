import { Component } from "react";

export class TodoList extends Component {
    state = {
        // items as state variable and as array of strings
        items: ["Todo0", "Todo1", "Todo2"],
        // newTodo taken from input and added to list
        newTodo: "",
        // extra check for adding not empty todos
        warning: null,
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
            this.setState(state => {
                state.items.push(this.state.newTodo);
                state.warning = null; // extra to delete warning from render
                return state;
            })
        } else {
            // warning is rendered if user tries to add empty todo
            this.setState({
                warning: <div><strong>Write something before adding!</strong></div>,
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    <h4>List</h4>
                    <ul>
                        {this.state.items.map((todo,i) => <li key={i}>{todo}</li>)}
                    </ul>
                </div>
                <div>
                    <h4>Add other todos</h4>
                    <input onChange={this.setNewTodo} placeholder="Write here a new todo" type="text"></input>
                    <button onClick={this.addTodo}>Click her to add new todo</button>
                    {this.state.warning}
                </div>
            </>
        )
    }
}