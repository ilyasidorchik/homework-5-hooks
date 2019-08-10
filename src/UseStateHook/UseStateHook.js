import React, { useState } from "react";

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

export const Form = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        if (email !== '' && password !== '') {
            setMessage('Вы вошли');
        }
        else {
            setMessage('');
        }
    }

    return (
        <div>
            <input type="email" name="email" data-testid="email-input" value={email} onChange={ (e) => setEmail(e.target.value) } />
            <input type="password" name="password" data-testid="password-input" value={password} onChange={ (e) => setPassword(e.target.value) } />
            <input type="submit" name="submit" data-testid="submit" onClick={ handleSubmit } />

            {message && <div data-testid="success-message">{message}</div>}
        </div>
    );
};