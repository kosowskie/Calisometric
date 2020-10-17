import React from 'react'
import WorkoutExercise from './WorkoutExercise'

class WorkoutDay extends React.Component {
    state = {
        elements: [
            { id: '343534', isComplited: true, title: 'Backlever'},
            { id: 'sdadsa', isComplited: false, title: 'Muscle up'}
        ],
        inputValue: ''
    }

    markCompleted(id){
        const index = this.state.elements
            .findIndex(x => x.id === id)
        const newElements = this.state.elements
        newElements[index].isComplited = true

        this.setState({ elements: newElements})
    }

    addItem(){
        const item = {
            id: Math.random(),
            title: this.state.inputValue
        }
        const newElements = [item, ...this.state.elements]
        this.setState({elements: newElements})
    }

    inputHandler(event){
        const newValue = event.target.value
        this.setState({inputValue: newValue})
    }

    render(){
        const elements = this.state.elements.map(e => {
            return <WorkoutExercise element={e} markClicked={this.markCompleted.bind(this)}/>
        })
        return(
            <div>
                Stwórz rozpiskę do planu treningowego, która ułatwi zapis twojego postepu
                <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
                {elements}
            </div>
        )
    }
}

export default WorkoutDay