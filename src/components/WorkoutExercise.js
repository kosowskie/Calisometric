import React from 'react'

const WorkoutExercise = props => {
    const markHandler = () => props.markClicked(props.element.id)

        return (
                <div className={`card ${props.element.isComplited ? 'complated' : ''}`} key={props.element.id}>
                <h2>{props.element.title}</h2>
                <button onClick={markHandler}>Zakończenie</button>
                </div>
        )
}

export default WorkoutExercise