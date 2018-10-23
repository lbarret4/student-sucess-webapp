
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../shared/Alert';
import * as Yup from "yup";
import * as DateTime from "react-datetime";
import * as moment from 'moment';
import { json, User } from '../../../utils/api';


interface FormValues {
    date: DateTime.DatetimepickerProps["value"];
    service: string;

}

interface ICareerServicesFormState {
    initialValues: FormValues;
    services: string[];

}

export class CareerServicesForms extends React.Component<RouteComponentProps, ICareerServicesFormState>{
    constructor(props: any) {
        super(props);
        this.state = {
            initialValues: {
                date: moment().format('YYYY-MM-DDTHH:mm'),
                service: 'choose'
            },
            services: []
        }
    }

    async componentDidMount() {
        let data = await json('/api/services'/* , 'GET' */);
        let services: any = await data.map((service: any) => {
            return service.service_type;
        });
        this.setState({ services })
    }

    render() {
        const initialValues: FormValues = this.state.initialValues;
        const services = this.state.services;
        const options = ['Choose a service', ...services].map((service, index) => {
            let name = index === 0 ? initialValues.service : `${index}`;

            return (
                <option value={name} key={index}>{service}</option>

            );
        });

        return (
            <div className="card-body">
                <h5 className="card-title">Fill in your scheduled career support services </h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: FormValues, { resetForm, setSubmitting }) => {
                        let data =
                        {
                            userid: User.userid,
                            service_type: values.service,
                            _created: values.date
                        }
                        let results = json('/api/careerservices', 'POST', data);
                        alert(JSON.stringify(data, null, 2));
                        setSubmitting(false);
                        resetForm();

                    }}
                    validationSchema={Yup.object().shape({
                        date: Yup.date().typeError('Please enter a valid date and time'),
                        service: Yup.string().test('match', 'Please select a career service', value => value !== 'choose')
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
                                            defaultValue={moment(values.date)}
                                            onChange={value => setFieldValue('date', moment(value).format('YYYY-MM-DDTHH:mm'))}
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
                            </Form>
                        );

                    }}

                </Formik>
            </div>
        );
    }

}