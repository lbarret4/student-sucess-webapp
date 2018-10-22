import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../../shared/Alert';
import * as Yup from "yup";
import * as DateTime from "react-datetime";
import { DisplayFormikState } from '../NetworkForms';
import * as moment from 'moment';
import json, { User } from '../../../../utils/api';


interface FormValues {
    date: DateTime.DatetimepickerProps["value"];
    company: string;

}

interface IApplicationFormsState {
    initialValues: FormValues;
    companies: { id: number, name: string }[];

}

export class ApplicationForms extends React.Component<RouteComponentProps, IApplicationFormsState>{
    constructor(props: any) {
        super(props);
        this.state = {
            initialValues: {
                date: moment().format('YYYY-MM-DDTHH:mm'),
                company: 'choose',
            },
            companies: []
        }
    }

    async componentDidMount() {
        try {
            let data = await json('/api/employerinfo');
            let companies: any = await data.map((company: any) => {
                return {
                    id: company.id,
                    name: company.company_name
                };
            });
            this.setState({ companies });
        } catch (error) {
            console.log(error);
        }

    }

    render() {

        const initialValues = this.state.initialValues;
        const companies = this.state.companies;
        let options = [{ id: 0, name: 'Choose a Company' }, ...companies, { id: companies.length, name: 'Not Listed' }].map((company, index) => {
            let name = index === 0 && index !== companies.length - 1 ? initialValues.company : `${company.id}`;
            name = index === companies.length+1 ? 'NA' : name;
            return (
                <option value={name} key={index}>{company.name}</option>

            );
        });

        return (
            <div className="card-body">
                <h5 className="card-title">Fill in info for submitted job application </h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values: FormValues, { resetForm, setSubmitting }) => {

                        try {

                            let data =
                            {
                                userid: User.userid,
                                company_info: values.company,
                                date_submitted: values.date
                            }
                            if (values.company === 'NA') {
                                delete data.company_info;
                                let results = await json('/api/applications', 'POST', data);
                                this.props.history.push(`${this.props.match.path}/EmployerInfo/${results.id}`);
                            } else {
                                let results = await json('/api/applications', 'POST', data);
                                resetForm();
                            }
                            alert(JSON.stringify(data, null, 2));
                            setSubmitting(false);
                        } catch (error) {
                            console.log(error);
                        }



                    }}
                    validationSchema={Yup.object().shape({
                        date: Yup.date().typeError('Please enter a valid date and time'),
                        company: Yup.string().test('match', 'Please select a company name or Not Listed to add one', value => value !== 'choose')
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
                                            Date Submitted
                                            </label>
                                        <DateTime
                                            input={true}
                                            inputProps={{ name: 'date' }}
                                            defaultValue={moment(values.date)}
                                            onChange={value => setFieldValue('date', moment(value).format('YYYY-MM-DDTHH:mm'))}
                                        />
                                    </ div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor='company'>
                                            Company
                                            </label>
                                        <Field component="select" name="company" className="form-control">
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
                                            {values.company !== 'NA' ? 'Submit' : 'Next: Employer Info'}
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