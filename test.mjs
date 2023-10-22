import { Course, CourseServices } from "./course.mjs";
import { universityList } from "./utils/university.mjs";
import { Major, MajorServices } from "./major.mjs";
import { College, CollegeServices } from "./college.mjs";

// Test Course Service 
//create instance form CourseService class
const courseService = new CourseServices();

//create instance form Course class
const geometricCourse = new Course("Geometric Drawing", 3, "University Requirement", "none");
const EnglishCourse = new Course("English", 2, "University Requirement", "none");
const programmingCourse = new Course("Basics of programming", 3, "College Requirement", "none");
const dataScienceCourse = new Course("Data science", 3, "College Requirement", "Basics of programming");

// Add a new course to university list
courseService.addCourse("IT", geometricCourse)
courseService.addCourse("UC", EnglishCourse)
courseService.addCourse("IT", programmingCourse)
courseService.addCourse("IT", dataScienceCourse)

// Check whether the course exists in the university list
console.log(courseService.isCourseExist("UC", "data structue"))

// Delete a course form university list
courseService.deleteCourse("UC", "data structue")

// Editing a specific course in university list
courseService.updateCourseName("ac", "data structue", "Data Structure")
courseService.updateCourseHours("ac", "data structue", 5)
courseService.updateCourseType("ac", "data structue", "University Requirement")
courseService.updateCoursePrerequisites("ac", "data structue", "none")

// Print all courses in university list
universityList.forEach(element => {
    element.Major.forEach(element => console.log(element.course))
});

// Test College Service 
const college = new College("College of Engineering");
const collegeService = new CollegeServices();

// Add new college to the University List ;
collegeService.addCollege(college);

// Delete college from University List ;
collegeService.deleteCollege("AU College");

// Update specific college
collegeService.updateCollege("IT college", "College of Information Technologies");

// Check if a specific college exist 
console.log(collegeService.isCollegeExist("IT College"));

// Print the university list after updates
console.log(universityList);

//Test Major Service  
const major = new Major("College of Architecture");
const majorService = new MajorServices();

// Add new major to the University List ;
majorService.addMajor("College of Engineering", major);

// Delete major from college;
majorService.deleteMajor("College of Information Technologies", "IT");

// Update specific major
majorService.updateMajorName("IT", "Architecture Engineering");

// Check if a specific major exist 
console.log(majorService.isMajorExist("Architecture Engineering"));

// Print the majors after updates
universityList.forEach(college => console.log(college.Major));

