import React from "react";
import "./SignupForm.css"

import Checkbox from "./components/Checkbox";


function QueryForm() {
    return (
        <div className="mainContainer signupContainer">
            <div className="queryContainer">
             <section className="querySection alignLeftPadded">
                <h2>Записаться на экскурсию</h2>

                 <input className="queryInput" type="text" placeholder="Имя" />
                 <input className="queryInput" type="text" placeholder="Телефон"/>

                 <Checkbox>
                     Даю согласие на <span>обработку персональных данных</span>
                 </Checkbox>

                 <span className="query">Оставить заявку</span>
             </section>

             <section className="alignRightPadded querySection1">
                 <h2>Контакты</h2>

                 <span className="phoneNumber">+7 (812) 210-42-42</span>

                 <p>Москва, ул. Климашкина, 16</p>
                 <p>Пн-Вс: с 9:00 до 20:00</p>
             </section>
            </div>

        </div>
    )
}

export default class SignupForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <QueryForm />
            </React.Fragment>
        )
    }
}