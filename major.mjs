import { College } from "./college.mjs";

export class Major extends College {

    constructor(collegeName, majorName, majorId) {
        super(collegeName);
        this.majorId = majorId;
        this.majorName = majorName;
        this.majors = [];
    }

} 