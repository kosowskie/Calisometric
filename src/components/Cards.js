import React from 'react'
import './Cards.css';
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>9871111</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img1.jpg"
                            text="fhsdfyysdfydfgzydgddszysdz
                            ysdddysfyddyydfydfydxfyxdydxgyxdygx"
                            label='dfadgaga'
                            path='/services'
                        />
                        <CardItem 
                            src="images/img2.jpg"
                            text="dxyfyxydfgxyfghxxyfgyfgxyfg
                            xyfgxyfgxyfgxyfgxyfgxxyfguyfgxyg"
                            label='daf'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img3.jpg"
                            text="fhsdfyysdfydfgzydgddszysdz
                            ysdddysfyddyydfydfydxfyxdydxgyxdygx"
                            label='dfadgaga'
                            path='/services'
                        />
                        <CardItem 
                            src="images/img4.jpg"
                            text="dxyfyxydfgxyfghxxyfgyfgxyfg
                            xyfgxyfgxyfgxyfgxyfgxxyfguyfgxyg"
                            label='daf'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
