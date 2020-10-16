import React from 'react'
import './MainSection.css'
import Typical from 'react-typical'

class MainSection extends React.Component {
    render(){
    return (
        <div className='main-container'>
            <video src="/videos/videoplayback-1.mp4" autoPlay loop muted />
            <h1>Calisometric</h1>
            <Typical
                steps={['Calisthenic', 1000, 'Street Workout', 1000, 'Gymnastic', 1000, 'Street Lifting', 1000]}
                loop={Infinity}
                wrapper="p"
            />
        </div>
    )
    }
}

export default MainSection
