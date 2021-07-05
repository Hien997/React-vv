const getErrorsFromValidationError = (validationError: { inner: any[] }) => {
    const FIRST_ERROR = 0;
    return validationError.inner.reduce((errors, error) => {
        return {
            ...errors,
            [error.path]: error.errors[FIRST_ERROR],
        };
    }, {});
};
export const validate = (getValidationSchema: any) => {
    return (values: any) => {
        const schema = getValidationSchema(values);
        try {
            schema.validateSync(values, { abortEarly: false });
            return {};
        } catch (error) {
            return getErrorsFromValidationError(error);
        }
    };
};

