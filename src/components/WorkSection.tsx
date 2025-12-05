import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Road Safety Index',
    category: 'AI / Computer Vision',
    description: 'AI-powered system analyzing dashboard camera footage for road infrastructure safety metrics.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    tags: ['Python', 'TensorFlow', 'OpenCV'],
    link: 'https://github.com/VIZAGBOYS/CSRI_CRRI_ROAD_SAFETY_SCORE',
  },
  {
    number: '02',
    title: 'FarmVaidya AI',
    category: 'ML Pipelines',
    description: 'Large-scale AI pipelines for 100k+ multilingual agri-audio datasets with Gemini Pro integration.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
    tags: ['AI Pipelines', 'NLP', 'Gemini Pro'],
    link: '#',
  },
  {
    number: '03',
    title: 'E-Learning Platform',
    category: 'Full Stack',
    description: 'Comprehensive platform for students to access educational resources and track progress.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/VIZAGBOYS/Counselling_forms',
  },
];

export const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-20">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Featured Work</span>
          <h2 className="display-large mt-4">
            Selected <span className="serif-italic">Projects</span>
          </h2>
        </div>
        <span className="text-6xl md:text-8xl font-mono number-outline">({projects.length.toString().padStart(2, '0')})</span>
      </div>

      {/* Projects Grid */}
      <div className="space-y-32">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            data-hover
          >
            <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`relative overflow-hidden aspect-[4/3] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-8xl font-mono number-outline group-hover:text-primary transition-colors duration-500">
                    {project.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-primary">{project.category}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                
                <h3 className="display-medium group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg max-w-md">
                  {project.description}
                </p>

                <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono border border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center gap-2 text-sm uppercase tracking-widest ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
