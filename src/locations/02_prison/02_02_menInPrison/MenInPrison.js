import React, { useState } from 'react'
import style from './MenInPrison.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way';

const MenInPrison = (props) => {
    const [text, setText] = useState(true)
    let [answer, setAnswer] = useState(0)

    const dispatch = useDispatch()
    const menInPrison = useSelector((state) => { return state.persons.menInPrison })
    const player = useSelector((state) => { return state.persons.player })

    const setDialog = () => {
        setText(false)
        dispatch({ type: 'MEN_IN_PRISON' })
        dispatch({ type: 'GET_INFORMATION_ABOUT_MYSELF' })
    }
    console.log(player)

    return (
        <div className={style.men}>
            {!text && <Way url={'/prison'} way={'вернуться'} />}
            {text && <p onClick={() => { setDialog() }}>Вы видете человека</p>}

            {menInPrison.isClick &&
                <div>
                    {answer === 0 ? <div><p>-Неизвестный: {menInPrison.speech[0]}</p></div>
                        : answer === 1 ? <div><p>-Неизвестный: {menInPrison.speech[1]}</p></div>
                            : answer === 2 && <div><p>-Неизвестный: {menInPrison.speech[2]}</p></div>}
                    <ol>
                        {answer === 0 && <li onClick={() => { setAnswer(1) }}>{player.speechInPrison[0]}</li>}
                        {answer === 0 && <li onClick={() => { setAnswer(2) }}>{player.speechInPrison[1]}</li>}
                        {answer === 1 && <li onClick={() => { setAnswer(3) }}>{player.speechInPrison[2]}</li>}
                        {answer === 2 && <li onClick={() => { setAnswer(3) }}>{player.speechInPrison[3]}</li>}
                    </ol>
                </div>}
        </div>
    )
}

export default MenInPrison;


