import React from 'react'
import Title from './Title'
import Todos from './Todos'

export default function TodoList() {
    return (
        <div className="TodoList">
            <Title />
            <Todos />
        </div>
    )
}