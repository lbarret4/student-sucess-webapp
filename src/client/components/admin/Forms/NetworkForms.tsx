
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {/* , FormikErrors, FormikActions, FormikProps */  Formik, Form, Field } from 'formik';
import Alert, { MessageTypes } from '../../shared/Alert';
import * as Yup from "yup";


const DisplayFormikState = (props: any) => (
    <div
        style={{
            margin: "1rem 0"
        }}>
        <h3
            style={{
                fontFamily: "monospace"
            }}
        />
        <pre
            style={{
                background: "#f6f8fa",
                fontSize: ".65rem",
                padding: ".5rem"
            }}>
            <strong>props</strong> = {JSON.stringify(props, null, 2)}
        </pre>
    </div>
);


interface FormValues {
    contact: string;
    company: string;
    activity: string;
}


export class NetworkForms extends React.Component<RouteComponentProps, any>{
    constructor(props: any) {
        super(props);
    }
    render() {

        const initialValues: FormValues = {
            contact: '',
            company: '',
            activity: ''
        };


        return (
            <div className="card-body">
                <h5 className="card-title">Fill in your networking activities this week.</h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: FormValues) => alert(JSON.stringify(values, null, 2))}
                >
                    {(props: any) => {
                        const { values } = props;
                        return (
                            <Form>
                                <div className="form-row text-left ">
                                    <div className="form-group col-md-4">
                                        <label htmlFor='contact'>
                                            Contact
                                            </label>
                                        <Field
                                            type="text"
                                            name="contact"
                                            placeholder="Name"
                                            className="form-control"
                                        />

                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor='company'>
                                            Company
                                            </label>
                                        <Field
                                            type="text"
                                            name="company"
                                            placeholder="Company"
                                            className="form-control"
                                        />

                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor='activity'>
                                            Activity
                                            </label>
                                        <Field
                                            type="text"
                                            name="activity"
                                            placeholder="Coding Meetup"
                                            className="form-control"
                                        />

                                    </div>
                                    <div className='col'>
                                        <button className="btn btn-primary btn-lg btn-block">
                                            Submit
                                        </button>
                                    </div>
                                </div>


                                <DisplayFormikState {...props} />
                            </Form>
                        );
                    }}
                </Formik>
            </div>

        );
    }

}



