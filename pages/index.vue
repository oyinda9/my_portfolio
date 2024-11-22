<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-opacity-50 bg-gray-900 backdrop-filter backdrop-blur-lg"
    >
      <div class="container mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold">Sholanke Precious</div>
          <div class="hidden md:flex space-x-4">
            <a
              v-for="item in navItems"
              :key="item"
              :href="`#${item.toLowerCase()}`"
              class="hover:text-purple-400 transition-colors duration-300"
            >
              {{ item }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      id="home"
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <div
          class="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-800 opacity-50"
        ></div>
        <div class="stars"></div>
        <div class="twinkling"></div>
      </div>
      <div class="z-10 text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
          SHOLANKE PRECIOUS
        </h1>
        <p
          class="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300"
        >
          Software-Developer (Frontend developer)
        </p>
        <div class="flex justify-center space-x-4">
          <a
            href="#projects"
            class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up animation-delay-600"
          >
            Explore My Work
          </a>
          <a
            href="/path-to-your-cv.pdf"
            download
            class="bg-transparent border-2 border-white hover:bg-white hover:text-purple-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up animation-delay-600"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-8 text-center font-poppins">
          About Me
        </h2>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/assets/WhatsApp Image 2024-10-26 at 09.14.48_760ac7e3.jpg"
              alt="sholanke precious"
              class="rounded-full w-[500px] h-[500px] object-contain mx-auto"
            />
          </div>
          <div class="md:w-1/2">
            <p class="text-lg mb-4">
              Hi ,I’m sholanke precious a passionate front-end developer with
              3–4 years of experience, skilled in creating responsive,
              user-friendly web applications. From designing intuitive
              interfaces to integrating APIs, I transform ideas into functional
              and seamless digital experiences. I specialize in modern
              frameworks like Vue.js, React, and tools like Tailwind CSS,
              delivering solutions that are both visually stunning and highly
              performant. My work ensures adaptability across devices and
              focuses on providing a smooth user experience.
            </p>
            <p class="text-lg mb-4">
              My goal is to build user-friendly interfaces that not only look
              great but also provide an exceptional user experience. I'm always
              eager to learn new technologies and improve my skills.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-8 text-center font-poppins">
          My Skills
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="bg-gray-700 rounded-lg p-6 text-center"
          >
            <component
              :is="skill.icon"
              class="w-12 h-12 mx-auto mb-4 text-purple-400"
            />
            <h3 class="text-xl font-semibold mb-2">{{ skill.name }}</h3>
            <div class="w-full bg-gray-600 rounded-full h-2.5">
              <div
                class="bg-purple-600 h-2.5 rounded-full"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center font-poppins">
          My Projects
        </h2>

        <!-- Frontend Development Projects -->
        <div class="mb-16">
          <h3 class="text-2xl font-semibold mb-8">Frontend Development</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="project in frontendProjects"
              :key="project.title"
              class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-100%pn object-cover"
              />
              <div class="p-6">
                <h4 class="text-xl font-bold mb-2">{{ project.title }}</h4>
                <p class="text-gray-400 mb-4">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-purple-400 hover:text-purple-300"
                  >View Project</a
                >
              </div>
            </div>
          </div>
        </div>


        <!-- Open Source Contributions -->
        <div>
          <h3 class="text-2xl font-semibold mb-8">Self-initiated projects </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in personalProject"
              :key="project.title"
              class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
            <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-100%pn object-cover"
              />
              <div class="p-6">
                <h4 class="text-xl font-bold mb-2">{{ project.title }}</h4>
                <p class="text-gray-400 mb-4">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-purple-400 hover:text-purple-300"
                  >View Project</a
                >
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Design Process Section -->
    <section id="design-process" class="py-20 bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center font-poppins">
          My Design Process
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(step, index) in designProcess"
            :key="index"
            class="bg-gray-700 rounded-lg p-6"
          >
            <div class="text-3xl font-bold text-purple-400 mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-gray-300">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-8 text-center font-poppins">
          Get In Touch
        </h2>
        <div class="max-w-md mx-auto">
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium mb-1"
                >Name</label
              >
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-1"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-1"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-8">
       
      <div class="absolute container mx-auto px-6 text-center">
        <div class="stars"></div>
        <div class="twinkling"></div>
        
        <p>&copy; 2024 Sholanke precious. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <component :is="social.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import nigs from "/public/images/nigsims.png";
import medadhere from "/public/images/dashetsM.png";
import shuttle from "/public/images/shuttle.png";
import enfedam_react from "/public/images/enfedam.png";
import enfedam_wordpress from "/public/images/enfedam(1).png";
import hbs from "/public/images/hs2.png";

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  CodeIcon,
  PaletteIcon,
  PenToolIcon,
  LayoutIcon,
  SmileIcon,
  Image,
} from "lucide-vue-next";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Design Process",
  "Contact",
];
const skills = [
  { name: "HTML, CSS", icon: "html5", level: 90 },
  { name: "JavaScript", icon: "js", level: 65 },
  { name: "React", icon: "react", level: 95 },
  { name: "TypeScript", icon: "typescript", level: 80 },
  { name: "Tailwind CSS", icon: "tailwindcss", level: 90 },
  { name: "Bootstrap", icon: "bootstrap", level: 85 },
  { name: "Responsive Design", icon: "layout", level: 95 },
  { name: "Node.js", icon: "nodejs", level: 80 },
  { name: "Python", icon: "python", level: 75 },
  { name: "GitHub", icon: "github", level: 85 },
  { name: "MySQL", icon: "mysql", level: 75 },
  { name: "MongoDB", icon: "mongodb", level: 65 },
  { name: "HandleBars", icon: "HandleBars", level: 45 },
  { name: "Vue", icon: "Vue", level: 75 },
  { name: "Nuxt.js", icon: "Nuxt.js", level: 80 },
  { name: "Webpack", icon: "webpack", level: 70 },
  { name: "Wordpress", icon: "wordpress", level: 70 },
];

