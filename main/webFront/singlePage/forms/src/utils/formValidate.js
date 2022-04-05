const validate = (data, type) => {

    const errors = {}

    // validate email
    if (!data.email) {
        errors.email = "Email required!";
    } else if (!/^\S+@\S+\.\S+$/i.test(data.email)) {
        errors.email = "Email is invalid!";
    } else {
        delete errors.email;
    }

    // validate password
    if (!data.password) {
        errors.password = "Password required!";
    } else if (data.password.trim().length < 6) {
        errors.password = "Password need to be 6 character or more";
    } else {
        delete errors.password;
    }


    if (type === "signUp") {

        // validate username
        if (!data.username) {
            errors.username = "Username required!";
        } else if (data.username.trim().length < 3) {
            errors.username = "Username need to be 3 character or more";
        } else {
            delete errors.username;
        }

        // Checks if the passwords match
        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm the password!";
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Password does not match!";
        } else {
            delete errors.confirmPassword;
        }

        // validate is accepted
        if (!data.isAccepted) {
            errors.isAccepted = "I accept your rules!";
        } else {
            delete errors.isAccepted;
        }
    }

    return errors;
}


export default validate;