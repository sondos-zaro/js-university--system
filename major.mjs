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

        if (universityList.length === 0) {
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

export class MajorService {
    
    // Implement add major method
    addMajor(collegeName, major) {
        let collegeIndex = this.getCollegeIndex(collegeName);
        if (collegeIndex !== -1) {
            universityList[collegeIndex].Major.push(major)
        } else
        console.log(`The addition process was not successful, There is no college in this name: ${collegeName}!`);
    }

    // Implement delete major method
    deleteMajor(majorName) {
        const index = this.getIndex(majorName);
        if (index != -1) {
            universityList.forEach(element => element.Major.splice(index, 1));
            console.log(`The delete process was successful!`)
        } else {
            console.log(`The delete process was not successful, There is no major in this name: ${majorName}!`)
            // Check if major exists
        }
    }

    isMajorExist(majorName) {
        return this.getIndex(majorName) != -1 ? true : false;
    }


    // Edit major name method
    updateMajorName(oldName, newName) {
        const index = this.getIndex(oldName);

        if (index != -1) {
            universityList.forEach(element => element.Major[index].majorName = newName);
            console.log(`The name has been successfully changed`)
        } else {
            console.log(`The Edit process was not successful, There is no major in this name: ${oldName}!`)
        }
    }

    // get index by major name
    getIndex(majorName) {
        let index;

        universityList.forEach(element => {
            index = element.Major.findIndex(element => element.majorName == majorName);
        });

        return index;
    }

    getCollegeIndex(collegeName) {
        return universityList.findIndex(college => collegeName === college.collegeName)
    }

    getCollegeIndexForMajor(majorName) {
        let collegeIndex = universityList.findIndex( (college) => {
            return college.Major.map(major => major.majorName.toLowerCase()).includes(majorName.toLowerCase());
            });

        return collegeIndex; 
    }
}
