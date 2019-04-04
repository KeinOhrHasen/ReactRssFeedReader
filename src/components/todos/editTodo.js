import React, {Component} from "react"
import {Button, Table} from "semantic-ui-react"
import {Input} from "semantic-ui-react"

//Import moment library for React Datepicker

import "react-datepicker/dist/react-datepicker.css"

class EditTodo extends Component {
    constructor(props) {
        super(props);
        // If props.todo exists this component is used to  Edit a Todo, 
        // else this is a Create New Todo Component

        if (this.props.todo) {
            this.state = {
                ...this.props.todo
            }
        } else {
            this.state = {
                ...this.emptyTodo()
            }
        }
    }

    //Initializes a Empty Todo Object

    emptyTodo = () => {
        return {title: "", url: ""}
    }


    // Input change handling methods

    changeNewTitle = (event) => {
        this.setState({title: event.target.value})
    }

    changeNewUrl = (event) => {
        this.setState({url: event.target.value})
    }

    // Form submission methods

    createTodo = (event) => {
        if (this.state.title){
            this.resetTodo();
            this.props.createTodo(this.state)
        } else {alert("Enter title")}
    }



    // Modifying the inputs indirectly methods

    resetTodo = () => {
        this.setState({title: "", url:""})
    }


    render() {
        return (
            <Table.Row className="editTodo">

                <Table.Cell>
                    <Input                       
                        placeholder='Title'
                        value={this.state.title}
                        onChange={this.changeNewTitle}
                        required
                        />
                </Table.Cell>

                <Table.Cell>
                    <div className="field">
                        <div className="ui left icon input">
                            <Input
                                placeholder="url"
                                value={this.state.url}
                                onChange={this.changeNewUrl}
                                />
                        </div>
                    </div>  
                </Table.Cell>

                {/* The options component takes the inputs and decide if It's an option for  or Add New Feed */}

                <Options
                    todo={this.props.todo}    
                    createTodo={this.createTodo}
                    resetTodo={this.resetTodo}
                />

            </Table.Row>
        )
    }
}

export default EditTodo;


// The option component decides the component usage

const Options = (props) => {
    return AddOptions(props);
}


const AddOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.createTodo }>
                Create
            </Button>
            < Button color='blue' onClick={props.resetTodo}>
                Reset
            </Button>
        </Table.Cell>
    );
}
