import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'varshithatangeti@gmail.com',
      href: 'mailto:varshithatangeti@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9502285329',
      href: 'tel:+919502285329',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Varshitha Tangeti',
      href: 'https://www.linkedin.com/in/varshitha-tangeti-444214289/',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'Varshithatangeti',
      href: 'https://github.com/Varshithatangeti',
      color: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {contact.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{contact.label}</h3>
                  <p className="text-sm text-gray-600 break-words">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to start a project?
            </h3>
            <p className="text-blue-100 mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <a
              href="mailto:varshithatangeti@gmail.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
