import { FolderGit2, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer } from './AnimatedSection';

const projects = [
  {
    title: 'Road Safety Index',
    description: 'AI-powered system analyzing dashboard camera footage to create safety metrics for road infrastructure using computer vision and machine learning.',
    image: 'https://gunjesh.in/images/road%20safety%20index.png',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv8'],
    github: 'https://github.com/VIZAGBOYS/CSRI_CRRI_ROAD_SAFETY_SCORE',
    live: 'https://github.com/VIZAGBOYS/CSRI_CRRI_ROAD_SAFETY_SCORE',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing projects and skills with elegant animations and interactive 3D elements.',
    image: 'https://gunjesh.in/images/portfolio%20project.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Three.js'],
    github: 'https://github.com/gunjesh843/portfolio',
    live: 'https://gunjesh.in',
  },
  {
    title: 'E-Learning Platform',
    description: 'Full-stack educational platform for course management, student enrollment, and progress tracking with real-time updates.',
    image: 'https://gunjesh.in/images/e-learning.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/VIZAGBOYS/Counselling_forms',
    live: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <AnimatedSection className="flex items-center gap-4 mb-8 md:mb-16">
          <span className="section-tag">
            <FolderGit2 className="w-4 h-4" />
            #projects
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </AnimatedSection>

        {/* Section Title */}
        <AnimatedSection animation="slide-left" className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-2xl">
            A collection of projects that showcase my skills in full-stack development, AI/ML, and modern web technologies.
          </p>
        </AnimatedSection>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={index}
              animation="scale"
              delay={index * 150}
              className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="glass rounded-2xl overflow-hidden hover-lift group h-full relative">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-primary via-accent to-primary animate-gradient" />
                </div>
                
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Floating project number */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-primary font-mono text-sm font-bold">0{index + 1}</span>
                  </div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <Button variant="glass" size="icon" className="hover:scale-110 transition-transform" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="glass" size="icon" className="hover:scale-110 transition-transform" asChild>
                      <a href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6 space-y-3 md:space-y-4 relative">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] md:text-xs font-mono rounded bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm text-primary hover:text-accent transition-colors font-mono link-underline"
                  >
                    <Github className="w-3 h-3 md:w-4 md:h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
