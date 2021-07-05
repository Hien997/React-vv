import * as Yup from 'yup';

export const validationSchema =
    Yup.object().shape({
        red_time: Yup.string()
            .matches(
                /^[0-9]+$/,
                'Red time must contain: numbers\n'
            )
            .required('Red time is required'),
        delay_time: Yup.string()
            .matches(
                /^[0-9]+$/,
                'Delay time must contain: numbers\n'
            )
            .required('Delay time is required'),
        finish_time: Yup.string()
            .matches(
                /^[0-9]+$/,
                'Finish time must contain: numbers\n'
            )
            .required('Finish time is required'),
        yellow_time: Yup.string()
            .matches(
                /^[0-9]+$/,
                'Yellow time must contain: numbers\n'
            )
            .required('Yellow time is required'),
    });