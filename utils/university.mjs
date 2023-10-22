export let universityList = [
  {
    collegeId: 1,
    collegeName: "Information Technology and Computer Engineering",
    Major: [
      {
        majorId: 1,
        majorName: "Computer Science",
        course: [
          {
            courseId: 1,
            courseName: "Data structure",
            numberOfHours: 3,
            type: "college requirements",
            prerequisites: "None",
          },
          {
            courseId: 2,
            courseName: "Programming basics",
            numberOfHours: 3,
            type: "college requirements",
            prerequisites: "None",
          },
          {
            courseId: 3,
            courseName: "Advanced programming",
            numberOfHours: 3,
            type: "college requirements",
            prerequisites: "Programming basics",
          },
        ],
      },
      {
        majorId: 1,
        majorName: "Computer System Engineering",
        course: [
          {
            courseId: 1,
            courseName: "Microprocessor",
            numberOfHours: 3,
            type: "Major requirements",
            prerequisites: "None",
          },
          {
            courseId: 2,
            courseName: "Information Systems",
            numberOfHours: 3,
            type: "college requirements",
            prerequisites: "None",
          },
          {
            courseId: 3,
            courseName: "Engineering mathematics",
            numberOfHours: 3,
            type: "Major requirements",
            prerequisites: "Differential",
          },
        ],
      },
    ],
  },
  {
    collegeId: 2,
    collegeName: "Medicine and Health Sciences",
    Major: [
      {
        majorId: 1,
        majorName: "Human Medicine Specialty",
        course: [
          {
            courseId: 1,
            courseName: "Anatomy",
            numberOfHours: 6,
            type: "college requirements",
            prerequisites: "None",
          },
        ],
      },
      {
        majorId: 2,
        majorName: "Healthy and Therapeutic Nutrition",
        course: [
          {
            courseId: 1,
            courseName: "Psychology",
            numberOfHours: 3,
            type: "Optional",
            prerequisites: "None",
          },
        ],
      },
    ],
  },
];
