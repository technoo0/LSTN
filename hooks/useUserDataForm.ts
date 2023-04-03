import moment from 'moment';
import { useState } from 'react';



type UserDataForm = {
    name: String,
    birthday: Date,
    bio: String,
    image: String,
}

type HandelEvent = {
    name: any,
    value: any
}

const useUserDataForm = (UserDataForm: UserDataForm) => {
    const [values, setValues] = useState(UserDataForm)

    return {
        values,
        HandelDataChange: (e: HandelEvent) => {
            setValues({
                ...values,
                [e.name]: e.value

            })
        }
    }

}

function checkAge(birthday) {
    const currentDate = moment();
    const userBirthday = moment(birthday, 'YYYY-MM-DD');
    const userAge = currentDate.diff(userBirthday, 'years');

    if (userAge >= 18) {
        return true;
    } else {
        return false;
    }
}

const checkForm = (UserDataForm: UserDataForm) => {
    const Errors = []
    if (UserDataForm.name.length == 0) {
        Errors.push('name')
    }
    if (!checkAge(UserDataForm.birthday)) {
        Errors.push('birthday')
    }

    if (Errors.length == 0) {

        return {
            status: true,
            Errors
        }
    } else {
        return {
            status: false,
            Errors
        }
    }
}

export default useUserDataForm

export {
    checkForm
}