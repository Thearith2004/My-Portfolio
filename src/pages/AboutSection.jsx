function AboutSection() {
  return (
    <section id="about" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-slate-300 mb-6">
           I'm a web development enthusiast with a solid foundation in both frontend and backend technologies. I began with HTML, CSS, and JavaScript, and have since expanded my skills to include modern tools like React and Laravel. I'm now looking for an internship opportunity to apply my knowledge, learn from experienced developers, and contribute to real-world projects.
          </p>

          <p className="text-slate-300 mb-6">
            I'm currently seeking an internship opportunity where I can apply my skills, learn from experienced
            professionals, and contribute to meaningful projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Education</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Serymongkol High School</p>
                  <p className="text-slate-400">2022</p>
                </li>
                <li>
                  <p className="font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-slate-400">AEU University, 2023</p>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Interests</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  <span>Frontend Development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  <span>Responsive Web Design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  <span>Backend Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
