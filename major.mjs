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

    // Implement add major method
    addMajor(collegeName, obj) {
        for (let i = 0; i < universityList.length; i++) {
            if (universityList[i].collegeName == collegeName) {
                universityList[i].Major.push(obj)
            }
            else
                console.log(`The addition process was not successful, There is no college in this name: ${collegeName}!`)
        }
    }

}