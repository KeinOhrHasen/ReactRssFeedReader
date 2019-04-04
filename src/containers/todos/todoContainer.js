import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import * as TodoActions from "../../actions/todoActions"
import TodoTable from "../../components/todos/todoTable"
import Logout from "../authorization/logout"
import FeedBox from "../../components/feedslist/feedsBox";


export class TodoContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            artickleList:[]
        }

    }

    addArtickleListToState = (al) => {
        let prevAls = this.state.artickleList;
        let notExist = prevAls.every((elem) => {return al.url !== elem.url})
        if (notExist){
            prevAls.push(al)
            this.setState({
                artickleList: prevAls
            })
        }
    }


    deleteArtickleList = (feed) => {
        let prevAls = this.state.artickleList;
        let exist = prevAls.some((elem) => {return feed.url === elem.url});
        let nextAls;
        if (exist){
            nextAls = prevAls.filter((el) => {
                return  el.url !== feed.url
            })

            this.setState({
                artickleList: nextAls,
            })  
        }
    }

    // Todo Container methods dispatch the actions to the reducer functions. Ordered by CRUD Order

    //Create
    createTodo = (todo) => {
        this.props.actions.CreateTodo(todo) 
    }

    
    //Delete
    deleteTodo = (todo) => {
        this.props.actions.DeleteTodo(todo);
        this.deleteArtickleList(todo);
    }

    render() {
        return (
            <div className="todo-container">
                <Logout></Logout>
                <TodoTable
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    deleteTodo = {this.deleteTodo}
                />

                <FeedBox
                    feeds={this.props.todos}
                    addArtickleList={this.addArtickleListToState}
                    artickleList={this.state.artickleList}
                />
            </div>
        );
    }

}

// Define the property types of this Container Component

TodoContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired
}

// This maps the state to the property of the component

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos,
    }

}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

// The connect function connects the Redux Dispatch and state to the Todo Container Component.
// Without this the Component wont be functional.

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);



