import { Briefcase, Users, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Web Developer',
      organization: 'Global Coding Club, KIET',
      period: 'Nov 2022 - April 2026',
      description:
        'Responsible for the design development and maintenance of dynamic and scalable web applications utilizing Python, JavaScript, HTML and Node.js to deliver seamless functionality and exceptional user experience. Collaborate with cross-functional teams to integrate sophisticated machine learning algorithms, enhancing data analysis processes and supporting informed decision making.',
      icon: <Briefcase className="text-blue-600" size={24} />,
    },
    {
      title: 'Hackathon Mentor',
      organization: 'KIET',
      period: '2023',
      description:
        'Guided participants in problem-solving, coding strategies. Provided technical support and mentorship to teams, helping them implement innovative solutions. Fostered collaboration, teamwork, and time management among participants.',
      icon: <Users className="text-cyan-500" size={24} />,
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="text-blue-600 font-semibold flex items-center gap-2">
                      <Briefcase size={16} />
                      {exp.organization}
                    </span>
                    <span className="text-gray-600 flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
