import React from 'react'
import style from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    const dispatch = useDispatch()
    
    return (
        <div className={style.menu}>
            <h1>БЕТА-ТЕСТ:'castle_the_game'</h1>
            <NavLink to={'/startLocation'}><p onClick={() => { dispatch({ type: 'START_GAME' }) }}>Играть</p></NavLink>
        </div>
    )
}

export default Menu;