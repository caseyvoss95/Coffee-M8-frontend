import { React, useState } from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';


function NewOrder() {
    const [startDate, setStartDate] = useState(new Date());
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
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        Date:
                        <DatePicker name="scheduledTimeOfOrder" selected={startDate} value={startDate} onChange={(date) => setStartDate(date)} />
                        <h4>Invitee's Email Addresses:</h4>
                        <h3># of Invites</h3>

                        <FieldArray name="groupList">
                            {({ push, remove }) => (
                                <>
                                    <input type="text" onChange={handleChange} />
                                    <button onClick={() => {
                                        for (let i = 0; i < numOfInvites; i++) {
                                            push();
                                        }
                                    }} >Add</button>

                                    <button type="number" onClick={() => push()} disabled={isSubmitting}>+1</button>

                                    {values.groupList && (values.groupList.length) > 0 && values.groupList.map((list, index) => (
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
                                                <button type="button" onClick={() => remove(index)}>X</button>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </FieldArray>
                        <button type="submit" disabled={isSubmitting}>Create Event and Invite Attendees</button>
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

// {
//     "company": "Starbucks",
//         "friends": [
//             {
//                 "name": "Hello",
//                 "email": "Hello@gmail.com"
//             },
//             {
//                 "name": "hello",
//                 "email": "there@123.com"
//             },
//             {
//                 "name": "No",
//                 "email": "Stopit@now.com"
//             }
//         ]
// }