const frontendProjects = [
  {
    title: " NIGSIMS (Agro-system E-commerce Platform)",
    description:
      "The NIGSIMS platform  is an innovative agricultural marketplace designed to transform Nigeria's agricultural landscape. Its primary focus is on fostering wealth creation and job opportunities for participants while enhancing the efficiency and accessibility of the agricultural seed supply chain. ",
      image: nigs, // Correct path
    link: "https://nigsims.ng/",
    technologies: ["Vue.js", "Vuex", "Node.js", "MongoDB"],
  },
  {
    title: "MEDADHER",
    description:
      "MedAdher is an adherence system designed to make managing treatment plans seamless for patients and caregivers. By leveraging cutting-edge Digital Adherence Technology (DAT), MedAdher provides an adaptive and affordable solution tailored to the needs of disease management programs.",
    image: medadhere,
    link: "https://medadher.com/",
    technologies: ["Vue.js", "Nuxt.js", "Chart.js"],
  },

  {
    title: "SHUTTLE",
    description:
      "Shuttle is an internal booking system designed to simplify staff movement and eliminate confusion or conflicts related to transportation. By providing a seamless and organized way to manage bookings, Shuttle ensures efficiency and clarity for both staff and administrators.",
    image: shuttle,
    link: " #",
    technologies: ["Vue.js", "Nuxt.js", "Material-icon", "Postman","Tailwind css"],
  },

  
];

const personalProject = [
{
    title: "ENFEDAM ACADEMY WEBSITE",
    description:
      "A simple , sleek and intuitive school landing page website designed to captivate visitors and provide essential information at a glance. This user-friendly platform serves as the perfect gateway to showcase the school’s values, programs, and achievements.",
    image: enfedam_react,
    link: " #",
    technologies: ["React",  "Material-icon", "Tailwind css"],
  },

  {
    title: "Enfedam Academy Website: An Advanced WordPress Redesign",
    description:
      "An advanced version of the Enfedam Academy website using WordPress, transforming it into a comprehensive school management system. The redesigned platform integrates dashboards for parents, students, and staff, making it a central hub for school activities and communication.",
    image: enfedam_wordpress,
    link: " http://just-test.local/",
    technologies: ["Wordpress" ,"Elementor"],
  },

  {
    title: "HOTEL RESERVATION SYSTEM",
    description:"This is a simple hotel reservation system that allows users to easily book rooms through an intuitive and interactive interface. ",
    image: hbs,
    link: " #",
    technologies: ["Html" ,"CSS", "Javasript"],
  },
];



const designProcess = [
  {
    title: "Requirement Gathering",
    description:
      "I start by understanding the project’s goals, user needs, and functional requirements to ensure the frontend aligns with the overall vision.",
  },
  {
    title: "Wireframing & Layout Design",
    description:
      "I create wireframes to map out the structure and layout of the user interface, establishing a clear hierarchy and user flow for the website or app.",
  },
  {
    title: "Responsive Design & Mobile-first Approach",
    description:
      "I focus on creating a responsive design that works seamlessly across all devices, with a mobile-first mindset to ensure a smooth experience for mobile users.",
  },
  {
    title: "UI Development & Component Creation",
    description:
      "I translate wireframes and designs into code, using HTML, CSS, and JavaScript to build reusable components and interactive elements.",
  },
  {
    title: "JavaScript & Framework Implementation",
    description:
      "I use modern JavaScript and frontend frameworks (like React, Vue, or Angular) to add interactivity, manage state, and handle client-side logic.",
  },
  {
    title: "Testing & Debugging",
    description:
      "I ensure the frontend works flawlessly by running tests, identifying bugs, and fixing issues across different browsers and devices.",
  },
  {
    title: "Performance Optimization",
    description:
      "I optimize the code for speed, ensuring fast load times and efficient rendering using techniques like lazy loading, code splitting, and caching.",
  },
  {
    title: "Collaboration with Backend Developers",
    description:
      "I work closely with backend developers to integrate APIs, ensure data flow, and manage any dynamic content, making sure everything functions smoothly.",
  },
  {
    title: "User Testing & Feedback",
    description:
      "I conduct user testing sessions to gather feedback, iterating on the frontend to enhance usability and meet user expectations.",
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Once the development is complete, I deploy the application and ensure that it remains up-to-date with regular maintenance and feature enhancements.",
  },
];

const socialLinks = [
  { name: "GitHub", icon: GithubIcon, url: "https://github.com" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com" },
  { name: "Twitter", icon: TwitterIcon, url: "https://twitter.com" },
];

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  // Here you would typically send the form data to a server
  console.log("Form submitted:", form.value);
  // Reset form after submission
  form.value = { name: "", email: "", message: "" };
  alert("Thank you for your message! I will get back to you soon.");
};

</script>

<style scoped>
.stars,
.twinkling {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: #000
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png") repeat
    top center;
  z-index: 0;
}

.twinkling {
  background: transparent
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png")
    repeat top center;
  z-index: 1;
  animation: move-twink-back 200s linear infinite;
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
