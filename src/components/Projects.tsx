import { FolderGit2, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Road Safety Index',
    description: 'AI-powered system analyzing dashboard camera footage to create safety metrics for road infrastructure.',
    image: 'https://gunjesh.in/images/road%20safety%20index.png',
    tags: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/VIZAGBOYS/CSRI_CRRI_ROAD_SAFETY_SCORE',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio built with clean design principles and smooth animations.',
    image: 'https://gunjesh.in/images/portfolio%20project.png',
    tags: ['HTML5', 'TailwindCSS', 'JavaScript'],
    github: 'https://github.com/gunjesh843/portfolio',
  },
  {
    title: 'E-Learning Platform',
    description: 'Comprehensive platform for students to access educational resources and track progress.',
    image: 'https://gunjesh.in/images/e-learning.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/VIZAGBOYS/Counselling_forms',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-tag">
            <FolderGit2 className="w-4 h-4" />
            #projects
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A collection of projects that showcase my skills in full-stack development, AI/ML, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button variant="glass" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="glass" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors font-mono link-underline"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
