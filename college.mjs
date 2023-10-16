import { universityList } from "./utils/university.mjs";

export class College {
  constructor(collegeName) {
    this.collegeId = this.generateNewId();
    this.collegeName = collegeName;
  }

  generateNewId() {
    if (!universityList.length === 0) {
      return 0;
    }
    let ids = universityList.map((college) => college.collegeId);
    return Math.max(...ids) + 1;
  }
}

class CollegeServices {

    addCollege(college) {
        universityList.push(college);
    }
}
