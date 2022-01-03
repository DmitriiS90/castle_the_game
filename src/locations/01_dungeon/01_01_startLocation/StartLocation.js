import React, { useState } from 'react'
import style from './StartLocation.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

const StartLocation = () => {
    const dispatch = useDispatch()

    const text = useSelector((state) => { return state.persons.startText })
    const crowbar = useSelector((state) => { return state.inventory.crowbar })

    const [exit, setExit] = useState(false)
    const toUseCrowbar = () => {
        setExit(true)
        dispatch({ type: 'USE_CROWBAR' })
    }
    return (
        <div className={style.startLocation}>
            {text.isClick && <p onClick={()=>{dispatch({ type: 'SET_START_TEXT' })}}>{text.speech}</p>}

            {!text.isClick &&
                <div className={style.door}>
                    <div className={style.linkButton}></div>
                    <div className={style.menuDoor}>
                        <ul>
                            <li>Закрыто</li>
                            {crowbar && !exit && <li onClick={()=>{toUseCrowbar()}}>использовать лом</li>}
                            {exit && <li><NavLink to='/prison'>Пройти</NavLink></li>}
                        </ul>
                    </div>
                </div>
            }
            {!text.isClick &&
                <div className={style.passage}>
                    <div className={style.linkButton}></div>
                    <div className={style.menuPassage}>
                        <ul>
                            <li><NavLink to='/startLocationOpenDoor'>Пройти</NavLink></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default StartLocation;


