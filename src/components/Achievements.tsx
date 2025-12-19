import { Trophy, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'Global Coding Club Selection',
      description:
        'Organized a competition for 300 members and was selected into the club called GLOBAL CODING CLUB.',
      duration: '6 days',
      icon: <Trophy className="text-yellow-500" size={32} />,
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Hackathon Team Lead',
      description:
        'Team Lead for a 7-member team in a project called Hackathon Management System',
      icon: <Users className="text-blue-600" size={32} />,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Milestones and accomplishments in my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`h-32 bg-gradient-to-br ${achievement.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10 bg-white/90 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
              </div>

              <div className="p-6">
                {achievement.duration && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                    {achievement.duration}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
