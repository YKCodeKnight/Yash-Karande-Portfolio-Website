import { useState } from "react";
import { ExperienceCard } from "./components/ExperienceCard";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Github, Linkedin, Award, FileText } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip";

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const navItems = [
    "Home",
    "About Me",
    "Experience",
    "Skills",
    "Projects",
    "Publications",
    "Certifications",
    "Contact Me"
  ];

  const publications = [
  {
    title: "Brain Tumour Detection using VGG-16 and Segmentation using U-Net architecture",
    journal: "In the process of publication, presented and accepted at ICDTBESDVB@2047 Conference, IIT Dhanbad 2025",
    description:
      "Abstract: Almost 20 million people in this world are living with cancer. The brain is the most essential organ in the body, which controls all voluntary and involuntary functions. Growth of an abnormal clump of cells in the brain leading to a tumour causes brain cancer. Medically diagnosing a brain tumour is difficult even with imaging techniques like MRI and CT scan because it’s difficult to identify the shape of a tumour, due to complex structure of the brain. Diagnosis of brain tumour and its segmentation is critical as early diagnosis can be life-saving. However, there are several research gaps in this field such as limited tumour type classification which makes models biased by making them primarily focus on only one type of tumour when there are over 100 distinct types, low accuracy given by several outmoded models, lack of multimodal imaging data to bridge the gap between low accuracy and better prediction results given by model, insufficient evaluation metrics to decide superiority of a model, and lastly ability of the model to be clinically applicable. Hence in this research we propose a method to detect whether an MRI image contains a brain tumour or not and then segment the region of interest surrounding the brain tumour by thresholding to obtain an approximate structure of the tumour using two deep learning architecture: VGG-16 and U-net. Working of our model has been discussed and our model has been compared with other contemporary models for analysing advantages and limitations. The analysis of the findings revealed that our model was efficient at segmenting regions where tumour was large and developed as well as those regions where tumour is small and developing.",
    link: "#"
  },
  {
    title: "Securing the Software Development Life Cycle in Cloud Environments: A DevSecOps Perspective",
    journal: "Proceedings of ICCSCE 2025 Conference, Atlantis Press Series: Advances in Computer Science Research: Vol 124 ",
    description:
      "Abstract. There is an increase in the number of security vulnerabilities in Soft-ware Development Lifecycle (SDLC) as the practice of cloud computing ex-pands. The main problem with traditional SDLC models is that they often neglect security and this leaves several threats and vulnerabilities uninspected. Our paper studies major cloud breaches, such as the Capital One, T-Mobile, Okta and LastPass. We have researched different risks such as cloud misconfiguration, in-secure APIs, third party threats, credential theft, insider threats. We have also studied the use of DevSecOps.Unlike traditional SDLC models, DevSecOps is a model which integrates security at every phase of development in SDLC. We have discussed the future of use of AI and no code low code strategy in cloud software development and analyzed the challenges, advantages, and limitations they bring to the table.",
    link: "https://www.atlantis-press.com/proceedings/iccsce-25/126017412"
  },
  {
    title: "Dynamic System Analysis of Air Pollution and Respiratory Diseases",
    journal: "International Journal of Engineering Sciences and Mathematics (IJESM) Vol 14, Issue 7",
    description:
      "Abstract: This research paper delves into the relationship between air pollution and its effect on respiratory diseases, particularly lung infections and asthma. Moreover, it also investigates other factors that influence the rise or fall in these respiratory diseases such as meteorological conditions like temperature and humidity.  By recognizing the growing concern about climate-driven health impacts, this research paper seeks to model the interaction between pollutants such as PM2.5 and NO2, factors like temperature and humidity and conclude a relation between these and respiratory diseases in the form of ordinary differential equations. The Air Quality and Health Impact dataset from Kaggle has been used in our research and we have conducted data-driven analysis as well as performed a simulation to gain insights into the influence of environmental factors over fatal respiratory diseases. Our dynamical system simulates real-world environment conditions to deduce variations in respiratory diseases resulting from pollution. The model reveals a non-linear amplification of respiratory disease under increased pollution and temperature-humidity combinations. Results conclude that even moderate pollution levels, in combination with specific meteorological trends, can lead to a rise in the risk of contracting a respiratory disease. Therefore, our research, gives importance to climate-sensitive public health planning and predictive modelling of respiratory diseases. In this paper we have also elaborated on the promising future extensions that this could hold, such as stochastic modelling and spatial-temporal dynamics to better represent real world fluctuations. ",
    link: "https://ijesm.co.in/abstract.php?article_id=15855&title=DYNAMIC%20SYSTEM%20ANALYSIS%20OF%20AIR%20POLLUTION%20AND%20RESPIRATORY%20DISEASES"
  }
];


  const scrollToSection = (section: string) => {
    setCurrentSection(section.toLowerCase().replace(" ", "-"));
    const element = document.getElementById(section.toLowerCase().replace(" ", "-"));
    element?.scrollIntoView({ behavior: "smooth" });
  };

    // 🔹 Certifications Array
  const certifications = [
    {
      title: "IBM - Introduction to AI",
      issuer: "IBM through Coursera, 2023",
      link: "Coursera- Intro To AI Certificate.pdf"
    },
    {
      title: "IBM - Machine Learning with Python",
      issuer: "IBM through Coursera, 2023",
      link: "Coursera- Machine Learning with Python Certificate.pdf"
    },
    {
      title: "AWS Academy Graduate - Cloud Architecting - Training Badge",
      issuer: "AWS, 2025",
      link: "AWS_Academy_Graduate___Cloud_Architecting___Training_Badge_Badge20251124-30-fp68sl.pdf"
    }
  ];

  

  const workExperience = [
    {
      title: "Schneider Electric India Private Limited",
      subtitle: "Intern - R&D Department",
      description: "During my internship, I developed a Gen-AI prompt-based chat application that generates PyQt6 scripts to modify industrial SCADA dashboard interfaces. I designed a database of 900+ prompt-code pairs with multiple natural language variations to train the model for robust and seamless performance. Collaborating directly with the Senior General Manager, I enabled clients without technical expertise to customize SCADA interfaces effortlessly. I also implemented a PyQt6 interface to integrate the application smoothly with existing industrial software.",
      skills: ["Python", "Generative AI", "PyQt6", "Natural Language Processing"]
    }
  ];

  const researchExperience = [
    {
      title: "Brain Tumour Detection using VGG-16 and Segmentation using U-Net architecture",
      subtitle: "Yash Karande, Rudra Singh, Hardik Nagpal, Dr. Supriya Agrawal",
      description: "Developed a comprehensive brain tumor detection system which utilized a VGG-16 model to detect brain tumors in MRI images from the Siar dataset, achieving 98.61% accuracy, while the U-net model provided segmentation results close to the ground truth. ",
      skills: ["Python", "TensorFlow", "Image Cleaning and Preprocessing", "Deep Learning","Medical Image Analysis"]
    },
    {
      title: "Securing the Software Development Lifecycle in Cloud Environments: A DevSecOps Perspective",
      subtitle: "Atharva Dhuri, Prof. Krishna Samdani, Prof. Shahista Agwan, Shrivardhan Wagh, Yash Karande, Yash Narayan",
      description: "Proposed DevSecOps as a paradigm that integrates security at every SDLC stage. Studied security breaches and prevention strategies, investigating how AI and No Code Low Code approaches could enhance security implementations, highlighting the importance of AI-driven security solutions in modern software development",
      skills: ["Cybersecurity", "DevSecOps", "Low Code No Code Approach", "AI for Cybersecurity", "SDLC"]
    },
    {
      title: "Dynamic System Analysis of Air Pollution and Respiratory Diseases",
      subtitle: "Yash Karande, Divy Beel, Sahil Amin, Utsav Chougule, Dr. Mahesh Naik",
      description: "Examined the relationship between air pollution, temperature, humidity, and respiratory diseases using the SIR model. Utilizing the Kaggle Air Quality and Health Index dataset and implemented time series analysis. Developing models applicable to epidemic and pandemic disease modeling for respiratory diseases. ",
      skills: ["Mathematical Modelling", "Time Series Analysis", "Python", "TensorFlow"]
    }
  ];

  const extracurricular = [
    {
      title: "Cyber Cypher 3.0 Hackathon - Team Leader",
      description: "Led a team of three to develop a comprehensive Hospital Management Portal facilitating streamlined communication between doctors, hospital staff, and patients. Implemented features enabling patients to access diagnostic reports, schedule appointments, and process hospital payments, significantly improving overall care coordination.",
      certificateLink: "Cyber Cypher 3 Certificate.pdf"
    },
    {
      title: "Google Backend Development Bootcamp",
      description: "Completed an intensive 7-day backend development bootcamp focused on Node.js express and javascript, gaining hands-on experience through interactive coding exercises and project-based learning on the Replit platform. Developed practical skills in server-side programming, API design, and application deployment and gained expertise in concepts of RESTful API. ",
      certificateLink: "Google Certificate for Backend Developing Bootcamp.pdf"
    },
    {
      title: "AWS Frontend Development Bootcamp",
      description: "Successfully completed a 7-day immersive bootcamp with AWS and Devtown, concentrating on React.js and JavaScript. Gained practical experience by developing interactive projects and coding exercises on the Replit platform.",
      certificateLink: "AWS Certificate for Frontend Web Developing BOOTcamp with ReactJS.pdf"
    },
    {
      title: "Analytica Data Feud - Semi Finalist",
      description: "Competed in Analytica's Data Science Quiz competition, a challenging event that brought together 50 teams from diverse backgrounds. Advanced to the semi-final round, demonstrating strong expertise in data science concepts, analytical thinking, and problem-solving. ",
      certificateLink: "Data_Feud_Participation _Certificate.png"
    },
    {
      title: "Colloquium - Stockraze",
      description: "Participated in  a simulation for trading using concept of paper trading, providing a dynamic environment between participants. This hands-on experience allowed me to gain a deep understanding of stock market fundamentals, including market analysis and trade execution. ",
      certificateLink: "Stockraze 2022.pdf"
    },
    {
      title: "Programming for Everyone - ACM",
      description: "Attended a 3-day workshop focused on foundational programming concepts in C++ and Python, gaining experience in writing and debugging code. Covered key topics such as data structures, algorithms, and control flow. Using integrated development environments like PyCharm and VSCode, to enhance debugging",
      certificateLink: "ACM PFE 2022.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001F54] shadow-lg">
        <div className=" max-w-screen-xl mx-auto bg-[#001F54] rounded-full px-8 py-3 shadow-lg flex items-center justify-between">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-20 w-20 object-contain rounded-full ml-6"
          />
          <div className="max-w-screen-xl mx-auto bg-[#001F54] flex justify-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[#F5F5DC] hover:text-white transition-colors text-[20px] whitespace-nowrap font-bold"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>



      {/* Home Section */}
      <section id="home" className="max-w-36xl flex items-center justify-center px-8 pt-24">
        <div className="max-w-2xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div>
            <h1 className="text-[#001F54] mb-2 text-[48px]" style={{ textAlign: 'justify' }}>Hello I'm</h1>
            <h1 className="text-black mb-4 text-[48px]" style={{ textAlign: 'justify' }}>Yash Karande</h1>
            <p className="text-[#001F54] mb-6 text-[24px]" style={{ textAlign: 'justify' }}>AI Enthusiast | Developer | Researcher</p>
            <p className="text-gray-700 max-w-lg text-[18px]" style={{ textAlign: 'justify' }}>
              A steadfast software developer and researcher focused on artificial intelligence and cybersecurity, currently pursuing my Computer Science undergraduate degree. My work centers on building secure, intelligent systems that address real-world challenges.
            </p>
          </div>

          {/* Right Side Visual */}
          <div className="flex justify-center">
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-4 items-center justify-center">
              <div className="w-80 h-80 rounded-full border-[5px] border-[#001F54] flex items-center justify-center">
                <ImageWithFallback
                  src="/suit.jpeg"
                  alt="Profile"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
        <div className="max-w-4xl w-full space-y-12">
          {/* About Me Box */}
          <div className="bg-white rounded-3xl px-12 py-10 hover:shadow-[0_0_30px_rgba(0,31,84,0.4)] transition-shadow duration-300">
            <h3 className="text-black mb-4 text-[24px]" style={{ textAlign: 'justify' }}>About</h3>
            <p className="text-gray-700 text-[18px]" style={{ textAlign: 'justify' }}>
              I am an ardent Computer Science student passionate about building innovative, advance AI-driven technologies that improve efficiency and contribute positively to society. Having worked on projects inspired by real-life challenges and conducted research in deep learning, artificial intelligence, and cybersecurity, I am committed to developing secure, data-driven, and resilient technological solutions for diverse audiences. Beyond technical pursuits, I strongly value inclusivity and mentorship. I actively support digital literacy by teaching senior citizens about cyber-scam awareness and helping homeless children learn basic coding and core academic subjects such as science, mathematics, and English. Through these efforts, I aim to empower underrepresented communities and make technology more accessible to all.
            </p>
          </div>

          {/* Education Box */}
          <div className="bg-white rounded-3xl px-12 py-10 hover:shadow-[0_0_30px_rgba(0,31,84,0.4)] transition-shadow duration-300">
            <h3 className="text-black mb-6 text-[26px]" style={{ textAlign: 'justify' }}>Education</h3>
            <div className="space-y-6">
              <div style={{ textAlign: 'justify' }}>
                <h4 className="text-black mb-2 text-[20px]">SVKM's Narsee Monjee Institute of Management Studies</h4>
                <p className="text-gray-600 text-[18px]">Bachelor of Technology - Computer Engineering</p>
                <p className="text-gray-600 text-[18px]">GPA: 3.85</p>
              </div>
              <div style={{ textAlign: 'justify' }}>
                <h4 className="text-black mb-2 text-[20px]">Alpha Junior College of Science and Commerce, Vile Parle</h4>
                <p className="text-gray-600 text-[18px]">Higher Secondary Certificate</p>
              </div>
              <div style={{ textAlign: 'justify' }}>
                <h4 className="text-black mb-2 text-[20px]">Billabong High International School, Thane</h4>
                <p className="text-gray-600 text-[18px]">CISCE - Class X</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen px-8 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Work Experience */}
          <div>
            <h2 className="text-black mb-8 text-[32px]" style={{ textAlign: 'justify' }}>Work Experience</h2>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div>
            <h2 className="text-black mb-8 text-[32px]" style={{ textAlign: 'justify' }}>Research Experience</h2>
            <div className="space-y-6">
              {researchExperience.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>

          {/* Extracurricular */}
          <div>
            <h2 className="text-black mb-8 text-[32px]" style={{ textAlign: 'justify' }}>Extracurricular College Involvement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {extracurricular.map((exp, index) => (
                <ExperienceCard 
                  key={index} 
                  title={exp.title}
                  subtitle={exp.subtitle}
                  description={exp.description}
                  skills={[]}
                  certificateLink={exp.certificateLink}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-8 py-24">
        <div className="max-w-6xl w-full">
          <h2 className="text-black mb-12 text-[32px]" style={{ textAlign: 'justify' }}>Skills</h2>
          <div className="bg-white rounded-3xl px-12 py-10 hover:shadow-[0_0_30px_rgba(0,31,84,0.4)] transition-shadow duration-300">
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Python", "C++", "Java", "Web development", "Unity and C#", 
                "Computer Vision", "Generative AI", "Deep Learning", "AWS", "Android Studio", "Databases",
                 "Natural Language Processing", "Flask", "Tensorflow","Docker"
              ].map((skill) => (
                <span 
                  key={skill} 
                  className="bg-[#001F54] text-[#F5F5DC] rounded-full px-4 py-2 text-[14px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="min-h-screen flex items-center justify-center px-8 py-24">
  <div className="max-w-6xl w-full">
    <h2 className="text-black mb-12 text-[32px]" style={{ textAlign: 'justify' }}>Projects</h2>

    {(() => {
      const projects = [
        {
          num: 1,
          title: "Medicam: A Medicine Scanning App",
          image:
            "CV Poster.png",
          description:
            "Medicam, a comprehensive platform comprising a website and mobile application is where users can upload images of medicine packets to retrieve information about its uses, side effects, and composition. Deployed on a Flask backend with React data to train the application was gathered from various medical online sources on the internet. This project was recognized at Saavishkar, hosted by the IEEE Computer Society and NMIMS MPSTME Mumbai, developed my experience in modern web development technologies and computer vision",
          technologies: ["React", "Android Studio", "PaddleOCR", "Flask"],
        },
        {
          num: 2,
          title: "Hospital Management Portal",
          image:
            "Hospital Management Portal.png",
          description:
            "Developed a comprehensive web platform for a hospital aimed at facilitating seamless communication between doctors, hospital staff, and patients. The platform enables patients to easily access their diagnostic reports, schedule appointments, and make hospital payments, significantly enhancing the overall patient experience. Additionally, it streamlines doctor-patient communication by providing an intuitive interface, ensuring efficient interactions and improved service delivery across the healthcare facility. Presented at Cyber Cypher 3.0 hackathon. ",
          technologies: ["HTML", "CSS", "JavaScript", "Node", "AngularJS"],
        },
        {
          num: 3,
          title: "XR French Language Learning App",
          image:
            "XR French Learning App.png",
          description:
            "Developed an interactive and engaging learning experience for beginner French learners, designed to improve their communication and pronunciation skills. The project involved creating a virtual world with free navigation and interactive elements, where users could engage with objects and receive French names of the items through immersive haptic feedback. To further assess language proficiency, a quiz was incorporated at the end of the game.",
          technologies: ["Oculus", "Unity", "C#", "Meta All in One SDK"],
        }
      ];

      return (
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.num}>
              <ImageWithFallback
                src={project.image}
                alt={`Project ${project.num}`}
                className="w-full h-48 object-cover rounded-3xl mb-4"
              />

              <div className="bg-white rounded-3xl px-8 py-6 hover:shadow-[0_0_30px_rgba(0,31,84,0.4)] transition-shadow duration-300">
                <h4 className="text-black mb-3 text-[26px]" style={{ textAlign: 'justify' }}>
                  {project.title}
                </h4>

                <p className="text-gray-700 mb-4 text-[18px]" style={{ textAlign: 'justify' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#001F54] text-[#F5F5DC] rounded-full px-3 py-1 text-[14px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>  
              </div>
            </div>
          ))}
        </div>
      );
    })()}
  </div>
</section>


      {/* Publications Section */}
      <section id="publications" className="min-h-screen flex items-center justify-center px-8 py-24">
        <div className="max-w-4xl w-full">
          <h2 className="text-black mb-12 text-[32px]" style={{ textAlign: 'justify' }}>Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index)=>(
              <div 
                key={index}
                className="bg-white rounded-3xl px-12 py-6 hover:shadow-[0_0_30px_rgba(0,31,84,0.4)] transition-shadow duration-300"
              >
                <h4 className="text-black mb-2 text-[26px]" style={{ textAlign: 'justify' }}>{pub.title}</h4>
                <p className="italic text-[18px] text-gray-600 mb-3" style={{ textAlign: 'justify' }}>{pub.journal}</p>
                <p className="text-gray-700 mb-4 text-[18px]" style={{ textAlign: 'justify' }}>
                  {pub.description}
                </p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#001F54] hover:text-[#001F54]/80 transition-colors"
                      >
                        <FileText className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Publication</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center justify-center px-8 py-24">
        <div className="max-w-5xl w-full">
          <h2 className="text-black mb-12 text-[32px]" style={{ textAlign: 'justify' }}>Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) =>(
              <div 
                key={index}
                className="bg-white rounded-3xl px-8 py-6 hover:shadow-[0_0_30px_rgba(0,31,84,0.4)] transition-shadow duration-300"
              >
                <h4 className="text-black mb-2 text-[26px]" style={{ textAlign: 'justify' }}>{cert.title}</h4>
                <p className="text-gray-600 mb-4 text-[18px]" style={{ textAlign: 'justify' }}>{cert.issuer}</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#001F54] hover:text-[#001F54]/80 transition-colors"
                      >
                        <Award className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Certificate</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact-me" className="min-h-screen flex items-center justify-center px-8 py-24">
        <div className="max-w-2xl w-full">
          <h2 className="text-black mb-12 text-[32px]" style={{ textAlign: 'justify' }}>Contact Me</h2>
          <div className="bg-white rounded-3xl px-12 py-10 hover:shadow-[0_0_30px_rgba(0,31,84,0.4)] transition-shadow duration-300">
            <div className="space-y-6">
              <div style={{ textAlign: 'justify' }}>
                <p className="text-gray-600 mb-1 text-[16px]">Email</p>
                <a href="mailto:your.email@example.com" className="text-[#001F54] hover:text-[#001F54]/80 text-[18px]">
                  yashkarande77@gmail.com
                </a>
              </div>
              <div style={{ textAlign: 'justify' }}>
                <p className="text-gray-600 mb-1 text-[16px]">Location</p>
                <p className="text-gray-700 text-[18px]">Mumbai, Maharshtra, India</p>
              </div>
              <div className="flex gap-6 pt-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.linkedin.com/in/yash-karande-840bab336/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#001F54] hover:text-[#001F54]/80 transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#001F54] hover:text-[#001F54]/80 transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}