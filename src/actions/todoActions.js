//Import the Todo API 
import { TodoApi } from "../api/todoApi"
import *as TodoActions from "../constants/types"


//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateTodo(todo){
    return (dispatch) => {
        // make fake request to "https://jsonplaceholder.typicode.com"
        // unless getting list of feeds from server we get them from LS

        return TodoApi.createTodo(todo).then(res => {
            dispatch(CreateTodoSuccess({title:todo.title, url: todo.url, id:parseInt(Math.random()*10**20)}))
        })
    }
}

export function CreateTodoSuccess(todo){
    
    // move backend to Local Storage
    let oldFeeds = JSON.parse(localStorage.getItem('feeds'));
    oldFeeds.push(todo);
    localStorage.setItem('feeds', JSON.stringify(oldFeeds))

    return {
        type:TodoActions.CREATE_TODO_SUCCESS,
        todo
    }
}


//Read
export function GetTodos(){
    return (dispactch) => {

        return TodoApi.getTodo().then(res => {
            dispactch(GetTodoSuccess(res))
        })
    }
}

export function GetTodoSuccess(todo){
    let todos = JSON.parse(localStorage.getItem("feeds"))

    return {
        type:TodoActions.GET_TODOS_SUCCESS,
        todos
    }
}



//Delete
export function DeleteTodo(todo) {

    return (dispatch) => {
        dispatch({
            type: TodoActions.DELETE_TODO,
            todo
        })
        TodoApi.removeTodo(todo).then(res => {
            if (res.status === 204 ||  res.status === 200) {
                dispatch(DeleteTodoSuccess(todo))
            }
        })
    }
}

export function DeleteTodoSuccess(todo) {

    // move backend to Local Storage
    let feeds = JSON.parse(localStorage.getItem('feeds'));
    let newFeeds = feeds.filter((item) => {return  item.id !== todo.id});
    localStorage.setItem('feeds', JSON.stringify(newFeeds));

    return {
        type: TodoActions.DELETE_TODO_SUCCESS,
        todo,
        id: todo.id
    }
}