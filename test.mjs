import { Course, CourseServices } from "./course.mjs";
import { universityList } from "./utils/university.mjs";
import { Major, MajorServices } from "./major.mjs";
import { College, CollegeServices } from "./college.mjs";

// Test Course Service 
//create instance form CourseService class
const courseService = new CourseServices();

//create instance form Course class
const geometricCourse = new Course("Geometric Drawing", 3, "University Requirement", "None");
const EnglishCourse = new Course("English", 2, "University Requirement", "None");
const programmingCourse = new Course("Basics of programming", 3, "College Requirement", "None");
const dataScienceCourse = new Course("Data science", 3, "College Requirement", "Basics of programming");

// Add a new course to university list
courseService.addCourse("Computer Science", geometricCourse);
courseService.addCourse("Human Medicine Specialty", EnglishCourse);
courseService.addCourse("Computer Science", programmingCourse);
courseService.addCourse("Computer System Engineering", dataScienceCourse);

// Check whether the course exists in the university list
courseService.isCourseExist("Human Medicine Specialty", "Anatomy");

// Delete a course form university list
courseService.deleteCourse("Computer System Engineering", "Engineering mathematics");

// Editing a specific course in university list
courseService.updateCourseHours("Computer Science", "Data structure", 5);
courseService.updateCourseType("Computer Science", "Data structure", "University Requirement");
courseService.updateCoursePrerequisites("Computer Science", "Data structure", "None");
courseService.updateCourseName("Computer Science", "Data structure", "Data Structure");

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
collegeService.deleteCollege("Medicine and Health Sciences");

// Update specific college
collegeService.updateCollege("Information Technology and Computer Engineering", "Information Technology and Computer System Engineering");

// Check if a specific college exist 
collegeService.isCollegeExist("Information Technology and Computer Engineering");


//Test Major Service  
const major = new Major("College of Architecture");
const majorService = new MajorServices();

// Add new major to the University List ;
majorService.addMajor("College of Engineering", major);

// Delete major from college;
majorService.deleteMajor("Medicine and Health Sciences", "Healthy and Therapeutic Nutrition");

// Update specific major
majorService.updateMajorName("Computer System Engineering", "Computer Engineering");

// Check if a specific major exist 
majorService.isMajorExist("Architecture Engineering");

// Print the majors after updates
universityList.forEach(college => console.log(college.Major));

