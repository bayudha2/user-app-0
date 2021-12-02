import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { TextField } from './TextField';
import { postLoginData } from './action';

export default function CardLogin() {
    const dispatch = useDispatch();
    const history = useNavigate();

    const validateLogin = yup.object({
        email: yup.string().required('Required'),
        password: yup.string().required('Required'),
    });

    function plusSize(e) {
        e.currentTarget.classList.add('py-10');
        e.currentTarget.classList.replace('max-w-sm', 'max-w-lg');
    }

    function minSize(e) {
        e.currentTarget.classList.remove('py-10');
        e.currentTarget.classList.replace('max-w-lg', 'max-w-sm');
    }

    function showCred() {
        alert('Email: eve.holt@reqres.in\n password: cityslicka');
    }

    return (
        <div className="inline-block w-full max-w-sm p-6 my-8 overflow-hidden align-middle transition-all transform hover:shadow-md border rounded-md " onBlur={(e) => minSize(e)} onFocus={(e) => plusSize(e)}>
            <h2 className="text-lg text-center font-bold text-green-600">
                User
                <span className="text-blue-700">App</span>
                {' '}
            </h2>
            <p className="text-center text-xl mt-2">Login</p>
            <p className="text-center text-sm font-light mt-1">Contine Login</p>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validateLogin}
                onSubmit={(values) => dispatch(postLoginData(values, history))}
            >
                {() => (
                    <div>
                        <Form className=" rounded px-8 pt-3 pb-8 mb-4">
                            <TextField label="Email" name="email" type="email" placeholder="Email" />
                            <TextField label="password" type="password" name="password" placeholder="password" />
                            <button
                                type="submit"
                                className="bg-green-400 active:bg-green-700 w-full text-white font-semibold rounded-lg px-7 py-3 transition duration-200 ease-in-out"
                                onClick={() => ''}
                            >
                                Continue
                            </button>
                            <p
                                className="text-sm font-semibold text-blue-500 cursor-pointer mt-2"
                                onKeyPress={() => ''}
                                aria-hidden="true"
                                onClick={showCred}
                            >
                                in case you forget

                            </p>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
}
