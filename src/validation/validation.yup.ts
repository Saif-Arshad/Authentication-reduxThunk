import * as yup from 'yup'


export const signUpValidation = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("This field is required"),
    name:yup.string().required("This field is required"),
    password:yup.string().required("This field is required").min(5),
    phone:yup.string().required("This field is required"),
})

export const logInValidation = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("This field is required"),
    password:yup.string().required("This field is required").min(5),
})