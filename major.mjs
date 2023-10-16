import { College } from "./college.mjs";

export class Major extends College {

    constructor(collegeId, collegeName, majorName, majorId) {
        super(collegeId);
        super(collegeName);
        this.majorId = majorId;
        this.majorName = majorName;
        this.majors = [];
    }

} 