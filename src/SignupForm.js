import React from "react";
import "./components/Form/Form.css"

import Form from "./components/Form";


function QueryForm() {
    return (
        <>
            <Form></Form>
        </>
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