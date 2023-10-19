import { MajorService } from "./major.mjs";
import { universityList } from "./utils/university.mjs";

export class Course {

    constructor(courseName, numberOfHours, type, prerequisites) {
        this.courseName = courseName;
        this.numberOfHours = numberOfHours;
        this.type = type;
        this.prerequisites = prerequisites;
    }

}

class CourseService extends MajorService {

    generateCourseId(majorName) {
        const majorIndex = this.getMajorIndex(majorName);

        if (majorIndex !== -1) {
            const collegeIndex = this.getCollegeIndexForMajor(majorName);
            const ids = universityList[collegeIndex].Major[majorIndex].course.map((course) => course.courseId);

            return Math.max(...ids) + 1;
        }
        else {
            return -1;
        }
    }

    // get index by major name
    getCourseIndex(majorName, courseName) {
        const majorIndex = this.getMajorIndex(majorName);
        let index = -1;

        if (majorIndex !== -1) {
            const collegeIndex = this.getCollegeIndexForMajor(majorName);
            index = universityList[collegeIndex].Major[majorIndex].course.findIndex(course => courseName.toLowerCase() === course.courseName.toLowerCase());
        }

        return index;
    }

    isCourseExist(majorName, courseName) {
        let majorIndex = this.getMajorIndex(majorName);
        let collegeIndex = this.getCollegeIndexForMajor(majorName);
        let ifExist;
        if (majorIndex !== -1) {
            ifExist = universityList[collegeIndex].Major[majorIndex].course.find(course => course.courseName.toLowerCase() === courseName.toLowerCase()); 
        } else {
            console.log(`There is no major in this name: ${majorName}!`); 
            ifExist = undefined;
        }
        
        return ifExist !== undefined ? true : false;
    }
   
    addCourse(majorName, course) {
        const majorIndex = this.getMajorIndex(majorName);

        if (majorIndex !== -1) {
            const collegeIndex = this.getCollegeIndexForMajor(majorName);
            course.courseId = this.generateCourseId(majorName);
            universityList[collegeIndex].Major[majorIndex].course.push(course);
        } else {
        console.log(`The addition process was not successful, There is no major in this name: ${majorName}!`); 
        }
    }
}
