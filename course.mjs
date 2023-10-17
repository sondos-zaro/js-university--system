import { Major, MajorService } from "./major.mjs";
import { universityList } from "./utils/university.mjs";



export class Course extends Major {

    constructor(collegeName, majorName,courseName, numberOfHours, type, prerequisites) {
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

        if (majorIndex !== -1 && collegeIndex !== -1){
            const ids = universityList[collegeIndex].Major[majorIndex].map((course) => course.courseId);
            
            return Math.max(...ids) + 1;
        }
        else {
            return -1;
        }

    }
} 

class CourseService extends MajorService {

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
}
