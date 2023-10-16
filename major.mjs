import { College } from "./college.mjs";

export class Major extends College {

    constructor(collegeName, majorName) {
        super(collegeName);
        this.majorName = majorName;
    }

}

class MajorService {

    // Implement add major method
    addMajor(majorName) {
        this.majors.push(majorName)
    }

}


