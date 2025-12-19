import { ExternalLink, Github, Music, Heart, MapPin } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Vibesnehith',
      description:
        'Vibesnehith is a music platform with a clean user interface where users can play songs, control speed, and download tracks. It also allows easy searching by music name or movie name for a smooth listening experience.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/Varshithatangeti/VibeSnehit',
      github: 'https://github.com/Varshithatangeti/VibeSnehit',
      icon: <Music className="text-blue-600" size={32} />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Arogyasathi',
      description:
        'Developed a bilingual disease prediction system that suggests probable diseases based on 3 symptoms entered by the user. It provides disease details, tablets, food recommendations, and recovery tips in both Telugu and English.',
      techStack: ['Python', 'Machine Learning', 'Flask', 'HTML', 'CSS'],
      github: 'https://github.com/Varshithatangeti/Arogyasathi',
      icon: <Heart className="text-red-500" size={32} />,
      gradient: 'from-red-500 to-pink-500',
    },
    {
      title: 'Regional Accident Hotspot Finder',
      description:
        'Built an interactive Streamlit dashboard that identifies and visualizes accident-prone areas within a 50 km radius of any user-entered region using real-time geocoding and map visualization.',
      techStack: ['Python', 'Streamlit', 'Pandas', 'Geopy', 'Folium'],
      github: 'https://github.com/Varshithatangeti/Regional-Accident-Hotspot-Finder',
      icon: <MapPin className="text-green-500" size={32} />,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion
            for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10 bg-white/90 p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Visit</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
