class Employee {
    constructor(firstName, lastName, availability, barTrained) {
        this.firstName = firstName
        this.lastName = lastName
        this.availability = availability
        this.barTrained = barTrained
    }
}

class Shift {
    constructor(shiftName, shiftStart, shiftEnd, bar) {
        this.shiftName = shiftName
        this.shiftStart = shiftStart
        this.shiftEnd = shiftEnd
        this.bar = bar
        this.available = this.available
        this.requested = requested
    }
}

class WorkDay {
    constructor(date, shifts) {
        this.date = date
        this.day = date.getDay()
        this.shifts = shifts
        this.requested = []
        this.available = []
    }
}