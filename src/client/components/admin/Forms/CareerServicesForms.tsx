
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../shared/Alert';
import * as Yup from "yup";
import * as DateTime from "react-datetime";
import { DisplayFormikState } from './NetworkForms';
import * as moment from 'moment';


interface FormValues {
    date: DateTime.DatetimepickerProps["value"];
    service: string;

}

export class CareerServicesForms extends React.Component<RouteComponentProps, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        const initialValues: FormValues = {
            date: moment(),
            service: 'choose',
        };
        const services =['Resume Requirements','LinkedIn Improvements','Interview Suggestions','Mock Interview','Career Coaching','Headshot Suggestions','Networking Tips'];
        const options= ['Choose a service',...services].map((service,index)=>{
            let name = index === 0 ? initialValues.service : `service${index}`;
        
            return (
                <option value={name} key={index}>{service}</option>

            );
        });

        return (
            <div className="card-body">
                <h5 className="card-title">Fill in your scheduled career support services </h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: FormValues, { resetForm, setSubmitting }) =>
                    setTimeout(() => {                                         
                        alert(JSON.stringify(values, null, 2));                        
                        setSubmitting(false);          
                        resetForm();
                                             
                    }, 2000)}
                    validationSchema={Yup.object().shape({
                        date:Yup.date().typeError('Please enter a valid date and time'),
                        service:Yup.string().test('match','Please select a career service',value =>value !== 'choose')
                    })}
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
                                    <div className='col-auto'>
                                        <ErrorMessage name='service'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-row text-left ">
                                    <div className="form-group col-md-4">
                                        <label htmlFor='date'>
                                            Date Scheduled
                                            </label>
                                        <DateTime
                                            input={true}
                                            open={true}
                                            inputProps={{ name: 'date' }}
                                            defaultValue={values.date}
                                            onChange={value => setFieldValue('date', value)}
                                        />
                                    </ div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor='service'>
                                            Career Services
                                            </label>
                                        <Field component="select" name="service" className="form-control">
                                            {options}
                                        </Field>
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