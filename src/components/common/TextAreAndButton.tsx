import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import t from './TextAreaButton.module.css'

type FormValues = {
    message: string;
};
type PropsType={
    message:string,
    callBack:(e:string)=>void,
    title:string
}
const TextAreAndButton = (props:PropsType) => {
    const { register,reset,formState:{errors}, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data);
        let message=data.message
        if (message){
            props.callBack(message)
            reset()
        }
    };

    return (
        <form className={t.text} onSubmit={handleSubmit(onSubmit)}>

            <div>
                <textarea placeholder={props.message} {...register("message",{
                    required:'Пустое поле'
                })} />
             <><p>{errors?.message?.message}</p></>
            </div>
            <input value={props.title} type="submit" />
        </form>
    );
};

export default TextAreAndButton;