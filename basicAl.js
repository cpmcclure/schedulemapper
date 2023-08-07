// Notes: Make class for shifts, days and employees. Use shifts object in creation of day objects

const cMcclure = {
    firstName: 'Chris',
    lastName: 'McClure',
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
    firstName: 'Dustin',
    lastName: 'Otton',
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
    firstName: 'Jess',
    lastName: 'Grimes',
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
    firstName: 'Lilliebrooke',
    lastName: 'Perry',
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
    firstName: 'Cass',
    lastName: 'Haze',
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
    startTime: '06:30',
    endTime: '14:00',
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
            available: [],
            bar: true,
            working: '',
        },
        openReg: {
            available: [],
            bar: false,
            working: '',
        },
        float: {
            available: [],
            bar: false,
            working: '',
        },
        closeBar: {
            available: [],
            bar: true,
            working: '',
        },
        closeReg: {
            available: [],
            bar: false,
            working: '',
        },
        closeFloat: {
            available: [],
            bar: false,
            working: '',
        }
    }
}

const monday = {
    day: 'mon',
    shifts: {
        openBar: {
            available: [],
            bar: true,
            working: '',
        },
        openReg: {
            available: [],
            bar: false,
            working: '',
        },
        float: {
            available: [],
            bar: false,
            working: '',
        },
        closeBar: {
            available: [],
            bar: true,
            working: '',
        },
        closeReg: {
            available: [],
            bar: false,
            working: '',
        },
        closeFloat: {
            available: [],
            bar: false,
            working: '',
        }
    }
}

const tuesday = {
    day: 'tue',
    shifts: {
        openBar: {
            available: [],
            bar: true,
            working: '',
        },
        openReg: {
            available: [],
            bar: false,
            working: '',
        },
        float: {
            available: [],
            bar: false,
            working: '',
        },
        closeBar: {
            available: [],
            bar: true,
            working: '',
        },
        closeReg: {
            available: [],
            bar: false,
            working: '',
        },
        closeFloat: {
            available: [],
            bar: false,
            working: '',
        }
    }
}

const wednesday = {
    day: 'wed',
    shifts: {
        openBar: {
            available: [],
            bar: true,
            working: '',
        },
        openReg: {
            available: [],
            bar: false,
            working: '',
        },
        float: {
            available: [],
            bar: false,
            working: '',
        },
        closeBar: {
            available: [],
            bar: true,
            working: '',
        },
        closeReg: {
            available: [],
            bar: false,
            working: '',
        },
        closeFloat: {
            available: [],
            bar: false,
            working: '',
        }
    }
}

const thursday = {
    day: 'thu',
    shifts: {
        openBar: {
            available: [],
            bar: true,
            working: '',
        },
        openReg: {
            available: [],
            bar: false,
            working: '',
        },
        float: {
            available: [],
            bar: false,
            working: '',
        },
        closeBar: {
            available: [],
            bar: true,
            working: '',
        },
        closeReg: {
            available: [],
            bar: false,
            working: '',
        },
        closeFloat: {
            available: [],
            bar: false,
            working: '',
        }
    }
}

const friday = {
    day: 'fri',
    shifts: {
        openBar: {
            available: [],
            bar: true,
            working: '',
        },
        openReg: {
            available: [],
            bar: false,
            working: '',
        },
        float: {
            available: [],
            bar: false,
            working: '',
        },
        closeBar: {
            available: [],
            bar: true,
            working: '',
        },
        closeReg: {
            available: [],
            bar: false,
            working: '',
        },
        closeFloat: {
            available: [],
            bar: false,
            working: '',
        }
    }
}

const saturday = {
    day: 'sat',
    shifts: {
        openBar: {
            name: 'openBar',
            startTime: '06:30',
            endTime: '14:00',
            available: [],
            bar: true,
            working: '',
        },
        openReg: {
            name: 'openReg',
            startTime: '06:30',
            endTime: '14:00',
            available: [],
            bar: false,
            working: '',
        },
        float: {
            name: 'float',
            startTime: '07:30',
            endTime: '16:00',
            available: [],
            bar: false,
            working: '',
        },
        closeBar: {
            name: 'closeBar',
            startTime: '09:30',
            endTime: '18:00',
            available: [],
            bar: true,
            working: '',
        },
        closeReg: {
            name: 'closeReg',
            startTime: '010:30',
            endTime: '18:00',
            available: [],
            bar: false,
            working: '',
        },
        closeFloat: {
            name: 'closeFloat',
            startTime: '10:30',
            endTime: '18:00',
            available: [],
            bar: false,
            working: '',
        }
    }
}

const employees = [cHaze, cMcclure, dOtton, jGrimes, lPerry]
const shifts = [openBar, openReg, float, closeBar, closeFloat, closeReg]

let schedule = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]

function findShifts(employee, day) {
    let shifts = Object.keys(day.shifts)
    shifts.forEach(shift => {
        if(employee.reqShifts.includes(day.shifts[shift].name)) day.shifts[shift].available.push(employee.name) 
        })
    }

for (let i = 0; i < schedule.length; i++) {
   let available = employees.filter(e => e.reqDays.includes(schedule[i].day))
   for (const employee in available) {
    findShifts(employee, schedule[i])
   }
}