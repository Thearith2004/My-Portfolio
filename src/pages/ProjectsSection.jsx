"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website with Backend",
      description: "A full-featured online store with product catalog, shopping cart, and payment integration.",
      image: "http://localhost:5173/images/electronic_shop2.jpg?height=400&width=600",
      category: "backend",
      technologies: ["HTML","CSS", "JS", "PHP", "laravel", "MySQL"],
      github: "https://github.com/Thearith2004/laravel_online_shop",
      demo: "#",
    },
    {
      id: 2,
      title: "Front E-Commerce",
      description: "A responsive website with frontend",
      image: "http://localhost:5173/images/electronic_shop.jpg?height=400&width=600",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Thearith2004/front-electronic-shop",
      demo: "https://front-electronic-shop-git-thearith007-thearith2004s-projects.vercel.app/",
    },
    {
      id: 3,
      title: "PHP Project News",
      description: "A website news with more category.",
      image: "/http://localhost:5173/images/news.jpg?height=400&width=600",
      category: "backend",
      technologies: ["HTML","CSS", "JS", "PHP", "MySQL"],
      github: "https://github.com/Thearith2004/php-project-news",
      demo: "#",
    },
    {
      id: 4,
      title: "Fronted movie website",
      description: "A website movie tamplate like Major Cineplex",
      image: "http://localhost:5173/images/movie.jpg?height=400&width=600",
      category: "frontend",
      technologies: ["HTML","CSS","Bootstrap", "JavaScript"],
      github: "https://github.com/Thearith2004/front-movie",
      demo: "https://front-movie-thearith2004s-projects.vercel.app/",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const filters = [
    { name: "All", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Backend", value: "backend" },
    { name: "Full Stack", value: "fullstack" },
  ]

  return (
    <section id="projects" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that demonstrate my skills and growth as a developer.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-emerald-400 uppercase font-medium">
                    {project.category === "fullstack"
                      ? "Full Stack"
                      : project.category === "frontend"
                        ? "Frontend"
                        : "Backend"}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
