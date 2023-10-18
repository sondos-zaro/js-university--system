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

    // Implement Edit Course method
    updateCourse(majorName, courseName, numberOfHours, type, prerequisites) {
        let collegeIndex;
        const majorIndex = this.getIndex(majorName);
        const courseIndex = this.getCourseIndex(majorName, courseName);

        for (let i = 0; i < universityList.length; i++) {
            universityList[i].Major.find((element) => element.majorName === majorName ?
                collegeIndex = i : collegeIndex = -1);
        }

        if (courseIndex != -1 && majorIndex != -1) {
            universityList[collegeIndex].Major[majorIndex].course[courseIndex].numberOfHours = numberOfHours;
            universityList[collegeIndex].Major[majorIndex].course[courseIndex].courseName = courseName;
            universityList[collegeIndex].Major[majorIndex].course[courseIndex].type = type;
            universityList[collegeIndex].Major[majorIndex].course[courseIndex].prerequisites = prerequisites;
            console.log(`The edit process was successful!`)
        } else {
            console.log(`The edit process was failed`)
        }
    }

    // Implement delete Course method
    deleteCourse(majorName, courseName) {
        let collegeIndex;
        const majorIndex = this.getIndex(majorName);
        const courseIndex = this.getCourseIndex(majorName, courseName);

        for (let i = 0; i < universityList.length; i++) {
            universityList[i].Major.find((element) => element.majorName === majorName ?
                collegeIndex = i : collegeIndex = -1);
        }

        if (courseIndex != -1 && majorIndex != -1) {
            universityList[collegeIndex].Major[majorIndex].course.splice(courseIndex, 1);
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
        const majorIndex = this.getIndex(majorName)
        let index;
        console.log(majorIndex)

        universityList.forEach(element => {
            index = element.Major[majorIndex].course.findIndex(element => element.courseName == courseName)
        });

        return index;
    }

}
