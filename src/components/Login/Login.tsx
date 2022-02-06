import React from 'react';
import l from './Login.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import { loginThunk} from "../../redux/AuthReducer";
import {StateData} from "../../types/Types";
import {Redirect} from 'react-router-dom';

type FormValues = {
    login: string;
    password: string;
    remember: boolean;
};

export default function Login() {
    let dis = useDispatch();
    let auth = useSelector((state: StateData) => state.AuthReducer.isAuth);
    let errorMessage=useSelector((state:StateData)=>state.AuthReducer.errorMessage);
    const {register, formState: {errors}, handleSubmit} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data);
        dis(loginThunk(data.login, data.password, data.remember));
    };
    if (auth) {
        return <Redirect to={'profile'}/>
    } else {
        return (
            <form className={l.login} onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <input placeholder={'Login'} {...register("login",
                        {
                            required: 'Поле обязательно к заполнению', minLength: {value: 5, message: 'Минимум 5 символов'},
                            maxLength: {
                                value: 35,
                                message: 'Максимум 20 символов'
                            }
                        })} />
                </div>
                <div>{errors?.login && <p>{errors?.login?.message}</p>}</div>
                <div>
                    <input type='password' placeholder={'Password'} {...register("password",
                        {
                            required: 'Поле обязательно к заполнению',
                            minLength: {value: 3, message: 'Минимум 3 символов'},
                            maxLength: 20
                        })} />
                </div>
                <div>{errors?.password && <p>{errors?.password?.message}</p>}</div>
                <div className={l.check}><input type="checkbox" {...register("remember")} /><span>Remember me</span>
                </div>
                <div className={l.error}>
                    {errorMessage&&errorMessage}
                </div>
                <input value={'Войти'} type="submit"/>
            </form>
        );
    }

}
