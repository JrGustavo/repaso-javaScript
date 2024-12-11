import {Todo} from "../todos/models/todo.model";


const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo')
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log('initStore 🥑');
    console.log(state)
}
const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch ( filter){
        case Filters.All:
            return [...state.todos]


        case Filters.Completed:
            return state.todos.filter(todo => todo.done )

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)

        default:
            throw new Error(`Option ${filter} is not valid.`)
    }
}

/**
 *
 *
 * @param {String} description
 */

const addTodo = (description) => {
    if (!description) throw new Error('Description is required');

    state.todos.push(new Todo(description));
}

/**
 *
 * @param todoId
 */

const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
}

/*+
*
* @param {String} newFilter
 */


const setFilter =( newFilter = Filters.All) => {
    Object.keys(Filters)
    state.filter = newFilter;
}


const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
    getTodos,

}


