import * as React from 'react';
import { RouteComponentProps, Route, Link } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../../shared/Alert';
import * as Yup from "yup";
import * as DateTime from "react-datetime";
import { DisplayFormikState } from '../NetworkForms';
import * as moment from 'moment';

interface FormValues {
    date: DateTime.DatetimepickerProps["value"];
    challenge: boolean;
    challengeDue: DateTime.DatetimepickerProps["value"];
    file: string
}


export class InterviewForms extends React.Component<RouteComponentProps, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        const initialValues: FormValues = {
            date:moment(),
            challenge: false,
            challengeDue: moment().add(1, 'w'),
            file: ''
        };

        return (
            <div className="card-body">
                <h5 className="card-title">Fill in your scheduled interviews.</h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: FormValues, { resetForm, setSubmitting }) =>
                        setTimeout(() => {                            
                            alert(JSON.stringify(values, null, 2));
                            this.props.history.push(`${this.props.match.path}/EmployerInfo/1`)
                            setSubmitting(false);                            
                        }, 2000)}
                    validationSchema={Yup.object().shape(                       {
                            date: Yup.date().typeError('Please enter a valid date and time'),
                            challengeDue: Yup.date().typeError('Please enter a valid date'),
                            file: Yup.string()
                        }
                    )}
                >
                    {(props: FormikProps<FormikValues>) => {
                        const { values, setFieldValue, isSubmitting } = props;
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
                                        <ErrorMessage name='challengeDue'>
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
                                            inputProps={{ name: 'date' }}
                                            defaultValue={values.date}
                                            onChange={value => setFieldValue('date', value)}
                                        />
                                    </ div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor='challengeDue'>
                                            Challenge Due Date
                                            </label>
                                        <DateTime
                                            input={true}
                                            timeFormat={false}
                                            inputProps={{ name: 'challengeDue' }}
                                            defaultValue={values.challengeDue}
                                            onChange={value => setFieldValue('challengeDue', value)}
                                        />
                                    </ div>
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
                                <div className="form-row">
                                    <div className="form-group form-check col-md-4 offset-md-4">

                                        <Field
                                            type="checkbox"
                                            name="challenge"
                                            className="form-check-input"
                                            checked={values.challenge}
                                        />
                                        <label htmlFor='challenge' className="form-check-label" >
                                            Require Code Challenge
                                        </label>

                                    </div>
                                </div>
                                <div className="form-row  text-right ">
                                    <div className='col-md-4 offset-md-8'>
                                    <button 
                                        className="btn btn-primary btn-lg btn-block"
                                        disabled={isSubmitting}
                                        >
                                            Next: Employer Info
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