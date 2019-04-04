import {HttpClient} from "./httpClient"
import {API_BASE} from "../constants/API"

let userToken = localStorage.getItem("token");

//Setting the todos URI

const TODO_API = `${API_BASE}/posts`


//Create
const createTodo = todo => {
    console.log(todo)
    return HttpClient.post(TODO_API, userToken, todo)
}

//Read
const getTodo = () => {
    return HttpClient.get(TODO_API, userToken );
}


//Delete
const removeTodo = todo => {
    let todosId = todo.id
    return HttpClient.delete(`${TODO_API}/${todosId}`, userToken)
}


//Encapsulating in a JSON object

const TodoApi = {createTodo, getTodo, removeTodo}

export {TodoApi}