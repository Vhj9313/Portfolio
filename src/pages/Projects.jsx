export default function Projects() {
  const projects = [
    {
      title: 'StockZa - Finance Dashboard',
      description:
        'A modern stock dashboard built with React, Tailwind CSS, and real-time APIs like Alpha Vantage and Tradient.',
      tech: ['Svelte', 'Tailwind', 'Chart.js', 'API'],
      link: 'https://github.com/Vhj9313/stockza',
      live: 'https://calc-master-7uh5.vercel.app',
    },
    {
      title: 'CalcMaster - Multi-Purpose Calculator',
      description:
        'A powerful all-in-one calculator for scientific, finance, health, and date utilities built using SvelteKit and Tailwind CSS.',
      tech: ['Svelte', 'Tailwind', 'DateFns', 'Responsive UI'],
      link: 'https://github.com/Vhj9313/calcmaster',
      live: 'https://calc-master-six.vercel.app',
    },
    {
      title: 'FinDash - Real-time Finance Tracker',
      description:
        'A sleek financial dashboard built with React, Tailwind CSS, and Upstox/Alpha Vantage APIs for tracking Indian indices and stock prices.',
      tech: ['Svelte', 'Tailwind', 'Chart.js', 'Responsive UI'],
      link: 'https://github.com/Vhj9313/findash',
      live: 'https://finance-coral-ten.vercel.app/',
    },
    {
      title: 'Portfolio Website',
      description:
        'My personal portfolio showcasing my projects, tech stack, and contact details. Built with React and Tailwind.',
      tech: ['React', 'Tailwind', 'React Router'],
      link: 'https://github.com/Vhj9313/portfolio',
    },
  ];

  return (
    <section className="bg-gray-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 text-center mb-4">
          My Projects
        </h1>
        <p className="text-center text-gray-300 text-lg mb-12">
          Here are a few things I've built recently using React, Svelte, and modern tools.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-300 mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-3 py-1 rounded-full text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-2 space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  View Code →
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline text-sm"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
