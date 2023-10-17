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
        this.courses = [];
    }

    generateCourseId() {
        if (universityList.length === 0) {
            return universityList.length;
        } else {
            const major = new MajorService();
            const majorIndex = major.getIndex(this.majorName);
            const collegeIndex = 
            const ids = universityList.map((college) => college.collegeId);

            // return Math.max(...ids) + 1;
        }
    } 
}


let i = new Course("AU College","ac","data s",3,"mas","oob")
//console.log(i)