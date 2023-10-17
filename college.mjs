import { universityList } from "./utils/university.mjs";

export class College {

    constructor(collegeName) {
        this.collegeId = this.generateNewId();
        this.collegeName = collegeName;
  }

    generateNewId() {
        if (universityList.length === 0) {
            return universityList.length;
        } else {
            let ids = universityList.map((college) => college.collegeId);

            return Math.max(...ids) + 1;
        }
    } 
}

class CollegeServices {
    addCollege(college) {
        universityList.push(college);
    }

    updateCollege(collegeName, newCollege) {
        let collegeIndex = universityList.findIndex(college => collegeName === college.collegeName);

        if (collegeIndex === -1) {
            universityList[collegeIndex] = newCollege;
        }
    }

    ifExist(collegeName) {
        if (typeof collegeName !== "string") {
            return;
        }

        return universityList.map(college => college.collegeName.toLowerCase()).includes(collegeName.toLowerCase());
  }
}