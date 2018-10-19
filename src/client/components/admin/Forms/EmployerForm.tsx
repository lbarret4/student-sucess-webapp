import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../shared/Alert';
import * as Yup from "yup";
import { DisplayFormikState } from './NetworkForms';
import json from '../../../utils/api';



interface FormValues {
    contact: string;
    company: string;
    phone: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
}

interface IEmployerFormProps extends RouteComponentProps {
    match: {
        isExact: boolean,
        params: {
            id: number
        }
        path: string
        url: string
    }
}

export class EmployerForm extends React.Component<IEmployerFormProps, FormValues>{
    constructor(props: any) {
        super(props);
        this.state = {
            contact: '',
            company: '',
            phone: '',
            street1: '',
            street2: '',
            city: '',
            state: 'choose',
            zip: '',
        }
    }

    render() {
        const initialValues = this.state;
        const STATES = ["AK - Alaska", "AL - Alabama", "AR - Arkansas", "AS - American Samoa", "AZ - Arizona", "CA - California",
            "CO - Colorado", "CT - Connecticut", "DC - District of Columbia", "DE - Delaware", "FL - Florida", "GA - Georgia", "GU - Guam",
            "HI - Hawaii", "IA - Iowa", "ID - Idaho", "IL - Illinois", "IN - Indiana", "KS - Kansas", "KY - Kentucky", "LA - Louisiana",
            "MA - Massachusetts", "MD - Maryland", "ME - Maine", "MI - Michigan", "MN - Minnesota", "MO - Missouri", "MS - Mississippi",
            "MT - Montana", "NC - North Carolina", "ND - North Dakota", "NE - Nebraska", "NH - New Hampshire", "NJ - New Jersey",
            "NM - New Mexico", "NV - Nevada", "NY - New York", "OH - Ohio", "OK - Oklahoma", "OR - Oregon", "PA - Pennsylvania",
            "PR - Puerto Rico", "RI - Rhode Island", "SC - South Carolina", "SD - South Dakota", "TN - Tennessee", "TX - Texas", "UT - Utah",
            "VA - Virginia", "VI - Virgin Islands", "VT - Vermont", "WA - Washington", "WI - Wisconsin", "WV - West Virginia", "WY - Wyoming"];

        let options = ['choose', ...STATES].map((state, index) => {
            let name = index === 0 && index !== STATES.length - 1 ? initialValues.state : `state${index}`;
            return (
                <option value={name}>{state}</option>

            );
        });
        this.props.match.params.id
        return (
            <div className="card-body">
                <h5 className="card-title">Fill in prospective employer's info</h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values: FormValues, { resetForm, setSubmitting }) => {
                        try {
                            let data =
                            {
                                contact: values.contact,
                                company_name: values.company,
                                phone: values.phone,
                                address: values.street1,
                                address_2: values.street2,
                                city: values.city,
                                state: values.state.slice(0, 2),
                                zip: values.zip
                            }
                            let res1 = await json('/api/employerinfo', 'POST', data);
                            let employerId = await res1.id;
                            let id = this.props.match.params.id;
                            if (this.props.match.url.includes('Interview')) {
                                let res = await json(`/api/interviews/${id}`, 'PUT', { employer_id: employerId });
                            } else if (this.props.match.url.includes('Application')) {
                                let res = await json(`/api/applications/${id}`, 'PUT', { company_info: employerId });
                            }
                            alert(JSON.stringify(data, null, 2));
                            setSubmitting(false);
                            this.props.history.goBack();
                            resetForm();

                        } catch (error) {
                            console.log(error)
                        }

                    }}
                    validationSchema={Yup.object().shape({
                        contact: Yup.string().required('Please enter contact'),
                        company: Yup.string().required('Please enter company name'),
                        phone: Yup.string().required('Please enter phone number').min(9).matches(/[0-9]{3}-[0-9]{3}-[0-9]{4}/, "Please enter phone number in 123-456-7890 format"),
                        street1: Yup.string().required('Please enter street address'),
                        street2: Yup.string(),
                        city: Yup.string().required('Please enter city'),
                        state: Yup.string().required().test('match', 'Please select a state', value => value !== 'choose'),
                        zip: Yup.string().required('Please enter zip').min(5).max(5).matches(/[0-9]{5}/, "Please enter valid zip code"),

                    })}
                >
                    {(props: FormikValues) => {
                        const { values, setFieldValue, isSubmitting } = props;
                        return (
                            <Form className="py-5">
                                <div className="form-row text-left">
                                    <div className="col-md-4">
                                        <ErrorMessage name='contact'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="col-md-4">
                                        <ErrorMessage name='company'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="col-md-4">
                                        <ErrorMessage name='phone'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-row text-left">
                                    <div className="form-group col-md-4">
                                        <label htmlFor='contact'>
                                            Contact
                                            </label>
                                        <Field
                                            type='text'
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
                                            type='text'
                                            name="company"
                                            placeholder="Company Name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor='phone'>
                                            Phone
                                            </label>
                                        <Field
                                            type='tel'
                                            name="phone"
                                            placeholder="123-456-7890"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <ErrorMessage name='street1'>
                                        {msg => (
                                            <Alert message={msg} messageType={MessageTypes.Error} />
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor='street1'>
                                        Address
                                            </label>
                                    <Field
                                        type='text'
                                        name="street1"
                                        placeholder="1235 Main St."
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <ErrorMessage name='street2'>
                                        {msg => (
                                            <Alert message={msg} messageType={MessageTypes.Error} />
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor='street2'>
                                        Address 2
                                            </label>
                                    <Field
                                        type='text'
                                        name="street2"
                                        placeholder="Apartment, studio, or floor"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-row text-left">
                                    <div className="col-md-6">
                                        <ErrorMessage name='city'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="col-md-4">
                                        <ErrorMessage name='state'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="col-md-2">
                                        <ErrorMessage name='zip'>
                                            {msg => (
                                                <Alert message={msg} messageType={MessageTypes.Error} />
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-row text-left">
                                    <div className="form-group col-md-6">
                                        <label htmlFor='city'>
                                            City
                                            </label>
                                        <Field
                                            type='text'
                                            name="city"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor='state'>
                                            State
                                            </label>
                                        <Field component="select" name="state" className="form-control">
                                            {options}
                                        </Field>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor='zip'>
                                            Zip
                                            </label>
                                        <Field
                                            type='text'
                                            name="zip"
                                            className="form-control"
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