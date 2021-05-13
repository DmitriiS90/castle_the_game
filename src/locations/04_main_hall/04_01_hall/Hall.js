import React, { useState } from 'react'
import style from './Hall.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way'

const Hall = (props) => {
    const [text, setText] = useState(true)
    const dispatch = useDispatch()
    const player = useSelector((state) => { return state.persons.player })
    const inessa = useSelector((state) => { return state.persons.inessa })
    const edvard = useSelector((state) => { return state.persons.edvard })
    const karl = useSelector((state) => { return state.persons.karl })
    return (
        <div className={style.hall}>
            <Way url={'/hallway'} way={'Подняться по лестнице'} />
            <Way url={'/room'} way={'Вернуться'} />

            {player.inHall && <p onClick={() => { dispatch({ type: 'TEXT_IN_HALL' }) }}>Вы вошли в главный зал. И на вас сразу обратили внимания все присутствующие. Вам постепенно возвращается память и вы узнаете некоторых людей из вашей свиты. Необходимо вычислить заговорщиков.</p>}

            {inessa.isClick &&
                <div>
                    <p>-Александр и Инесса: {inessa.speech[0]}</p>
                    <ol>
                        <li onClick={()=>{dispatch({ type: 'OUT_FROM_INESSA' })}}>{player.speechWithInessa}</li>
                    </ol>
                </div>}

            {edvard.isClick &&
                <div>
                    <p>-Едвард: {edvard.speech[0]}</p>
                    <ol>
                        <li onClick={()=>{dispatch({ type: 'OUT_FROM_EDVARD' })}}>{player.speechWithEdvard}</li>
                    </ol>
                </div>}

            {karl.isClick &&
                <div>
                    <p>-Карл: {karl.speech[0]}</p>
                    <ol>
                        <li onClick={()=>{dispatch({ type: 'OUT_FROM_KARL' })}}>{player.speechWithKarl}</li>
                    </ol>
                </div>}

            <div className={style.inessa} onClick={()=>{dispatch({ type: 'TALK_TO_INESSA' })}}></div>

            <div className={style.edvard} onClick={()=>{dispatch({ type: 'TALK_TO_EDVARD' })}}></div>

            <div className={style.karl} onClick={()=>{dispatch({ type: 'TALK_TO_KARL' })}}></div>
        </div>
    )
}

export default Hall;