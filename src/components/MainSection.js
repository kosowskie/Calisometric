import React from 'react'
import { Button } from './Button'
import './MainSection.css'

function MainSection() {
    return (
        <div className='main-container'>
            <video src="/videos/videoplayback-1.mp4" autoPlay loop muted />
            <h1>asd</h1>
            <p>dsa</p>
            <div className="main-btns">
                <Button className='btns'buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    hwdp
                </Button>
                <Button className='btns'buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    acab
                </Button>
            </div>
        </div>
    )
}

export default MainSection
