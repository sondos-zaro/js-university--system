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
            const ids = universityList.map((college) => college.collegeId);

            return Math.max(...ids) + 1;
        }
    } 
}

class CollegeServices {
    
    addCollege(college) {
        const ifExist = this.ifExist(college.collegeName);
        
        if (ifExist) {
            console.log("this college is already exist");
        } else {
            universityList.push(college);
        }
    }

    updateCollege(oldName, newName) {
        const collegeIndex = this.getCollegeIndex(oldName);

        if (collegeIndex === -1) {
            console.log("This college doesn't exit");
        } else {
            universityList[collegeIndex].collegeName = newName;
        }
    }

    ifExist(collegeName) {
        if (typeof collegeName !== "string") {
            return;
        }

        return universityList.map(college => college.collegeName.toLowerCase()).includes(collegeName.toLowerCase());
    }

    getCollegeIndex(collegeName) {
        if (typeof collegeName !== "string") {
            return;
        }

        return universityList.findIndex(college => collegeName === college.collegeName);
    }

    deleteCollege(collegeName) {
        const collegeIndex = this.getCollegeIndex(collegeName);

        if(collegeIndex === -1) {
            console.log("This college doesn't exit");
        } else {
            universityList.splice(collegeIndex, 1);
        }
    }
}
