import { College } from "./college.mjs";
import { universityList } from "./utils/university.mjs";

export class Major extends College {

    constructor(collegeName, majorName) {
        super(collegeName);
        this.id = this.generateNewId()
        this.majorName = majorName;
    }

    generateNewId() {
        const ids = [];

        if (!universityList.length === 0) {
            return 0;
        }

        universityList.forEach(element => {
            element.Major.forEach(element => {
                ids.push(element.majorId);
            });
        });

        return Math.max(...ids) + 1;
    }

}

class MajorService {

    // get index by major name
    getIndex(majorName) {
        let index;

        universityList.forEach(element => {
            element.Major.forEach(element => index = element.majorName.indexOf(majorName));
        });

        return index
    }

}