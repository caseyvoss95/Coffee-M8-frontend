import { React, useState } from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function NewOrder(props) {
    const [numOfInvites, setInvites] = useState(0);

    let initialValues = {
        "company": "Starbucks",
        "scheduledTimeOfOrder": "",
        "groupInvite": [
        ]
    }

    const handleChange = (event) => {
        setInvites(event.target.value);
        console.log(numOfInvites);
    }

    function inviteFields() {
        return (
            <Formik initialValues={initialValues}
                validationSchema={Yup.object({
                    scheduledTimeOfOrder: Yup.date(),
                    groupInvite: Yup.array[Yup.string().email("Invalid email").required("Required")]
                })}
                onSubmit={values => {
                    console.log(values, props)
                    props.createOrder(values);
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    // }, 500);
                }}>
                {({ values }) => (
                    <Form>
                        <h4>Date:</h4>
                        <Field name="scheduledTimeOfOrder" type="Date" />
                        <h4>Invitee's Email Addresses:</h4>
                        <FieldArray name="groupInvite">
                            {({ push, remove }) => (
                                <>
                                    <input type="number" onChange={handleChange} />
                                    <button type="button" onClick={(event) => {
                                        event.preventDefault();
                                        for (let i = 1; i < numOfInvites; i++) {
                                            push();
                                        }
                                    }} >Add # of Invites</button>
                                    {values.groupInvite && (values.groupInvite.length) > 0 && values.groupInvite.map((list, index) => (
                                        <div className="row" key={index}>
                                            <div className="col">
                                                <Field name={`groupInvite[${index}]`}>
                                                    {({ field, form }) => (
                                                        <input {...field} type="text" placeholder="orderYouCoffee@coffeem8.com" />
                                                    )}
                                                </Field>
                                                <ErrorMessage name={`groupInvite[${index}]`}>
                                                    {msg => <div className="field=error"> {msg} </div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="col">
                                                <button type="button" onClick={() => remove(index)}>remove</button>
                                            </div>
                                        </div>
                                    ))}

                                </>
                            )}
                        </FieldArray>
                        <button type="submit">Create Event and Invite Attendees</button>
                    </Form>
                )}
            </Formik >
        )
    }

    return (

        <div>
            <h1>Create New Group Order</h1>
            {inviteFields()}
        </div >
    )
}
export default NewOrder;