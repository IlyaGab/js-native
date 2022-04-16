import React, {MouseEvent} from 'react';

const deleteUser = (e:MouseEvent<HTMLButtonElement>) => {
    alert(e.currentTarget.name)
}

const saveUser = () => {
    alert('user has been saved')
}

const nameChanged = () => {
    console.log('name changed!')
}

const focusLostHandler = () => {
    console.log('focus lost')
}

export const User = () => {
    return <div>
        <textarea onChange={nameChanged} onBlur={focusLostHandler}>iLYA</textarea>
        <button name='delete' onClick={deleteUser}>x</button>
        <button name='save' onClick={deleteUser}>x</button>
    </div>

}