import React, {useState} from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model:string}
}

function useIlyaState (m:string){
    return[m,function(){}]
}

function useIlyaState2 (m:string){
    return{message:m,
        setMessage:function(){}}
}


export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man, ...restProps} = props

    const [message, setMessage] = useIlyaState('Hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {restProps.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}