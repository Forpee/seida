import { Formik, Field, Form } from "formik";
import swal from "sweetalert";
import Router from "next/router";
import axios from "axios";
const { BACKEND_URL } = process.env

function ValidateEmail(email) {
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    String(email).toLowerCase()
  );
  if (email.match(emailformat)) {
    return true;
  }

  return false;
}

export default function Contact() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
      
          if (
            values.firstName === "" ||
            values.email === "" ||
            values.lastName === "" ||
            values.message === ""
          ) {
            swal("Please fill in all required information");
          } else if (ValidateEmail(values.email)) {
            swal("Please fill in a valid email");
          } else {


            const  data  = axios.post('http://localhost:1337/contact' , {
            name: values.firstName,
      
            email: values.email,
      
            surname: values.lastName,
      
            message: values.message,
          });




            swal("Thank You! Your message has been recieved")
        .then((value) =>{
          Router.push('/');
        })}
          
        }}
      >
        <Form>
          <div>
            <Field
              className="border-white bg-gray-450 border-b outline-none w-full"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <Field
              className="border-white bg-gray-450 border-b outline-none w-full my-8"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>

          <div>
            {" "}
            <Field
              className="border-white bg-gray-450 border-b outline-none w-full"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />
          </div>
          <div>
            {" "}
            <Field
              className="border-white bg-gray-450 border-b outline-none w-full my-8"
              id="message"
              name="message"
              placeholder="Message"
              as="textarea"
            />
          </div>
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}