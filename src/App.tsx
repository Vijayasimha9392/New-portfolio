import React, { useState } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Mail } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import ContactForm from './components/ContactForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const projects = [
    {
      title: "Predictive Analysis of Energy Consumption in Vehicles",
      description: "Developed a Random Forest model with 85% accuracy to predict vehicle energy consumption, leveraging data preprocessing, feature engineering, and predictive analytics. Utilized NumPy, Pandas, and scikit-learn for data handling and created interactive Power BI dashboards for insightful visualization.",
      image: "https://www.energymatters.com.au/wp-content/uploads/2021/03/how-to-reduce-ev-energy-consumption-min.png",
      techStack: ["Python", "Machine Learning", "NumPy", "Pandas", "Scikit-learn", "Microsoft Power BI", "Kaggle"],
      github: "https://github.com/username/energy-consumption"
    },
    {
      title: "Interactive Image Gallery Website",
      description: "Built a real-time interactive image gallery with Pexels API integration for dynamic image fetching, seamless search, and in-model previews. Developed using HTML5, CSS3, and Bootstrap to ensure a responsive and user-friendly interface.",
      image: "https://mobirise.com/bootstrap-gallery/assets1/images/responsive-image-galleries.jpg",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Pixel API"],
      github: "https://github.com/Vijayasimha9392/Image-Stack-Website-using-API"
    },
    {
      title: "Restaurant Management System",
      description: "Built a Java-based restaurant order processing system with customer data management, menu selection, and payment automation. Optimized with an intuitive GUI, reducing order processing time by 50%.",
      image: "https://retiba.com/wp-content/uploads/2021/04/Restaurant-Management-Software-retiba.jpg",
      techStack: ["Java", "OOP", "Swing Framework"],
      github: "https://github.com/Vijayasimha9392/Java-Restaurant-Application-Project"
    }
  ];

  const skills = {
    Programming: [
      { name: "Java", level: 85 },
      { name: "Python", level: 60 },
      { name: "SQL", level:80}
    ],
    Frontend: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 70 },
      { name: "Bootstrap", level: 70 }
    ],
    Database: [
      { name: "SQL", level: 85 },
    ],
    Cloud: [
      { name: "AWS", level: 81 },
    ],
    Tools: [
      { name: "GitHub", level: 80 },
      { name: "Postman", level: 85 },
      { name: "Power BI", level: 60 }
    ]
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-lg z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Vijayasimha Tammineni</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Vijayasimha Tammineni
            </h1>
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
              Computer Science Engineering Student
              <br />
              Passionate about Software Engineer and AWS Cloud.
            </p>
            <a href='https://drive.google.com/file/d/1wD3ug43LPuMXZNPw1qIQmDGSF0Iih43K/view?usp=sharing'>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors mx-auto md:mx-0">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGDhX6dxOhu7Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730559649964?e=2147483647&v=beta&t=VQ8S3xuwkTKYZP4RIkhfk_iaNUSQxw-vkogIS-IfXqM"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-blue-600"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
            I am a final-year Computer Science Engineering student with a strong passion for software development and problem-solving. I am eager to learn and explore AWS Clous and full-stack development, aiming to build efficient and intelligent solutions. With a curiosity for new technologies, I continuously strive to enhance my skills and contribute to innovative projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <p>Malla Reddy University</p>
                <p>B.Tech in Computer Science Engineering</p>
                <p>2021 - 2025</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Achievements</h3>
                <ul className="list-inside">
                  <li>Secured an 86.1% in Jee Mains 2021 on the first attempt.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                {skillList.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Software Development Engineer Intern</h3>
              <p className="text-gray-600 dark:text-gray-300">Bluestock Fintech &nbsp;&nbsp;&nbsp; July 2024 - August 2024</p>
              <p className="mt-4">
              Collaborated on a multi-person team of five to designed and developed a production-level IPO Web 
              Application and REST API using Django and created front-end components using HTML5, CSS3, JavaScript, and Bootstrap, enhancing responsiveness 
              and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  vijayasimhatammineni9392@gmail.com
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/Vijayasimha9392" className="hover:text-blue-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/vijayasimha-tammineni-491a99284" className="hover:text-blue-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 dark:text-gray-300">
        <p>© 2024 Vijayasimha Tammineni. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;