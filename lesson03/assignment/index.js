
// Importing JSON data
$(document).ready(function() {
    // const people = 
    // [{
    //     "name": "Steve Smith",
    //     "jobTitle": "Project Manage",
    //     "Company": "Front End Dev Co",
    //     "Experience": "3 years",
    //     "School": "UW",
    //     "Major": "Marketing",
    //     "Email": "steve@fedc.com",
    //     "LinkedInUrl": "steve.linkedinprofile.com"
    //   }, {
    //     "name": "Aaron Katz",
    //     "jobTitle": "Full Stack Developer",
    //     "Company": "Web Sites and More",
    //     "Experience": "5 years",
    //     "School": "SU",
    //     "Major": "Computer Science",
    //     "Email": "aaronNotMyEmail@uw.com",
    //     "LinkedInUrl": "aaron.linkedinprofile.com"
    //   }, {
    //     "name": "Kyle Hendricks",
    //     "jobTitle": "Starting Pitcher",
    //     "Company": "Chicago Cubs",
    //     "Experience": "12 years",
    //     "School": "USC",
    //     "Major": "Pitching",
    //     "Email": "kyleH@cubs.com",
    //     "LinkedInUrl": "kyle.linkedinprofile.com"
    //   },
    //   {
    //     "name": "Michael Jordan",
    //     "jobTitle": "Point Guard",
    //     "Company": "Chicago Buls",
    //     "Experience": "20 years",
    //     "School": "UNC",
    //     "Major": "Trash Talking",
    //     "Email": "mJordan@bulls.com",
    //     "LinkedInUrl": "mJordan.linkedinprofile.com"
    //   }
    //   ];
    
      // Calling JSON file directly


    //Attempting template
    let person = people.map(function(el) {
        // recreating HTML format
        return card = `
        
            <section>
                <div class="pic">
                    <img class="headshot" src = "img/unsplash-headshot.jpg", alt="Steve Smith">
                    <h1>${el.name}</h1>
                    <h2>${el.jobTitle}</h2>
                </div>
                <div class="title">
                    <article><h3>Company:</h3><p>${el.Company}</p></article>
                    <article><h3>Experience:</h3><p>${el.Experience}</p></article>
                    <article><h3>School:</h3><p>${el.School}</p></article>
                    <article><h3>Major:</h3><p>${el.Major}</p></article>
                    <article><h3>Email:</h3><p>${el.Email}</p></article>
                    <article><img class="in" src = "img/linkedin.svg"><p class="linkedin">${el.LinkedInUrl}</p></article>
                </div>
            </section>
        `;
    });


    //Append to HTML
    $(".template-hook").append(person);
});

