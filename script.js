    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    document.addEventListener('DOMContentLoaded', () => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                displayEducation(data.education);
                displayPortfolio(data.portfolio);
                displaySkills(data.skills);
                displayCertifications(data.certifications);
            })
            .catch(error => console.error('Error fetching data:', error));
    });
    
    function displayEducation(education) {
        const educationContainer = document.querySelector('.education-container');
        education.forEach(item => {
            const educationBox = `
                <div class="education-box">
                    <div class="logo-circle">
                        <img src="${item.logo}" alt="${item.institution} Logo">
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.institution}</p>
                    <p>Marks: ${item.marks}</p>
                </div>
            `;
            educationContainer.innerHTML += educationBox;
        });
    }
    
    function displayPortfolio(portfolio) {
        const portfolioContainer = document.querySelector('.portfolio-container');
        portfolio.forEach(project => {
            const portfolioBox = `
                <div class="portfolio-box">
                    <img src="${project.image}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;
            portfolioContainer.innerHTML += portfolioBox;
        });
    }
    
    function displaySkills(skills) {
        const skillsContainer = document.querySelector('.skills-container');
        skills.forEach(skill => {
            const skillBox = `
                <div class="skills-box">
                    <div class="logo-circle">
                        <img src="${skill.image}" alt="${skill.name} Logo">
                    </div>
                    <h3>${skill.title}</h3>
                    <p>${skill.description}</p>
                </div>
            `;
            skillsContainer.innerHTML += skillBox;
        });
    }
    
    function displayCertifications(certifications) {
        const certificationsContainer = document.querySelector('.certifications-container');
        certifications.forEach(certification => {
            const certificationBox = `
                <div class="certification-box">
                    <img src="${certification.image}" alt="${certification.title}">
                    <h3>${certification.title}</h3>
                    <p>${certification.description}</p>
                </div>
            `;
            certificationsContainer.innerHTML += certificationBox;
        });
    }
    