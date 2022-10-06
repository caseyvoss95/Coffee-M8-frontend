import { React, useState } from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function NewOrder() {
    const [numOfInvites, setInvites] = useState(0);

    let initialValues = {
        "company": "Starbucks",
        "scheduledTimeOfOrder": "",
        "groupList": [
            {
                email: "",
                isHost: false,
                orderIds: ""
            }
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
                    groupList: Yup.array().of(
                        Yup.object({
                            email: Yup.string().email("Invalid email").required("Required"),
                        })
                    ),
                })}
                onSubmit={values => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                }}>
                {({ values, isSubmitting }) => (
                    <Form>
                        <h4>Date:</h4>
                        <Field name="scheduledTimeOfOrder" type="Date" />
                        <h4>Invitee's Email Addresses:</h4>


                        <FieldArray name="groupList">
                            {({ push, remove }) => (
                                <>
                                    <input type="number" onChange={handleChange} />
                                    <button type="button" onClick={() => {
                                        for (let i = 1; i < numOfInvites; i++) {
                                            push();
                                        }
                                    }} >Add # of Invites</button>
                                    {values.groupList && (values.groupList.length) > 1 && values.groupList.map((list, index) => (
                                        <div className="row" key={index}>
                                            <div className="col">
                                                <Field name={`groupList[${index}].email`}>
                                                    {({ field, form }) => (
                                                        <input {...field} type="text" placeholder="orderYouCoffee@coffeem8.com" />
                                                    )}
                                                </Field>
                                                <ErrorMessage name={`groupList[${index}].email`}>
                                                    {msg => <div className="field=error"> {msg} </div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="col">
                                                <button type="button" onClick={() => remove(index)}>remove</button>
                                            </div>

                                        </div>
                                    ))}
                                    {/* <button type="number" onClick={() => push()} disabled={isSubmitting}>Add additional attendees</button> */}
                                </>
                            )}
                        </FieldArray>
                        <button type="submit">Create Event and Invite Attendees</button>
                    </Form>
                )
                }
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