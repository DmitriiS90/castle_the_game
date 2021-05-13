import React, { useState } from 'react'
import style from './Epilogue.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Epilogue = (props) => {
    const endText = useSelector((state) => { return state.persons.endText })
    return (
        <div className={style.epilogue}>
            <p>{endText[0]}</p>
            <NavLink to={'/'}><p className={style.end}>Конец</p></NavLink>
        </div>
    )
}

export default Epilogue;