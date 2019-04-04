import React, {Component} from "react"
import {Button, Table} from "semantic-ui-react"

// The Todo Row component is a simple stateless component, It simply takes the props 
// and maps the specific events to the methods of parent component 


class TodoRow extends Component {

    render(){
        console.log(this.props.todo)
        return (
            
            // getClassName assigns the class names of this element 

            <Table.Row className={getClassName(this.props)} onClick={this.clickHandler} cursor="pointer">
                <Table.Cell>{this.props.todo.title}</Table.Cell>
                
                <Table.Cell>{(this.props.todo.url)}</Table.Cell>

                <Table.Cell className="options">
                    <Button className="option-buttons delete-todo" color='red' onClick={this.props.deleteTodo}>
                        <i className="fa fa-trash"></i>
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    } 
}

// Right now Updating, done and deleting these three states are represented with different Class Name

const getClassName = (props) => {
    return `
    
    ${props.todo.updating
        ? "updating"
        : ""}
    ${props.todo.completed
        ? "done"
        : ""}
    ${props.todo.deleting
        ? "deleting"
        : ""}
    `
}

export default TodoRow;

