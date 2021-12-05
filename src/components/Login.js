import React, {useState} from "react"
import {useFormik, Formik, Form, Field, ErrorMessage} from "formik";
import {Navigate} from "react-router-dom";

export default function Login() {
    const [loginstate, setloginstate] = useState({loggedin:false, token: ""})
    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <div className="loginDiv fff flex items-center flex-col p-5 font-bold">
                <h1>Token-Login</h1>
                <Formik initialValues={{token: ''}}
                        validate={values => {
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            // axios.post("/login", {token}).then()
                            setloginstate(()=>{return{loggedin:true, token:values.token}}
                            )
                        }}>
                    {({isSubmitting}) => (
                        <Form>
                            <Field type="text" name="token"/>
                            <ErrorMessage name="token" component="div"/>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                {loginstate.loggedin &&
                <Navigate to={`/profile/${loginstate.token}`}/>
                }
            </div>
        </main>
    );
}