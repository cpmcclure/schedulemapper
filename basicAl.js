const cMcclure = {
    firstName: Chris,
    lastName: McClure,
    maxDays: 5,
    requestedHours: 35,
    minHours: 25,
    maxHours: 40,
    daysAvailable: ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'],
    reqDays: ['mon', 'tue', 'wed', 'thur', 'fri'],
    twoDayWeekend: true,
    shiftsAvailable: ['open', 'float', 'close'],
    reqShifts: ['float', 'close'],
    barTrained: true,
}

const dOtton = {
    firstName: Dustin,
    lastName: Otton,
    maxDays: 3,
    requestedHours: 21,
    minHours: 18,
    maxHours: 25,
    daysAvailable: ['sun', 'mon', 'tue', 'sat'],
    reqDays: ['sun', 'sat'],
    twoDayWeekend: true,
    shiftsAvailable: ['open', 'float', 'close'],
    reqShifts: ['float', 'close'],
    barTrained: true,
}

const jGrimes = {
    firstName: Jess,
    lastName: Grimes,
    maxDays: 3,
    requestedHours: 21,
    minHours: 18,
    maxHours: 25,
    daysAvailable: ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'],
    reqDays: ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'],
    twoDayWeekend: true,
    shiftsAvailable: ['open', 'float', 'close'],
    reqShifts: ['open', 'float', 'close'],
    barTrained: true,
}

const lPerry = {
    firstName: Lilliebrooke,
    lastName: Perry,
    maxDays: 2,
    requestedHours: 15,
    minHours: 6,
    maxHours: 15,
    daysAvailable: [mon, tue, wed],
    reqDays: [tue, wed],
    twoDayWeekend: true,
    shiftsAvailable: ['open', 'float', 'close'],
    reqShifts: ['open', 'float', 'close'],
    barTrained: false,
}

const cHaze = {
    firstName: Cass,
    lastName: Haze,
    maxDays: 5,
    requestedHours: 35,
    minHours: 25,
    maxHours: 40,
    daysAvailable: [sun, tue, wed, thu, fri, sat],
    reqDays: [tue, wed],
    twoDayWeekend: true,
    shiftsAvailable: ['open', 'float', 'close'],
    reqShifts: ['open', 'float', 'close'],
    barTrained: true,
}

const openBar = {
    startTime: "06:30",
    endTime: "14:00",
    length: 7.5,
}

const openReg = {
    startTime: "06:30",
    endTime: "14:00",
    length: 7.5,
}

const float = {
    startTime: "07:30",
    endTime: "14:00",
    length: 7.5,
}

const closeBar = {
    startTime: "09:30",
    endTime: "17:30",
    length: 7.5,
}

const closeReg = {
    startTime: "10:30",
    endTime: "18:00",
    length: 7.5,
}

const closeFloat = {
    startTime: "10:30",
    endTime: "18:00",
    length: 7.5,
}

const sunday = {
    day: 'sun',
    shifts: {
        openBar: {
            name: 'openBar',
            employee: '',
            startTime: "06:30",
            endTime: "14:00",
            altStartTime: "07:30",
            altEndTime: "15:00",
            length: 7.5,
        },
        openReg: {
            name: 'openReg',
            employee: '',
            startTime: "06:30",
            endTime: "14:00",
            altStartTime: "07:30",
            altEndTime: "15:00",
            length: 7.5,
        },
        float: {
            name: 'float',
            employee: '',
            startTime: "06:30",
            endTime: "14:00",
            altStartTime: "07:30",
            altEndTime: "15:00",
            length: 7.5,
        },
        closeBar: '',
        closeReg: '',
        closeFloat: '',
        }
}

const monday = {
    day: 'mon',
    shifts: {
        openBar: '',
        openReg: '',
        float: '',
        closeBar: '',
        closeReg: '',
        closeFloat: '',
        }
}

const tuesday = {
    day: 'tue',
    shifts: {
        openBar: '',
        openReg: '',
        float: '',
        closeBar: '',
        closeReg: '',
        closeFloat: '',
        }
}

const wednesday = {
    day: 'wed',
    shifts: {
        openBar: '',
        openReg: '',
        float: '',
        closeBar: '',
        closeReg: '',
        closeFloat: '',
        }
}

const thursday = {
    day: 'thu',
    shifts: {
        openBar: '',
        openReg: '',
        float: '',
        closeBar: '',
        closeReg: '',
        closeFloat: '',
        }
}

const friday = {
    day: 'fri',
    shifts: {
        openBar: '',
        openReg: '',
        float: '',
        closeBar: '',
        closeReg: '',
        closeFloat: '',
        }
}

const saturday = {
    day: 'sat',
    shifts: {
        openBar: '',
        openReg: '',
        float: '',
        closeBar: '',
        closeReg: '',
        closeFloat: '',
        }
}

const employees = [cHaze, cMcclure, dOtton, jGrimes, lPerry]
const shifts = [openBar, openReg, float, closeBar, closeFloat, closeReg]

let schedule = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]

for (let i = 0; i < schedule.length; i++) {
   let available = employees.filter(e => e.reqDays.includes(schedule[i].day))
   for (const employee in schedule) {
    // let employees.find(e => e.)
   }
}