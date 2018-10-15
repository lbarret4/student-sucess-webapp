import * as React from 'react';
import { RouteComponentProps, Route, Link } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../../shared/Alert';
import * as Yup from "yup";
import * as DateTime from "react-datetime";
import { DisplayFormikState } from '../NetworkForms';
import * as moment from 'moment';
import { EmployerForm } from '../EmployerForm';

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
            date: new Date(Date.now()),
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
                            resetForm();
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 2000)}
                    validationSchema={Yup.object().shape(
                        {
                            activity: Yup.string().required('Please enter activity description'),
                            date: Yup.date().typeError('Please enter date'),
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
                                        <Link
                                            to={`${this.props.match.path}/EmployerInfo`}
                                            className="btn btn-primary btn-lg btn-block"
                                        >
                                            Employer
                                        </Link>
                                    </div>
                                </div>
                                <DisplayFormikState {...props} />
                            </Form>
                        );
                    }}
                </Formik>
                <Route strict path={`${this.props.match.path}/EmployerInfo`} component={EmployerForm} />
            </div>
        );
    }

}