const HEADERS = [" ", "Name", "Location", "Start Date", "End Date", "Submitted at", "Status"];
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
    events.sort((a, b) => {
        return new Date(b.newEvent.submittedAt) - new Date(a.newEvent.submittedAt);
    });
};

const UtilService = {
    HEADERS,
    DUMMY_EVENTS,
    sortDates
}

export default UtilService;