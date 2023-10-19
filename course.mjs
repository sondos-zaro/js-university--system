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

    // Implement delete Course method
    deleteCourse(majorName, courseName) {
        const collegeIndex = this.getCollegeIndexForMajor(majorName);
        const majorIndex = this.getMajorIndex(majorName);
        const courseIndex = this.getCourseIndex(majorName, courseName);
        
        console.log(universityList[collegeIndex].Major[majorIndex].course)
        if (courseIndex != -1 && majorIndex != -1) {
            universityList[collegeIndex].Major[majorIndex].course.splice(courseIndex, 1);
            console.log(`The delete process was successful!`)
        } else {
            console.log(`The delete process was not successful, There is no course in this name: ${courseName}!`)
        }

        console.log(universityList[collegeIndex].Major[majorIndex].course)
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
            let courseIndex = universityList[collegeIndex].Major[majorIndex].course.map(course =>
                course.courseName.toLowerCase()).includes(courseName.toLowerCase());
            return courseIndex;
        } else {
        console.log(`The addition process was not successful, There is no major in this name: ${majorName}!`); 
        }
    }


}

const s = new CourseService();

s.deleteCourse("UC","data structue")