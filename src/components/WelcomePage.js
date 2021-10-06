import React from 'react'
import Style  from './WelcomePage.module.scss'
import BackgroundImage from '../images/todolistshort.jpg'
import CheckedBox from '../images/checked-box.png'

export default function WelcomePage({showLoginPageHandler}) {
    return (
        <div className={Style.container}>
            <div className={Style.upperContainer}>
                <div className={Style.imgContainer}>
                    <img src={BackgroundImage} alt= 'WelocmePage'></img>
                </div>
                <div className={Style.headingContainer}>
                    <div>
                        <div>Do it</div> 
                        <div className={Style.headingLogoContainer}>
                            <img src={CheckedBox} alt= 'CheckedBox'></img>
                        </div>
                        <div>Now</div>
                    </div>
                </div>
            </div>
            <div className={Style.lowerContainer}>
                <div>
                    <div className={Style.appQuote}>
                        <p>A little progress each day</p>
                        <p>adds up to big results</p>
                    </div>
                    <div className={Style.appIntro}>
                        <p> 
                            Do it now hilft Ihnen dabei täglichen Aufgaben zu verwalten und zu managen.
                            Seien Sie organisierter und haben Sie einen überschaubaren Überblick auf Ihre Tätigkeiten.
                            Probieren Sie es aus !
                        </p>
                    </div>
                    <div className={Style.buttonContainer}>
                        <button onClick={showLoginPageHandler}>
                                Jetzt loslegen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


