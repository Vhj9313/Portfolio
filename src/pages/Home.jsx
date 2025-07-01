import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const techStack = [
    { icon: 'logos:html-5', label: 'HTML5' },
    { icon: 'logos:css-3', label: 'CSS3' },
    { icon: 'logos:javascript', label: 'JavaScript' },
    { icon: 'logos:react', label: 'React' },
    { icon: 'logos:svelte-icon', label: 'Svelte' },
    { icon: 'logos:tailwindcss-icon', label: 'Tailwind CSS' },
    { icon: 'mdi:github', label: 'GitHub' },
    { icon: 'logos:nodejs-icon', label: 'Node.js' },
    { icon: 'logos:git-icon', label: 'Git' },
  ];

  return (
    <section className="bg-gray-950 text-white flex items-center justify-center px-6 py-20 min-h-full">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-blue-400 drop-shadow-md">
          Hi, I'm Vaibhav
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-300 tracking-wide">
          Front-end Developer | React & Svelte Enthusiast
        </h2>

        <p className="text-gray-400 leading-relaxed text-base sm:text-lg md:text-xl mb-10">
          Dynamic Front-end Developer with 3.5+ years of experience, specializing in modern web
          technologies and user interface design. Proficient in HTML5, CSS3, and JavaScript, with a strong
          command of frameworks such as React and Svelte. Demonstrates exceptional problem-solving abilities
          and a keen eye for usability, ensuring high-quality web applications. Committed to leveraging
          technical expertise to create engaging and efficient user experiences while continuously refining
          skills in Git and Backend technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border border-blue-500 text-blue-400 px-6 py-3 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition"
          >
            Contact Me
          </Link>
        </div>

        {/* 👇 Clean Tech Stack */}
        <div className="mt-6">
          <h3 className="text-lg text-gray-400 font-semibold mb-4">Tech Stack</h3>
          <div className="flex justify-center flex-wrap gap-8 text-gray-300">
            {techStack.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <Icon icon={icon} className="text-3xl sm:text-4xl mb-1" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
