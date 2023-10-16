export class College {
    
    constructor(collegeName) {
        this.collegeId = this.generateNewId();
        this.collegeName = collegeName;
        this.colleges = [];
    }

    generateNewId() {
        if (!this.colleges) {
            return 0;
        }
        let ids = this.colleges.map(college => college.collegeId);
        return  Math.max(...ids) + 1;         
    }
} 