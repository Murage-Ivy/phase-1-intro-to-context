// Your code here
const createEmployeeRecord = (employeeInfo) => {
        const employeeRecord = {
            firstName: employeeInfo[0],
            familyName: employeeInfo[1],
            title: employeeInfo[2],
            payPerHour: employeeInfo[3],
            timeInEvents: [],
            timeOutEvents: []
        }
        return employeeRecord


    },
    createEmployeeRecords = (employees) => {
        const employeesTable = []
        for (const employee of employees) {
            const employeeObject = createEmployeeRecord(employee);
            employeesTable.push(employeeObject)
        }

        return employeesTable

    },

    createTimeInEvent = (bpRecord, dateStamp) => {
        let [date, hour] = dateStamp.split(' ');
        bpRecord.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour),
            date: date
        })
        return bpRecord;
    },
    createTimeOutEvent = (bpRecord, dateStamp) => {
        let [date, hour] = dateStamp.split(' ');
        bpRecord.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour),
            date: date
        })
        return bpRecord;
    },
    hoursWorkedOnDate = (cRecord, dateStamp) => {
        // for(const timeRecords of cRecord.timeInEvents) {
        //     if(dateStamp === timeRecords.date){
        //         const elapsedTime = (timeRecords.hour - timeRecords.hour) / 100;
        //     return elapsedTime;
        //     }
        // }
        if (dateStamp === cRecord.timeInEvents[0].date) {
            const elapsedTime = (cRecord.timeOutEvents[0].hour - cRecord.timeInEvents[0].hour) / 100;
            return elapsedTime;
        }
    },
    wagesEarnedOnDate = (bpRecord, dateStamp) => {
        const elapsedTime = hoursWorkedOnDate(bpRecord, dateStamp)
        const amountOwed = elapsedTime * parseInt(bpRecord.payPerHour);
        return amountOwed;
    },
    allWagesFor = (bpRecord) => {

        const allWages = bpRecord.timeOutEvents.reduce((accumulate, timeRecords) => {
            wagesEarnedOnDate(bpRecord, timeRecords.date) + accumulate;
        }, 0)
        return allWages


    },
    calculatePayroll = () => {

    }

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// Earns 324
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
// Earns 54
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")

console.log(allWagesFor(cRecord))