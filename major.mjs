import { College } from "./college.mjs";

export class Major extends College {

    constructor(collegeName, majorName, majorId) {
        super(collegeName);
        this.majorId = majorId;
        this.majorName = majorName;
        this.majors = [];
    }

    // Implement add major method
    addMajor(majorName) {
        this.majors.push(majorName)
    }

}


