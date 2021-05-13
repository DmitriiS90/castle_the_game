import React, { useState } from 'react'
import style from './Storage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way'
import { NavLink } from 'react-router-dom'

const Storage = (props) => {
    const [date, setDate] = useState({
        num: 0,
        code: '0'
    })
    const dispatch = useDispatch()
    const player = useSelector((state) => { return state.persons.player })
    //console.log(date)
    return (
        <div className={style.storage}>
            <Way url={'/kingsRoom'} way={'Вернуться'} />

            {!player.isOpenedLock &&
                <>{date.num != 8 &&
                    <div className={style.lock}>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '1' }) }}>1</button>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '2' }) }}>2</button>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '3' }) }}>3</button>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '4' }) }}>4</button>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '5' }) }}>5</button>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '6' }) }}>6</button>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '7' }) }}>7</button>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '8' }) }}>8</button>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '9' }) }}>9</button>
                        <button onClick={() => { setDate({ num: date.num + 1, code: date.code + '0' }) }}>0</button>
                    </div>}
                    {date.num === 8 && date.code != '023051255' && <NavLink to={'/kingsRoom'}><p>Пароль не подходит</p></NavLink>}
                    {date.num === 8 && date.code === '023051255' && <p onClick={() => { dispatch({ type: 'OPEN_LOCK' }) }}>Замок открыт. В сейфе вы находите письмо от своей сестры.</p>}
                </>
            }
            {player.isOpenedLock &&
                <>
                    <p>{player.letter}</p>
                    <NavLink to={'/epilogue'}><p className={style.continue}>Продолжить</p></NavLink>
                </>
            }
        </div>
    )
}

export default Storage;