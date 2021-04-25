import React, { useState } from 'react'
import style from './RoomWithGuards.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way';

const RoomWithGuards = (props) => {
    const [text, setText] = useState(true)
    let [answer, setAnswer] = useState(0)

    const dispatch = useDispatch()
    const guards = useSelector((state) => { return state.persons.guards })
    const player = useSelector((state) => { return state.persons.player })

    const setDialog = () => {
        setText(false)
        dispatch({ type: 'GUARDS' })
        //dispatch({ type: 'GET_INFORMATION_ABOUT_MYSELF' })
    }

    return (
        <div className={style.roomWithGuards}>
            {answer === 2 && <Way url={'/room'} way={'пройти'} />}
            {text && <p onClick={() => { setDialog() }}>{guards.speech[0]}</p>}

            {guards.isClick &&
                <div>
                    {answer === 0 ? <div><p>-Стража: {guards.speech[0]}</p></div>
                        : answer === 1 ? <div><p>-Стража: {guards.speech[1]}</p></div>
                            : answer === 2 && <div><p>-Стража: {guards.speech[2]}</p></div>}
                    <ol>
                        {answer === 0 && <li onClick={() => { setAnswer(answer + 1) }}>{player.speechWithGuards[0]}</li>}
                        {answer === 0 && <li onClick={() => { setAnswer(answer + 1) }}>{player.speechWithGuards[1]}</li>}
                        {answer === 1 && <li onClick={() => { setAnswer(answer + 1) }}>{player.speechWithGuards[2]}</li>}
                    </ol>
                </div>}
        </div>
    )
}

export default RoomWithGuards;


