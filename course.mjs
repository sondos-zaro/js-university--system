export class Course {
    constructor(id, name, numberOfHoures, type, prerequisites) {
        this.id = id;
        this.name = name;
        this.numberOfHoures = numberOfHoures;
        this.type = type;
        this.prerequisites = prerequisites;
        this.courses = [];
    }
}