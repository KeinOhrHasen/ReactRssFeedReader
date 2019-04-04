import React from "react"
import { Table} from "semantic-ui-react"
import TodoRow from "./todoRow"
import EditTodo from "./editTodo"


// TodoTable is a Stateless component

const TodoTable = (props) => {
    return (

        <Table celled className="listTable">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>URL</Table.HeaderCell>
                    <Table.HeaderCell>Options</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>

                {/* This maps the Feeds recieved as a prop */}

                {props
                    .todos
                    .map((t, index) => {

                        // If the todo is being edited, EditTodo Component is rendered here
                        
                        if (t.editing) {
                            return <EditTodo
                                key={t.id}
                                todo={t}/>
                        } else {

                            // Is the todo is not being edited the TodoRow stateless component is returned

                            return <TodoRow
                                todo={t}
                                key={t.id}
                                deleteTodo={e=> props.deleteTodo(t)}
                                className="todoRow"                                
                            />
                        }
                    })}
                                
                <EditTodo createTodo={props.createTodo} /> 
            </Table.Body>

        </Table>
    )
}

export default TodoTable;