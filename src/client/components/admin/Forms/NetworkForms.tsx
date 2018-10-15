
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../shared/Alert';
import * as Yup from "yup";
import * as DateTime from "react-datetime";

export const DisplayFormikState = (props: any) => (
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
    date: DateTime.DatetimepickerProps["value"];
    file: string
}


export class NetworkForms extends React.Component<RouteComponentProps, any>{
    constructor(props: any) {
        super(props);
    }
    render() {

        const initialValues: FormValues = {
            contact: '',
            company: '',
            activity: '',
            date: new Date(Date.now()),
            file: ''
        };



        return (
            <div className="card-body">
                <h5 className="card-title">Fill in your networking activities this week.</h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: FormValues,{resetForm,setSubmitting}) =>
                    setTimeout(()=>{ 
                        resetForm();
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    },2000)}
                    validationSchema={Yup.object().shape(
                        {
                            contact: Yup.string().required('Please enter your contact\'s company name'),
                            company: Yup.string().required('Please enter a company name'),
                            activity: Yup.string().required('Please enter an activity description'),
                            date: Yup.date().typeError('Please enter a valid date'),
                            file: Yup.string()
                        }
                    )}
                >
                    {(props: FormikProps<FormikValues>) => {
                        const { values, setFieldValue,isSubmitting } = props;
                        return (
                            <Form className="py-5">
                                <div className="form-row text-left ">
                                <div className='col-md-4'>
                                        <ErrorMessage name='date'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className='col-md-4'>
                                        <ErrorMessage name='contact'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                     <div className='col-md-4'>
                                        <ErrorMessage name='company'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-row text-left ">
                                    <div className="form-group col-md-4">
                                        <label htmlFor='date'>
                                            Date
                                            </label>
                                        <DateTime
                                            input={true}
                                            timeFormat={false}
                                            inputProps={{ name: 'date' }}
                                            defaultValue={values.date}
                                            onChange={value => setFieldValue('date', value)}
                                        />
                                    </ div>
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
                                </div>
                                <div className="form-row text-left ">
                                    <div className='col-md-4 offset-md-4'>
                                        <ErrorMessage name='activity'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-row text-left ">
                                    <div className="form-group col-md-4 offset-md-4">
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
                                    <div className="form-group col-md-4">
                                        <label htmlFor='file'>
                                            Attachment
                                            </label>
                                        <Field
                                            type="file"
                                            name="file"
                                            className="form-control-file"
                                        />

                                    </div>
                                </div>
                                <div className="form-row  text-right ">
                                    <div className='col-md-4 offset-md-8'>
                                        <button 
                                        className="btn btn-primary btn-lg btn-block"
                                        disabled={isSubmitting}
                                        >
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



