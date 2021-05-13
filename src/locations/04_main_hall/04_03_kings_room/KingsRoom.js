import React, { useState } from 'react'
import style from './KingsRoom.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way'
import { NavLink } from 'react-router-dom'

const KingsRoom = (props) => {
    const dispatch = useDispatch()
    const player = useSelector((state) => { return state.persons.player })
    const clockHands = useSelector((state) => { return state.inventory.clockHands })
    const [text, setText] = useState(0)
    const setClockHands = () => {
        dispatch({ type: 'SET_CLOCK_HANDS' })
        dispatch({ type: 'USE_CLOCK_HANDS' })
    }
    return (
        <div className={style.kingsRoom}>
            <Way url={'/hallway'} way={'Вернуться'} />
            {!player.kingsRoom && <p onClick={() => { dispatch({ type: 'CHECKED_KINGSROOM' }) }}>Вы вошли в свою комноту</p>}
            {text===1 && <p onClick={() => { setText(0) }}>Странно, на часах нет стрелок</p>}
            {text===2 && <p onClick={() => { setText(0) }}>Шкаф закрыт</p>}

            <div className={style.watch}>
                <div className={style.linkButton}></div>
                <div className={style.menu}>
                    <ul>
                        <li onClick={() => { setText(1) }}>Осмотреть часы</li>
                        {clockHands && <li onClick={() => { setClockHands() }}>Вставить стрелки в часы</li>}
                    </ul>
                </div>
            </div>

            <div className={style.wardrobe}>
            <div className={style.linkButton}></div>
                <div className={style.menu}>
                    <ul>
                        {!player.setClockHands && <li onClick={() => { setText(2) }}>Осмотреть шкаф</li>}
                        {player.setClockHands && <li><NavLink to='/storage'>Открыть</NavLink></li>}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default KingsRoom;