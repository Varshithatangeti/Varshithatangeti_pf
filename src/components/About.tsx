import { Code2, Rocket, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate web developer with expertise in building innovative
              solutions using modern technologies and machine learning algorithms.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Rocket className="text-blue-600" size={24} />
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I specialize in creating dynamic and scalable web applications
                using Python, JavaScript, and modern web technologies. My expertise
                includes machine learning integration, full-stack development, and
                creating seamless user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I'm passionate about leveraging technology to solve real-world
                problems and continuously learning new technologies to stay at the
                forefront of web development.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <Code2 className="text-blue-600 mb-2" size={32} />
                <p className="text-sm font-semibold text-gray-900">Clean Code</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <Rocket className="text-cyan-500 mb-2" size={32} />
                <p className="text-sm font-semibold text-gray-900">Fast Deploy</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <Lightbulb className="text-yellow-500 mb-2" size={32} />
                <p className="text-sm font-semibold text-gray-900">Innovation</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center mb-4">
                    <div className="text-6xl font-bold text-blue-600">VT</div>
                  </div>
                  <p className="text-gray-600 italic">Your image here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
