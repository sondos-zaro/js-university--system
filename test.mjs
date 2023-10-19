import { Major, MajorServices } from "./major.mjs";
import { Course, CourseServices } from "./course.mjs";
import { College, CollegeServices } from "./college.mjs";
import { universityList } from "./utils/university.mjs";


// Test College Service 
const college = new College("College of Engineering");
const collegeService = new CollegeServices();

// Add new college to the University List ;
collegeService.addCollege(college);

// Delete college from University List ;
collegeService.deleteCollege("AU College");

// Update specific college
collegeService.updateCollege("IT college","College of Information Technologies");

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

