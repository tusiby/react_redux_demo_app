import React, { useState } from 'react'
import Condition from '../Condition'
import './Main.css'
import { rootAction } from "actions"
import { useSelector, useDispatch } from 'react-redux'

const Main = () => {
    const dispatch = useDispatch()
    const [index, setIndex] = useState(1)
    const [canAdd, changeCanAdd] = useState(true)

    const dictionary = useSelector(state => {
        if (state.dictionary && state.dictionary.list ) {
            return state.dictionary.list
        }
        return null
    })

    const add = () => {
        const submitPoll = () => {
            changeCanAdd(false)
            dispatch(rootAction.addWord('randomWord'))
            setTimeout(function() {
                changeCanAdd(true)
            }, 5000);
        }
        if (canAdd) {
            submitPoll()
        }
    }

    const remove = () => dispatch(rootAction.removeWord(Math.floor(Math.random() * dictionary.length)))

    return (
        <div className="main">
            <div className="tabs">
                <div className="tab" onClick={() => setIndex(1)}>Tab1</div>
                <div className="tab" onClick={() => setIndex(2)}>Tab2</div>
                <div className="tab" onClick={() => setIndex(3)}>Tab3</div>
            </div>
            <div className="content">
                <Condition when={index === 1}>
                    <>
                        {dictionary && dictionary.map((word, index) => <div key={index}>{`${index + 1}.${word}`}</div>)}
                        <button onClick={add}> + </button>
                        <button onClick={remove}> - </button>
                    </>
                </Condition>
                <Condition when={index === 2}>
                    <div>Content 2</div>
                </Condition>
                <Condition when={index === 3}>
                    <div>Content 3</div>
                </Condition>
            </div>
        </div>
    )
}

export default Main
