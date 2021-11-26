const HEADERS = ["Creator", "Name", "Location", "Start Date", "End Date", "Submitted at", "Status", " "];
const DUMMY_EVENTS = [
    {
        name: "First Event",
        location: "Bucharest",
        startDate: "2021-11-20",
        endDate: "2021-12-23",
        submittedAt: "2021-11-23 14:25:56"
    },
    {
        name: "Second Event",
        location: "Cluj",
        startDate: "2021-11-23",
        endDate: "2021-12-26",
        submittedAt: "2021-11-22 11:25:56"
    },
    {
        name: "Third Event",
        location: "Iasi",
        startDate: "2021-11-23",
        endDate: "2021-12-26",
        submittedAt: "2021-11-21 21:25:56"
    }
]

const sortDates = (events) => {
    events?.sort((a, b) => {
        return new Date(b.submittedAt) - new Date(a.submittedAt);
    });
};

const validateFields = (data, setErrors) => {
    let error = false
    if (data.password && data.password.length < 6) {
        error = true
        console.log('Password must have a minimum length of 6 characters.')

        setErrors(state => ({...state, short: 'Password must contain at least 6 characters'}))
        console.log('short set')
    }

    if (data.confirmPassword && data.confirmPassword !== data.password) {
        error = true
        setErrors(state => ({...state, mismatch: "Passwords don't match"}))
    }
    return error
}

const UtilService = {
    HEADERS,
    DUMMY_EVENTS,
    sortDates,
    validateFields
}

export default UtilService;