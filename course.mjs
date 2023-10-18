import { Major, MajorService } from "./major.mjs";
import { universityList } from "./utils/university.mjs";



export class Course extends Major {

    constructor(collegeName, majorName, courseName, numberOfHours, type, prerequisites) {
        super(collegeName, majorName);
        this.courseId = this.generateCourseId();
        this.courseName = courseName;
        this.numberOfHours = numberOfHours;
        this.type = type;
        this.prerequisites = prerequisites;
    }

    generateCourseId() {
        const major = new MajorService();
        const majorIndex = major.getIndex(this.majorName);
        const collegeIndex = major.getCollegeIndex(this.collegeName)

        if (majorIndex !== -1 && collegeIndex !== -1) {
            const ids = universityList[collegeIndex].Major[majorIndex].map((course) => course.courseId);

            return Math.max(...ids) + 1;
        }
        else {
            return -1;
        }

    }
}

class CourseService extends MajorService {

    // Implement delete major method
    deleteMajor(majorName, courseName) {
        const majorIndex = 1
        const courseIndex = this.getCourseIndex(courseName);
        console.log(courseIndex);
        if (courseIndex != -1) {
            universityList[0].Major[0].course.findIndex(element => element.courseName == courseName)
            universityList.forEach(element => element.Major[majorIndex].course.splice(courseIndex, 1));
            console.log(`The delete process was successful!`)
        } else {
            console.log(`The delete process was not successful, There is no course in this name: ${courseName}!`)
        }
    }

    isCourseExist(majorName, courseName) {
        let majorIndex = this.getIndex(majorName);
        let collegeIndex = this.getCollegeIndexForMajor(majorName)

        if (majorIndex !== -1) {
            let courseIndex = universityList[collegeIndex].Major[majorIndex].course.map(course =>
                course.courseName.toLowerCase()).includes(courseName.toLowerCase());
            return courseIndex;
        } else {
            console.log("this major doesn't exist")
        }
    }

    // get index by major name
    getCourseIndex(majorName, courseName) {
        const majorIndex = this.getIndex("AU")
        let index;

        universityList.forEach(element => {
            index = element.Major[majorName].course.findIndex(element => element.courseName == courseName)
        });

        return index;
    }

}


