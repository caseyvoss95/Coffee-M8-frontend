import { React, useState } from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';


function NewOrder(props) {
    // ensure these fields will be submitted; initial values below
    let initialValues = {
        "company": "Starbucks",
        "scheduledTimeOfOrder": "",
        "groupInvite": []
    }
    // user selects # of invites
    const [numOfInvites, setInvites] = useState(0);
    const handleChange = (event) => {
        setInvites(event.target.value);
        console.log(numOfInvites);
    }

    const history = useHistory();

    // populate invite fields
    function inviteFields() {
        return (

            <Formik initialValues={initialValues}
                // field validation
                validationSchema={Yup.object({
                    scheduledTimeOfOrder: Yup.date(),
                    groupInvite: Yup.array[Yup.string().email("Invalid email").required("Required")]
                })}
                onSubmit={values => {
                    console.log(values, props)
                    props.createOrder(values);
                    history.push('/order');
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    // }, 500);
                }}>
                {({ values }) => (
                    <Form>
                        Event Date: <Field name="scheduledTimeOfOrder" type="Date" className="dateCalender" />
                        <div className="invitations">Invitations:</div>

                        {/* Initial Formik Field Array, w/ push and remove functionality*/}
                        <FieldArray name="groupInvite">
                            {({ push, remove }) => (
                                <>
                                    <input className="inviteField" type="number" onChange={handleChange} placeholder="0" />
                                    <button className="inviteFieldBtn" type="button" onClick={(event) => {
                                        event.preventDefault();
                                        for (let i = 0; i < numOfInvites; i++) {
                                            push();
                                        }
                                    }} >Add Guestlist</button>

                                    {/* Create rows based on input */}
                                    {values.groupInvite && (values.groupInvite.length) > 0 && values.groupInvite.map((list, index) => (
                                        <div className="row" key={index}>
                                            <div className="col">
                                                <Field name={`groupInvite[${index}]`}>
                                                    {({ field }) => (
                                                        <input {...field} type="text" placeholder="orderYouCoffee@coffeem8.com" />
                                                    )}
                                                </Field>
                                                {/* Error Message for email field */}
                                                <ErrorMessage name={`groupInvite[${index}]`}>
                                                    {msg => <div className="field=error"> {msg} </div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="col">
                                                <button type="button" className="removeBtn" onClick={() => remove(index)}>-</button>
                                            </div>
                                        </div>
                                    ))}

                                </>
                            )}
                        </FieldArray>
                        <button type="submit" className='createEventBtn'>Create Event and Invite Attendees</button>
                    </Form>
                )
                }
            </Formik >
        )
    }

    return (

        <div class="container">
            <h1>Create New Group Order</h1>
            {inviteFields()}
        </div >
    )
}
export default NewOrder;