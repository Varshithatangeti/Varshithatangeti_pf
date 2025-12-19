import {
  Code2,
  Database,
  Globe,
  Server,
  FileJson,
  GitBranch,
  BarChart3,
} from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: <Code2 size={32} />, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', icon: <FileJson size={32} />, color: 'from-yellow-400 to-yellow-500' },
    { name: 'Java', icon: <Code2 size={32} />, color: 'from-red-500 to-red-600' },
    { name: 'SQL', icon: <Database size={32} />, color: 'from-orange-500 to-orange-600' },
    { name: 'MongoDB', icon: <Database size={32} />, color: 'from-green-500 to-green-600' },
    { name: 'REST API', icon: <Globe size={32} />, color: 'from-purple-500 to-purple-600' },
    { name: 'Postman', icon: <Server size={32} />, color: 'from-orange-400 to-orange-500' },
    { name: 'GitHub', icon: <GitBranch size={32} />, color: 'from-gray-700 to-gray-800' },
    { name: 'Node.js', icon: <Server size={32} />, color: 'from-green-600 to-green-700' },
    { name: 'Express.js', icon: <Server size={32} />, color: 'from-gray-600 to-gray-700' },
    { name: 'HTML', icon: <Code2 size={32} />, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: <Code2 size={32} />, color: 'from-blue-400 to-blue-500' },
    { name: 'Machine Learning', icon: <BarChart3 size={32} />, color: 'from-cyan-500 to-blue-600' },
    { name: 'NumPy', icon: <BarChart3 size={32} />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Pandas', icon: <BarChart3 size={32} />, color: 'from-purple-500 to-blue-500' },
    { name: 'Matplotlib', icon: <BarChart3 size={32} />, color: 'from-red-500 to-yellow-500' },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
