import { Course, CourseServices } from "./course.mjs";
import { universityList } from "./utils/university.mjs";


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
courseService.updateCourse("ac", "data structue", "Data Structure", 5, "University Requirement", "none")

// Print all courses in university list
universityList.forEach(element => {
    element.Major.forEach(element=>console.log(element.course))
});
