// Import the TodoAction Creators and TodoActionTypes

import * as TodoActions from "../constants/types"



// We are dividing the reducers using a technique called Reducer composition.
// By doing this we are seperating the reducer for the Collection and the Individual Item


export function TodoListReducer(state = [], action) {
    switch (action.type) {
        // The cases ordered in CRUD order.

        // Create
        case TodoActions.CREATE_TODO_SUCCESS: {
                return [
                    ...state,
                    action.todo
                ];
        }
        //Read    
        case TodoActions.GET_TODOS_SUCCESS: {
            return [
                ...state, 
                // ...action.todos.data.data, //origin
                ...action.todos
            ]

        }
        
        // The following Cases handle the data by mapping it. Mostly because they are related with the modification of a single Data

        
        //Delete    
        case TodoActions.DELETE_TODO: {

            return state.map(s => todo(s, action))

        }
        case TodoActions.DELETE_TODO_SUCCESS: {

            return state.filter(s => todo(s, action))

        }
            
        default:
            return state
    }
}


//The individual Reducer. It handles only one Todo Object.
const todo = (state, action) => {

    // If the mapped todo of the previous state matches with the new ID of the action, 
    // Only then proceed to the Reducer Switch case

    if (state.id !== (action.id || action.todo.id)) {
        return state;
    }

    switch (action.type) {

        // Edit/modifies the individual Todos using ES6 spread operator. The cases are self explanatory.

        case TodoActions.DELETE_TODO:
            {
                return {
                    ...state,
                    deleting: true,
                }
            }

        case TodoActions.DELETE_TODO_SUCCESS:
            {
                return false
            }

        default:
            {
                return state;
            }
    }
}