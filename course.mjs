import { MajorServices } from "./major.mjs";
import { universityList } from "./utils/university.mjs";

export class Course {

    constructor(courseName, numberOfHours, type, prerequisites) {
        this.courseName = courseName;
        this.numberOfHours = numberOfHours;
        this.type = type;
        this.prerequisites = prerequisites;
    }

}

export class CourseServices extends MajorServices {

    generateCourseId(majorName) {
        const majorIndex = this.getMajorIndex(majorName);
        const collegeIndex = this.getCollegeIndexForMajor(majorName);

        if (universityList[collegeIndex].Major[majorIndex].course.length === 0) {
            return 0;
        } else {
            const ids = universityList[collegeIndex].Major[majorIndex].course.map((course) => course.courseId);

            return Math.max(...ids) + 1;
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

    // Implement Edit Course name method
    updateCourseName(majorName, oldName, newName) {
        const collegeIndex = this.getCollegeIndexForMajor(majorName);
        const majorIndex = this.getMajorIndex(majorName);
        const courseIndex = this.getCourseIndex(majorName, oldName);

        if (courseIndex != -1 && majorIndex != -1) {
            universityList[collegeIndex].Major[majorIndex].course[courseIndex].courseName = newName;
            console.log(`The course name has been changed from ${oldName} to ${newName}`);
        } else {
            console.log(`The edit process failed`);
        }
    }

    // Implement Edit Course hours method
    updateCourseHours(majorName, courseName, numberOfHours) {
        const collegeIndex = this.getCollegeIndexForMajor(majorName);
        const majorIndex = this.getMajorIndex(majorName);
        const courseIndex = this.getCourseIndex(majorName, courseName);

        if (courseIndex != -1 && majorIndex != -1) {
            universityList[collegeIndex].Major[majorIndex].course[courseIndex].numberOfHours = numberOfHours;
            console.log(`Course hours have been changed to ${numberOfHours}`);
        } else {
            console.log(`The edit process failed`);
        }
    }

    // Implement Edit Course type method
    updateCourseType(majorName, courseName, type) {
        const collegeIndex = this.getCollegeIndexForMajor(majorName);
        const majorIndex = this.getMajorIndex(majorName);
        const courseIndex = this.getCourseIndex(majorName, courseName);

        if (courseIndex != -1 && majorIndex != -1) {
            universityList[collegeIndex].Major[majorIndex].course[courseIndex].type = type;
            console.log(`Course type have been changed to ${type}`);
        } else {
            console.log(`The edit process failed`);
        }
    }

    // Implement Edit Course prerequisites method
    updateCoursePrerequisites(majorName, courseName, type) {
        const collegeIndex = this.getCollegeIndexForMajor(majorName);
        const majorIndex = this.getMajorIndex(majorName);
        const courseIndex = this.getCourseIndex(majorName, courseName);

        if (courseIndex != -1 && majorIndex != -1) {
            universityList[collegeIndex].Major[majorIndex].course[courseIndex].prerequisites = prerequisites;
            console.log(`Course prerequisites have been changed to ${prerequisites}`);
        } else {
            console.log(`The edit process failed`);
        }
    }

    // Implement delete Course method
    deleteCourse(majorName, courseName) {
        const collegeIndex = this.getCollegeIndexForMajor(majorName);
        const majorIndex = this.getMajorIndex(majorName);
        const courseIndex = this.getCourseIndex(majorName, courseName);

        if (courseIndex != -1 && majorIndex != -1) {
            universityList[collegeIndex].Major[majorIndex].course.splice(courseIndex, 1);
            console.log(`The delete process was successful!`)
        } else {
            console.log(`The delete process was not successful, There is no course in this name: ${courseName}!`)
        }

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
            console.log(`The course has been added successfully`);
        } else {
            console.log(`The addition process was not successful, There is no major in this name: ${majorName}!`);
        }
    }
}
