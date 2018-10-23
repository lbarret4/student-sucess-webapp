import * as React from 'react';
import { RouteComponentProps, Route, Link } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../../shared/Alert';
import * as Yup from "yup";
import * as DateTime from "react-datetime";
import * as moment from 'moment';
import json, { User } from '../../../../utils/api';

interface FormValues {
    date: DateTime.DatetimepickerProps["value"];
    challenge: boolean;
    challengeDue: DateTime.DatetimepickerProps["value"];
    file: string
}


export class InterviewForms extends React.Component<RouteComponentProps, FormValues>{
    constructor(props: any) {
        super(props);
        this.state = {
            date: moment().format('YYYY-MM-DDTHH:mm'),
            challenge: false,
            challengeDue: moment().add(1, 'w').format('YYYY-MM-DD'),
            file: null
        }
    }
    render() {
        const initialValues = this.state;

        return (
            <div className="card-body">
                <h5 className="card-title">Fill in your scheduled interviews.</h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values: FormValues, { resetForm, setSubmitting }) => {
                        try {
                            let data =
                            {
                                userid: User.userid,
                                interview_date: values.date,
                                int_attachments: values.file,
                                challenge_rcvd: values.date,
                                challenge_due: values.challengeDue
                            }
                            if (!values.challenge) delete data.challenge_due;
                            if (values.file === null) delete data.int_attachments;
                            let results = await json('/api/interviews', 'POST', data);                            
                            alert(JSON.stringify(data, null, 2));
                            this.props.history.push(`${this.props.match.path}/EmployerInfo/${results.id}`)
                            setSubmitting(false);
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                    validationSchema={Yup.object().shape({
                        date: Yup.date().typeError('Please enter a valid date and time'),
                        challengeDue: Yup.date().typeError('Please enter a valid date'),
                        file: Yup.string().nullable(true)
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
                                            defaultValue={moment(values.date)}
                                            onChange={value => moment(value).format('YYYY-MM-DDTHH:mm')}
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
                                            defaultValue={moment(values.challengeDue)}
                                            onChange={value => setFieldValue('challengeDue', moment(value).format('YYYY-MM-DD'))}
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
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        );
    }

}