function SkillsSection() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 65 },
    { name: "PHP", level: 80 },
    { name: "Laravel", level: 80 },
    { name: "Tailwind CSS", level: 65 },
  ]

  return (
    <section id="skills" className="py-16 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            I've built a well-rounded skill set in web development, enabling me to create full-stack web applications—from responsive frontends to robust backends.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <div
                    className="bg-emerald-400 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Other Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "GitHub", "VS Code", "npm", "MySQL"].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-slate-800 rounded-md text-sm text-slate-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
