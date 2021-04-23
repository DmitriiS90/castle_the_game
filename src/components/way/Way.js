import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Way.module.css'

const Way = ({url, way}) => {
    return (
        <div className={style.way}>
            <NavLink to={url}><button>{way}</button></NavLink>
        </div>
    )
}

export default Way;
