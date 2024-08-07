import React from "react";
import towerImage from "./images/Rectangle15.png"
import mapImage from './images/Снимок экрана от 2024-05-06 19-04-37.png'
import './ProjectPage.css';

import BlurredImage from "./components/ImageBlur";
import createObject from "./components/createObject";
import Tbody from "./components/Tbody";
import { useMatchMedia } from "./hooks/useMatchMedia";

const arr = [
    <text>5 <span className="thesis2">км</span></text>,    <h3>От Кремля</h3>,
    <text>90</text>,    <h3>Апартаментов</h3>,
    <text>7</text>,    <h3>Этажей</h3>,
    <text>5 <span className="thesis2">м²</span></text>,    <h3>Потолки</h3>
]

const arrMobile = [
    <text>5 <span className="thesis2">км</span></text>,    <h3>От Кремля</h3>,
    <text>90</text>,    <h3>Апартаментов</h3>,
]

const arrMobile1 = [
    <text>7</text>,    <h3>Этажей</h3>,
    <text>5 <span className="thesis2">м²</span></text>,    <h3>Потолки</h3>
]

const content = createObject(arr);

const contentMobile = createObject(arrMobile);
const contentMobile1 = createObject(arrMobile1);



function AboutProject() {
    const {isMobile} = useMatchMedia();

    return (
    <div id='project' className='mainContainer'>
        <div className="project-wrapper">
            <div className='alignLeftPadded textBlock projectDiv'>
                <h2>О проекте</h2>
                <p>
                    Вдохновением для создания концепции послужила исходная архитектура
                    самого Дома: геометричные элементы парадного фасада, приковывающие к 
                    себе внимание, светлые и просторные помещения с пятиметровыми потолками, 
                    сразу отсылают к эстетике американского классического ар-деко.
                </p>
                <p>
                    Его влияние быстро охватило Америку начала 19 века, формировало образ жизни того периода, 
                    который характеризуется бурным экономическим ростом, развитием технологий, машиностроения и строительства 
                    культовых известнейших арх-сооружений, а также развитием киноискусства.
                </p>
                <table className="projectTable">
                    <tbody>
                        {isMobile ? 
                            <React.Fragment>
                                <Tbody data={contentMobile} columns={true} thClass='thesis1 trMediaPadding' />
                                <Tbody data={contentMobile1} columns={true} thClass='thesis1' />
                            </React.Fragment>
                            
                         : <Tbody data={content} columns={true} thClass='thesis1' />
                        }
                        
                    </tbody>
                </table>
            </div>
            <BlurredImage src={towerImage} alt='tower' divClassName='towerWrapperMargin' className='towerImg' />
        </div>
    </div>
    )

}


function Location() {
    return (
        <div className="mainContainer grid locContainer">
            <div className="textBlock locDiv">
                <div className="loc-wrapper">
                    <section className="loc-header">
                        <h2>ЦАО Пресненский район</h2>
                        <h3>ул. Поклонная, 9</h3>
                    </section>

                    <section className="loc-body">
                        <p>
                            Москва-Сити, Центр международной торговли, 
                            известные театры, музеи, лучшие рестораны – центр Москвы – центр притяжения успеха, 
                            вдохновения и силы.
                        </p>

                        <p>
                            Идеальное расположение в тихом переулке обеспечивает ощущение клубности и 
                            приватности владельцами дома Поклонная,9
                        </p>
                    </section>
                </div>
                
                <BlurredImage src={mapImage} alt="mapScreenshot" className="tImage" />
            </div>
        </div>
    )
}

export default class ProjectPage extends React.Component {
    render() {
        return (
        <React.Fragment>
            <AboutProject />
            <Location /> 
        </React.Fragment>
        )
    }
}
