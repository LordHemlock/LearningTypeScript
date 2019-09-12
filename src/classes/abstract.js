class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Department name: ${this.name}`);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
//# sourceMappingURL=abstract.js.map