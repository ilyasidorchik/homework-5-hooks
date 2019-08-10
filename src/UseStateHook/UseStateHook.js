import React, { Fragment, useReducer } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

const initialState = {
    email: '',
    password: '',
    message: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'email':
        case 'password':
            return {'action.type': action.data};
        case 'submit':
            if (state.email !== '' && state.password !== '') {
                return {message: 'Вы вошли'};
            }
            else {
                return {message: ''};
            }
        default:
            return {};
    }
}

export const Form = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Fragment>
            <input type="email" name="email" data-testid="email-input" value={state.email} onChange={ (e) => dispatch({type: 'email', data: e.target.value}) } />
            <input type="password" name="password" data-testid="password-input" value={state.password} onChange={ (e) => dispatch({type: 'password', data: e.target.value}) } />
            <input type="submit" name="submit" data-testid="submit" onClick={ (e) => { e.preventDefault(); dispatch({type: 'submit'}) } } />

            {state.message && <div data-testid="success-message">{state.message}</div>}
        </Fragment>
    );
};