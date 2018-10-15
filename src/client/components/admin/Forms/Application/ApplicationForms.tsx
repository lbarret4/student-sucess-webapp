import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FormikErrors, FormikActions, FormikProps, FormikValues, ErrorMessage, } from 'formik';
import Alert, { MessageTypes } from '../../../shared/Alert';
import * as Yup from "yup";
import * as DateTime from "react-datetime";
import { DisplayFormikState } from '../NetworkForms';
import * as moment from 'moment';

interface FormValues {
    date: DateTime.DatetimepickerProps["value"];
    company: string;

}

export class ApplicationForms extends React.Component<RouteComponentProps, any>{
    constructor(props: any) {
        super(props);
    }
    render() {

        const initialValues: FormValues = {
            date: moment(),
            company: 'choose',
        };
        let companies = ['Choose a Company', 'Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F', 'Not Listed'];
        let options = companies.map((company, index) => {
            let name = index === 0 && index !== companies.length - 1 ? initialValues.company : `company${index}`;
            name = index === companies.length - 1 ? 'NA' : name;
            return (
                <option value={name} key={index}>{company}</option>

            );
        })

        return (
            <div className="card-body">
                <h5 className="card-title">Fill in info for submitted job application </h5>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: FormValues, { resetForm, setSubmitting }) =>
                    setTimeout(() => {                                         
                        alert(JSON.stringify(values, null, 2));                        
                        setSubmitting(false);            
                        if(values.company === 'NA'){
                            this.props.history.push(`${this.props.match.path}/EmployerInfo/1`)
                        }else{
                            resetForm();
                        }                      
                    }, 2000)}
                    validationSchema={Yup.object().shape({
                        date:Yup.date().typeError('Please enter a valid date and time'),
                        company:Yup.string().test('match','Please select a company name or NA to add one',value =>value !== 'choose')
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
                                            defaultValue={values.date}
                                            onChange={value => setFieldValue('date', value)}
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
                                            {values.company !== 'NA'? 'Submit':'Next: Employer Info'}
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