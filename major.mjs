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

    // Implement delete major method
    deleteMajor(majorName) {
        const index = this.getIndex(majorName);
        if (index != -1) {
            universityList.forEach(element => element.Major.splice(index, 1));
            console.log(`The delete process was successful!`)
        } else {
            console.log(`The delete process was not successful, There is no major in this name: ${majorName}!`)
        }
    }

    // get index by major name
    getIndex(majorName) {
        let index;

        universityList.forEach(element => {
            index = element.Major.findIndex(element => element.majorName == majorName);
        });

        return index
    }

}
