import React from 'react'
import './Cards.css';
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>Naucz się prostych progresji, które umożliwią Ci naukę pierwszych figur/skilli</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-muscle-up.jpg"
                            text="Progresje, które nauczą cię Muscle Up-a (wejście siłowe)"
                            label='Amator'
                            path='/muscle-up'
                        />
                        <CardItem 
                            src="images/img-backlever.jpg"
                            text="Progresje, które nauczą cię Backlever (wagę tyłem)"
                            label='Początkujący'
                            path='/backlever'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-human-flag.jpg"
                            text="Progresje, które nauczą cię Human-flag (ludzkiej flagi)"
                            label='Początkujący/Średnio-zaawansowany'
                            path='/services'
                        />
                        <CardItem 
                            src="images/img-dragon-flag.jpg"
                            text="Progresje, które nauczą cię dragon-flag (smoczej flagi). Ćwiczenia, które wykonywał sam Bruce Lee!"
                            label='Amator/początkujący'
                            path='/services'
                        />
                        <CardItem 
                            src="images/img-handstand.jpg"
                            text="Progresje, które nauczą cię handstand'a (stanie na rękach)."
                            label='Amator/początkujący'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
