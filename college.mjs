import { universityList } from "./utils/university.mjs";

export class College {

    constructor(collegeName) {
        this.collegeName = collegeName;
    }
}

export class CollegeServices {

    // Add new college to the array
    addCollege(college) {
        const ifExist = this.isCollegeExist(college.collegeName);
        
        if (ifExist) {
            console.log("this college is already exist");
        } else {
            college.collegeId = this.generateCollegeId();
            universityList.push(college);
        }
    }

    // Generate new Id for college 
    generateCollegeId() {
        if (universityList.length === 0) {
            return universityList.length;
        } else {
            const ids = universityList.map((college) => college.collegeId);

            return Math.max(...ids) + 1;
        }
    } 

    // Update the name of specific college
    updateCollege(oldName, newName) {
        const collegeIndex = this.getCollegeIndex(oldName);

        if (collegeIndex === -1) {
            console.log("This college doesn't exit");
        } else {
            universityList[collegeIndex].collegeName = newName;
        }
    }
    
    // Check if a specific exist
    isCollegeExist(collegeName) {
        if (typeof collegeName !== "string") {
            return;
        }
        let ifExist = universityList.find(college => college.collegeName.toLowerCase() === collegeName.toLowerCase());
        
        return ifExist !== undefined ? true : false;
    }

    // Get an index for a specific college
    getCollegeIndex(collegeName) {
        if (typeof collegeName !== "string") {
            return;
        }

        return universityList.findIndex(college => collegeName.toLocaleLowerCase() === college.collegeName.toLocaleLowerCase());
    }

    // Delete college
    deleteCollege(collegeName) {
        const collegeIndex = this.getCollegeIndex(collegeName);

        if(collegeIndex === -1) {
            console.log("This college doesn't exit");
        } else {
            universityList.splice(collegeIndex, 1);
        }
    }
}
