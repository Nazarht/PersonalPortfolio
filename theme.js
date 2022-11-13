let trigger = document.querySelector('#secret-trigger');
const header = document.querySelector('header');


const about = document.querySelector('.about');
const aboutH2 = document.querySelector('.about h2');
const aboutP = document.querySelectorAll('.about p');


const projects = document.querySelector('.projects');
const projectsH2 = document.querySelector('.projects h2');


const skills = document.querySelector('.skills');
const skillsH2 = document.querySelector('.skills h2');
const skillBox = document.querySelector('.skill-box');

const contacts = document.querySelector('.contacts');


function darkTheme() {

    // Header
    header.style.backgroundColor = 'black';

    // About
    about.style.backgroundColor = 'black';
    aboutH2.style.color = 'white';
    aboutP.forEach(x => x.style.color = 'white')
    // Project
    projects.style.backgroundColor = 'black';
    projectsH2.style.color = 'white';

    // Skills
    skills.style.backgroundColor = 'black';
    skillsH2.style.color = 'white';
    skillBox.style.backgroundColor = 'white';
    skillBox.style.borderRadius = '10px';

    trigger.onclick = lightTheme;
}

function lightTheme() {

    // Header
    header.style.backgroundColor = 'black';

    // About
    about.style.backgroundColor = 'white';
    aboutH2.style.color = 'black';
    aboutP.forEach(x => x.style.color = 'black')
    // Project
    projects.style.backgroundColor = 'white';
    projectsH2.style.color = 'black';

    // Skills
    skills.style.backgroundColor = 'white';
    skillsH2.style.color = 'black';
    skillBox.style.backgroundColor = 'white';
    skillBox.style.borderRadius = '10px'

    trigger.onclick = resetTheme;
}

function resetTheme() {

    // Header
    header.style.backgroundColor = '';

    // About
    about.style.backgroundColor = '';
    aboutH2.style.color = '';
    aboutP.forEach(x => x.style.color = '')
    // Project
    projects.style.backgroundColor = '';
    projectsH2.style.color = '';

    // Skills
    skills.style.backgroundColor = '';
    skillsH2.style.color = '';
    skillBox.style.backgroundColor = '';
    skillBox.style.borderRadius = ''

    trigger.onclick = darkTheme;
}


trigger.onclick = darkTheme;