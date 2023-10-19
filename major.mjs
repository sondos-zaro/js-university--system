import { CollegeServices} from "./college.mjs";
import { universityList } from "./utils/university.mjs";

export class Major {

    constructor(majorName) {
        this.majorName = majorName;
    }
}

export class MajorService extends CollegeServices{
    
    // Implement add major method
    addMajor(collegeName, major) {
        const collegeIndex = this.getCollegeIndex(collegeName);

        if (collegeIndex !== -1) {
            major.majorId = this.generateMajorId(collegeIndex)
            universityList[collegeIndex].Major.push(major);
        } else
        console.log(`The addition process was not successful, There is no college in this name: ${collegeName}!`);
    }

    
    generateMajorId(collegeIndex) {
        const ids = [];

        if (universityList.length === 0) {
            return 0;
        }

        universityList[collegeIndex].Major.forEach(major => ids.push(major.majorId));
        return Math.max(...ids) + 1;
    }

    // Implement delete major method
    deleteMajor(collegeName, majorName) {
        const majorIndex = this.getMajorIndex(majorName);
        const collegeIndex = this.getCollegeIndex(collegeName);

        if (majorIndex !== -1 && collegeIndex !== -1) {
            universityList[collegeIndex].Major.splice(majorIndex, 1);
            console.log(`The delete process was successful!`);
        } else {
            console.log(`The delete process was not successful, There is no major in this name: ${majorIndex}!, or no college in this name ${collegeIndex}`);
        }
    }
    
    // Check if major exists
    isMajorExist(majorName) {
        return this.getMajorIndex(majorName) != -1 ? true : false;
    }


    // Edit major name method
    updateMajorName(oldName, newName) {
        const majorIndex = this.getMajorIndex(oldName);
        const collegeIndex = this.getCollegeIndex(collegeName);

        if (majorIndex !== -1 && collegeIndex !== -1) {
            universityList[collegeIndex].Major[majorIndex].majorName = newName;
            console.log(`The name has been successfully changed`);
        } else {
            console.log(`The Edit process was not successful, There is no major in this name: ${oldName}!`);
        }
    }

    // get index by major name
    getMajorIndex(majorName) {
        const collegeIndex = this.getCollegeIndexForMajor(majorName);
        let index = -1;

        if (collegeIndex !== -1) {
           index = universityList[collegeIndex].Major.findIndex(major => majorName.toLowerCase() === major.majorName.toLowerCase());
        }

        return index;
    }

    // Get the index of college for specific major
    getCollegeIndexForMajor(majorName) {
        let collegeIndex = universityList.findIndex( college => {
            return college.Major.map(major => major.majorName).includes(majorName);
            });

        return collegeIndex;
    }

    // Get the name of college for specific major
    getCollegeNameForMajor(majorName) {
        let collegeIndex = universityList.findIndex( (college) => {
            return college.Major.map(major => major.majorName.toLowerCase()).includes(majorName.toLowerCase());
            });

        return universityList[collegeIndex].collegeName; 
    }    
}