import React, { useState } from 'react'
import style from './Room.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way';
import { NavLink } from 'react-router-dom';

const Room = (props) => {
    const [text, setText] = useState(false)

    const dispatch = useDispatch()
    const player = useSelector((state) => { return state.persons.player })
    const chestKey = useSelector((state) => { return state.inventory.chestKey })
    const picture = useSelector((state) => { return state.inventory.picture })

    const openChest = () => {
        dispatch({ type: 'USE_CHEST_KEY' })
        dispatch({ type: 'GET_CLOCK_HANDS' })
        dispatch({ type: 'GET_PICTURE' })
        dispatch({ type: 'CHEST_IS_OPENED' })
        setText(true)
    }
    console.log(chestKey)

    return (
        <div className={style.room}>
            <Way url={'/roomWithGuards'} way={'Вернуться'} />
            {text && <p onClick={()=>{setText(false)}}>В сундуке вы нашли стрелки от часов и рисунок. На обратной стороне рисунка есть надпись: Моей любимой дочери, 23 января 1255 год.</p>}

            <div className={style.chest}>
                <div className={style.linkButton}></div>
                {!picture &&
                    <div className={style.menuChest}>
                        <ul>
                            {player.chest === 'locked' && <li onClick={() => { dispatch({ type: 'CLICK_CHEST' }) }}>Открыть</li>}
                            {player.chest === 'clicked' && !chestKey && <li>Нужен ключ</li>}
                            {chestKey && <li onClick={() => { openChest() }}>Использовать ключ</li>}
                        </ul>
                    </div>}
            </div>

            <div className={style.doorToNextRoom}>
                <div className={style.linkButton}></div>
                <div className={style.menu}>
                    <ul>
                        <li><NavLink to='/hall'>Пройти в главный зал</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Room;


