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
                  // code block
                  break;
                  case "3":
                  // code block
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
            switch(choice) {
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
        rl.question('Enter college name', (collegeName) => {
            rl.question('Enter major name', (majorName) => {
                const major = new Major(majorName);
                const majorService = new MajorServices()
                majorService.addMajor(collegeName, major);
                this.displayMajorMethods(); 
            });
        });         
    }

    deleteMajor() {
        rl.question('Enter college name', (collegeName) => {
            rl.question('Enter major name', (majorName) => {
                const majorService = new MajorServices()
                majorService.deleteMajor(collegeName, majorName);
                this.displayMajorMethods(); 
            });
        });   
        
    }

    updateMajor() {
        rl.question('Enter the name of major do you want update', (oldName) => {
            rl.question('Enter new name of major', (newName) => {
                const majorService = new MajorServices()
                majorService.updateMajorName(oldName, newName);
                this.displayMajorMethods(); 
            });
        });  
    }

    ifMajorExist() {
        rl.question('Enter major name', (majorName) => {
            const majorService = new MajorServices()
            majorService.isMajorExist(majorName);
            this.displayMajorMethods(); 
        });  
    }
}


let i = new UserInterface();
i.displaySelectList();

