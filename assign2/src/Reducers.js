function userReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
        case "REGISTER":
            return action.username;
        case "LOGOUT":
            return "";
        default:
            return state;
    }
}


function todoReducer(state, action) {
    switch(action.type){
        case 'CREATE_TODO':
        const newTodo = {
            title: action.title,
            description: action.description,
            dateCreated: action.dateCreated,
            dateCompleted: action.dateCompleted,
            completed: action.completed,
            id: action.id
        };
        return [newTodo, ...state];
        case 'DELETE_TODO':
            return action.updatedTodo
            //return state.filter(todo => todo.id != action.id)
        //case 'FETCH_TODOS':
          //  return action.todos;
        case 'TOGGLE_TODO':
            return action.updatedTodo
        default:
        return state;
}
}

export default function appReducer(state, action){
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.posts, action)
    }
}