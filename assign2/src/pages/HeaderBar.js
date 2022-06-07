import React, { useContext } from 'react'
import Header from '../Header'
import UserBar from '../UserBar'
import CreateToDo from '../CreateToDo'

import { ThemeContext } from '../App'
import StateContext from '../Context'

import {Link} from 'react-navi'

export default function HeaderBar () {

    const {state, dispatch} = useContext(StateContext)
    
return (
<>
    <ThemeContext.Provider value={{primary:'red'}}> 
        <Header text="My ToDo" />
    </ThemeContext.Provider>
    <UserBar user={state.user} dispatch={dispatch} />
    {state.user && <Link href="/todo/create">Create New ToDo</Link> }
    
</>
)
}