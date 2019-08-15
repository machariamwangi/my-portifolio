import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as Yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name*"
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your email*"
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone number*"
      }
    ],
    [
      {
        name: "message",
        elementName: "input",
        type: "text",
        placeholder: "Your message*"
      }
    ]
  ]
};

class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form
                name="sentMessage"
                novalidate="novalidate"
                onSubmit={this.props.handleSubmit}
              >
                <div className="row">
                  {fields.sections.map((section, sectionIndex) => {
                    console.log(
                      "rendering-section",
                      sectionIndex,
                      "with",
                      section
                    );
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => {
                          return (
                            <Field
                              {...field}
                              key={i}
                              value={this.props.values[field.name]}
                              name={field.name}
                              onChange={this.props.handleChange}
                              onBlur={this.props.handleBlur}
                              touched={this.props.touched[field.name]}
                              errors={this.props.errors[field.name]}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                  <div className="clearfix" />
                  <div className="col-lg-12 text-center">
                    <div id="success" />
                    <button
                      //id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "name is too short")
      .required("you must give is your name"),
    email: Yup.string()
      .email("you need to give us a valid email")
      .required("we need your email"),
    phone: Yup.string()
      .min(10, "please provide your 10 digit no")
      .max(15, "phone no too long")
      .required("we need your contact for communication "),
    message: Yup.string()
      .min(500, "provide a detailed information")
      .required("message is required")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("VALUES", values);
    alert("you have submitted the form", JSON.stringify(values));
  }
})(Contact);
