import React, { useState } from 'react'
import style from './StartLocationOpenDoor.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way';

const StartLocationOpenDoor = (props) => {
    return (
        <div className={style.startLocationOpenDoor}>
            <Way url={'/'} way={'вернуться'}/>
            <div className={style.passage}>
                <div className={style.linkButton}><button></button></div>
                <div className={style.menuPassage}>
                    <ul>
                        <li><NavLink to='/deadlock'>Пройти</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className={style.passage2}>
                <div className={style.linkButton}><button></button></div>
                <div className={style.menuPassage}>
                    <ul>
                        <li><NavLink to='/placeWithCrowbar'>Пройти</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StartLocationOpenDoor;


