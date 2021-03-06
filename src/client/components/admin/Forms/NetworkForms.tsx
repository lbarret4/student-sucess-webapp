
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../shared/Alert';
import * as Yup from "yup";
import * as DateTime from "react-datetime";
import json, { User } from '../../../utils/api';
import * as moment from 'moment';

interface FormValues {
    contact: string;
    company: string;
    activity: string;
    date: DateTime.DatetimepickerProps["value"];
    file: string
}


export class NetworkForms extends React.Component<RouteComponentProps, FormValues>{
    constructor(props: any) {
        super(props);
        this.state = {
            contact: '',
            company: '',
            activity: '',
            date: moment().format('YYYY-MM-DD'),
            file: null
        }
    }



    render() {

        const initialValues = this.state;
        return (
            <div className="card-body">
                <h5 className="card-title">Fill in your networking activities this week.</h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values: FormValues, { resetForm, setSubmitting }) => {
                        try {
                            resetForm();
                            let data =
                            {
                                user: User.userid,
                                network_date: values.date,
                                contact: values.contact,
                                company_name: values.company,
                                attachment: values.file,
                                net_activities: values.activity,
                            }
                            if (values.file === null) delete data.attachment;
                            let results = await json('/api/networking', 'POST', data);
                            alert(JSON.stringify(data, null, 2));
                            setSubmitting(false);
                        } catch (error) {
                            console.log(error);
                        }

                    }}
                    validationSchema={Yup.object().shape(
                        {
                            contact: Yup.string().required('Please enter your contact\'s company name'),
                            company: Yup.string().required('Please enter a company name'),
                            activity: Yup.string().required('Please enter an activity description'),
                            date: Yup.date().typeError('Please enter a valid date'),
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
                                            defaultValue={moment(values.date)}
                                            onChange={value => setFieldValue('date', moment(value).format('YYYY-MM-DD'))}
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
                            </Form>
                        );
                    }}
                </Formik>
            </div>

        );
    }

}



