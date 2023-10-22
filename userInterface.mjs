import * as readline from "readline";
import { Course, CourseServices } from "./course.mjs";
import { universityList } from "./utils/university.mjs";
import { Major, MajorServices } from "./major.mjs";
import { College, CollegeServices } from "./college.mjs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class UserInterface {
    displaySelectList() {
        console.log(`What Class do you want to deal with :
        1- College 
        2- Major  
        3- Course  
        4- Exit`);
        this.getUserChoice();
    }

    getUserChoice() {
        rl.question('Enter Your Choice ', (choice) => {
            switch (choice) {
                case "1":
                    this.displayCollegeMethods();
                    break;
                case "2":
                    this.displayMajorMethods()
                    // code block
                    break;
                case "3":
                    this.displayCourseMethods()
                    break;
                case "4":
                    // code block
                    break;
                default:
                // code block
            }
        });
    }

    displayCollegeMethods() {
        console.log(`What the process do you want to perform?
        1- Add new college
        2- Delete college 
        3- Edit College Name
        4- Check if college exists
        5- Exit`);
        this.getCollegeChoice();
    }

    getCollegeChoice() {
        rl.question('Enter Your Choice ', (choice) => {
            switch (choice) {
                case "1":
                    this.addCollege();
                    this.displaySelectList();
                    break;
                case "2":
                    this.deleteCollege();
                    break;
                case "3":
                    this.updateCollege();
                    break;
                case "4":
                    this.ifCollegeExist();
                    break;
                default:
            }

        });
    }

    addCollege() {
        rl.question('Enter college name: ', (collegeName) => {
            const college = new College(collegeName);
            const collegeService = new CollegeServices();
            collegeService.addCollege(college);
        });

    }

    deleteCollege() {
        const collegeService = new CollegeServices();

        rl.question('Enter What college name do you want to remove: ', (collegeName) => {
            collegeService.deleteCollege(collegeName);
            this.displaySelectList()
        });
    }

    updateCollege() {
        const collegeService = new CollegeServices();

        rl.question('Enter old name: ', (oldName) => {
            rl.question('Enter new name: ', (newName) => {
                collegeService.updateCollege(oldName, newName);
                this.displaySelectList()
            })
        });
    }

    ifCollegeExist() {
        const collegeService = new CollegeServices();

        rl.question('Enter the name of the college you want to check for: ', (collegeName) => {
            if (collegeService.isCollegeExist(collegeName)) {
                console.log(`The ${collegeName} college is exist`)
            }
            else {
                console.log(`The ${collegeName} college is not found in the university list`)
            }

            this.displaySelectList()
        });

    }

    displayMajorMethods() {
        console.log(`What the process do you want to perform?
        1- Add new major
        2- Delete major 
        3- Edit major Name
        4- Check if major exists
        5- Exit`);
        this.getMajorChoice();
    }

    getMajorChoice() {
        rl.question('Enter Your Choice ', (choice) => {
            switch (choice) {
                case "1":
                    this.addMajor();
                    break;
                case "2":
                    this.deleteMajor();
                    break;
                case "3":
                    this.updateMajor();
                    break;
                case "4":
                    this.ifMajorExist();
                    break;
                case "5":
                    this.getUserChoice();
                    break;
                default: this.displaySelectList();
            }
        });
    }

    addMajor() {
        rl.question('Enter college name: ', (collegeName) => {
            rl.question('Enter major name: ', (majorName) => {
                const major = new Major(majorName);
                const majorService = new MajorServices()
                majorService.addMajor(collegeName, major);
                this.displayMajorMethods();
            });
        });
    }

    deleteMajor() {
        rl.question('Enter college name: ', (collegeName) => {
            rl.question('Enter major name: ', (majorName) => {
                const majorService = new MajorServices()
                majorService.deleteMajor(collegeName, majorName);
                this.displayMajorMethods();
            });
        });

    }

    updateMajor() {
        rl.question('Enter the name of major do you want update: ', (oldName) => {
            rl.question('Enter new name of major', (newName) => {
                const majorService = new MajorServices()
                majorService.updateMajorName(oldName, newName);
                this.displayMajorMethods();
            });
        });
    }

    ifMajorExist() {
        rl.question('Enter major name: ', (majorName) => {
            const majorService = new MajorServices()
            majorService.isMajorExist(majorName);
            this.displayMajorMethods();
        });
    }

    displayCourseMethods() {
        console.log(`What the process do you want to perform?
        1- Add new course
        2- Delete course 
        3- Edit course Name
        4- Edit course Hours
        5- Edit course type
        6- Edit course prerequisites
        7- Check if course exists
        8- Exit`);
        this.getCourseChoice();
    }

    getCourseChoice() {
        rl.question('Enter Your Choice: ', (choice) => {
            switch (choice) {
                case "1":
                    this.addCourse();
                    break;
                case "2":
                    this.deleteCourse();
                    break;
                case "3":
                    this.updateCourseName();
                    break;
                case "4":
                    this.updateCourseHours();
                    break;
                case "5":
                    this.updateCourseType();
                    break;
                case "6":
                    this.updateCoursePrerequisites();
                    break;
                case "7":
                    this.ifCourseExist();
                    break;
                case "8":
                    this.getUserChoice();
                    break;
                default: this.displaySelectList();
            }
        });
    }

    addCourse() {
        const courseServices = new CourseServices()
        rl.question('Enter major name: ', (majorName) => {
            rl.question('Enter course name: ', (courseName) => {
                rl.question('Enter course Hours: ', (numberOfHours) => {
                    rl.question('Enter course type: ', (type) => {
                        rl.question('Enter course prerequisites: ', (prerequisites) => {
                            const course = new Course(courseName, numberOfHours, type, prerequisites);
                            courseServices.addCourse(majorName, course);
                            this.displayCourseMethods();
                        })
                    })

                });
            })
        });
    }

    deleteCourse() {
        const courseServices = new CourseServices()
        rl.question('Enter major name: ', (majorName) => {
            rl.question('Enter course name: ', (courseName) => {
                courseServices.deleteCourse(majorName, courseName);
                this.displayCourseMethods();
            });
        });

    }

    updateCourseName() {
        const courseServices = new CourseServices()
        rl.question('Enter the name of major do you want update: ', (majorName) => {
            rl.question('Enter old course name: ', (oldName) => {
                rl.question('Enter new name of course: ', (newName) => {
                    courseServices.updateCourseName(majorName, oldName, newName);
                    this.displayCourseMethods();
                });
            });
        });
    }

    updateCourseHours() {
        const courseServices = new CourseServices()
        rl.question('Enter the name of major do you want update: ', (majorName) => {
            rl.question('Enter name of course: ', (courseName) => {
                rl.question('Enter number of course hours method: ', (numberOfHours) => {
                    courseServices.updateCourseHours(majorName, courseName, numberOfHours);
                    this.displayCourseMethods();
                });
            });
        });
    }

    updateCourseType() {
        const courseServices = new CourseServices()
        rl.question('Enter the name of major do you want update: ', (majorName) => {
            rl.question('Enter name of course: ', (courseName) => {
                rl.question('Enter type of course: ', (type) => {
                    courseServices.updateCourseType(majorName, courseName, type);
                    this.displayCourseMethods();
                });
            });
        });
    }

    updateCoursePrerequisites() {
        const courseServices = new CourseServices()
        rl.question('Enter the name of major do you want update: ', (majorName) => {
            rl.question('Enter name of course: ', (courseName) => {
                rl.question('Enter course prerequisites  of course: ', (prerequisites) => {
                    courseServices.updateCoursePrerequisites(majorName, courseName, prerequisites);
                    this.displayCourseMethods();
                });
            });
        });
    }

    ifCourseExist() {
        const courseServices = new CourseServices()
        rl.question('Enter major name: ', (majorName) => {
            rl.question('Enter course name: ', (courseName) => {
                if (courseServices.isCourseExist(majorName, courseName)) {
                    console.log(`The ${courseName} course is exist`)
                }
                else {
                    console.log(`The ${courseName} course or ${majorName} major is not found`)
                }
                this.displayCourseMethods();
            });
        });
    }




}


let i = new UserInterface();
i.displaySelectList();

