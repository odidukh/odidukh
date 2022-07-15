import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import emailjs from "@emailjs/browser";

const validationSchema = yup.object({
    name: yup.string().required("Required").min(2, "Too Short!"),
    email: yup.string().required("Required").email("Invalid email address"),
    message: yup.string().required("Required").min(2, "Too Short!"),
});

const ContactForm = () => {
    const sendEmail = (values) => {
        emailjs
            .send(
                "service_yaqzr2b",
                "template_a66oku9",
                values,
                "SfkIZ3MuSoAmiCanV"
            )
            .then(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            sendEmail(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="emailForm">
            <TextField
                id="name"
                name="name"
                label="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name ? true : false}
                helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
                id="email"
                name="email"
                label="Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.email && formik.errors.email ? true : false
                }
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                id="message"
                name="message"
                label="Share your thoughts"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.message && formik.errors.message
                        ? true
                        : false
                }
                helperText={formik.touched.message && formik.errors.message}
                multiline
                minRows={4}
            />
            <button className="submitButton" type="submit">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
