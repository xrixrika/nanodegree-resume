/**
 * Biography information
 * @type {{name: string, role: string, contacts: {mobile: string, email: string, github: string, location: string}, welcomeMessage: string, skills: [*], bioPic: string, display: bio.display}}
 */
var bio = {
    "name": "Christina",
    "role": "Web developer",
    "contacts": {
        "mobile": "683712839",
        "email": "kexrina@gmail.com",
        "github": "xrixrika",
        "location": "Zografou, Athens, Greece"
    },
    "welcomeMessage": "Hello to everyone",
    "skills": ["singing", "programming", "teaching", "writing"],
    "bioPic": "images/fry.jpg",
    "display": function() {
        var $header = $("#header");
        $header
            .prepend(HTMLheaderRole.replace("%data%", this.role))
            .prepend(HTMLheaderName.replace('%data%', this.name));

        for (var key in this.contacts) {
            if (this.contacts.hasOwnProperty(key)) {
                $("#topContacts, #footerContacts").append(HTMLcontactGeneric.replace('%data%', this.contacts[key]).replace('%contact%', key));
            }
        }

        $header
            .append(HTMLbioPic.replace('%data%', this.bioPic))
            .append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));

        $header.append(HTMLskillsStart);

        this.skills.forEach(function(skill) {
            $("#skills").append(HTMLskills.replace('%data%', skill));
        });
    }
};

/**
 * Work information
 * @type {{jobs: [*], display: work.display}}
 */
var work = {
    "jobs": [{
        "employer": "Sotiria Hospital",
        "title": "Health Visitor",
        "location": "Athens",
        "dates": "2015-2016",
        "description": "I am a good Health Visitor"
    },
        {
            "employer": "Web profile",
            "title": "Web developer",
            "location": "Athens",
            "dates": "in progress",
            "description": "I am a good web developer"
        }
    ],
    "display": function() {
        this.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last")
                .append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title))
                .append(HTMLworkDates.replace('%data%', job.dates))
                .append(HTMLworkLocation.replace('%data%', job.location))
                .append(HTMLworkDescription.replace('%data%', job.description));
        });
    }
};

/**
 * Projects in which I participated
 * @type {{projects: [*], display: projects.display}}
 */
var projects = {
    "projects": [{
        "title": "project1",
        "dates": "2017",
        "description": "A very good project1",
        "images": ["images/project.jpg", "images/project.jpg"]
    },
        {
            "title": "project2",
            "dates": "2017",
            "description": "A very good project2",
            "images": ["images/project.jpg", "images/project.jpg"]
        }
    ],
    "display": function() {
        this.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last")
                .append(HTMLprojectTitle.replace('%data%', project.title))
                .append(HTMLprojectDates.replace('%data%', project.dates))
                .append(HTMLprojectDescription.replace('%data%', project.description));

            project.images.forEach(function(image) {
                $(".project-entry:last").append(HTMLprojectImage.replace('%data%', image));
            });
        });
    }
};

/**
 * My Education, schools and online courses
 * @type {{schools: [*], onlineCourses: [*], display: education.display}}
 */
var education = {
    "schools": [{
        "name": "TEI of Athens",
        "location": "Peristeri, Athens, Greece",
        "degree": "BSc",
        "majors": ["Information Technology"],
        "dates": "2016",
        "url": "https://www.teiath.gr"
    },
        {
            "name": "4o lukeio zwgrafou",
            "location": "Ilisia, Athens, Greece",
            "degree": "High school diploma",
            "majors": ["psychology"],
            "dates": "2016",
            "url": "https://www.google.gr"
        }
    ],
    "onlineCourses": [{
        "title": "My first online course",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "www.udacity.com"
    },
        {
            "title": "My other online course",
            "school": "Lynda",
            "dates": "2015-2016",
            "url": "www.lynda.com"
        }
    ],
    "display": function() {
        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last")
                .append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree))
                .append(HTMLschoolDates.replace("%data%", school.dates))
                .append(HTMLschoolLocation.replace("%data%", school.location));

            school.majors.forEach(function(major) {
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
            });
        });
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(onlineCourse) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last")
                .append(HTMLonlineTitle.replace("%data%", onlineCourse.title))
                .append(HTMLonlineSchool.replace("%data%", onlineCourse.school))
                .append(HTMLonlineDates.replace("%data%", onlineCourse.dates))
                .append(HTMLonlineURL.replace("%data%", onlineCourse.url));
        });
    }
};

/**
 * Main function to initialize template replacement & google maps div
 * Checks for object fulfilment and initializes the display methods of each resume object.
 */
var main = function() {
    if (bio.skills.length > 0) {
        bio.display();
    }
    if (projects.projects.length > 0) {
        projects.display();
    }
    if (education.schools.length > 0 && education.onlineCourses.length > 0) {
        education.display();
    }
    if (work.jobs.length > 0) {
        work.display();
    }
    $("#mapDiv").append(googleMap);
};

// Initialize the main function
main();