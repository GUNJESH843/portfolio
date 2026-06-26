import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Award, ExternalLink, Calendar, Building2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const leetcodeBadges = [
  { 
    image: '/images/Knight.gif',
    title: 'Knight Badge',
    description: 'Achieved Knight status on LeetCode'
  },
  { 
    image: '/images/2025-365.gif',
    title: '2025 Annual Badge',
    description: '365 days streak in 2025'
  },
  { 
    image: '/images/2025-200.gif',
    title: '200 Days Badge 2025',
    description: 'Solved problems for 200 days'
  },
  { 
    image: '/images/2024-100.gif',
    title: '100 Days Badge 2024',
    description: 'Solved problems for 100 days'
  },
  { 
    image: '/images/2025-100.gif',
    title: '100 Days Badge 2025',
    description: 'Continuing the streak in 2025'
  },
];

const professionalBadges = [
  {
    image: '/images/Solution_challenge.png',
    title: 'Solution Challenge',
    issuer: 'Google',
    date: 'January 2025',
    link: 'https://g.dev/gunjesh07'
  },
  {
    image: '/images/github-foundations.png',
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    date: 'January 2025',
    link: 'https://www.credly.com/badges/f9e1bbc7-6276-45b5-a5c8-f9959ece8e0c'
  },
  {
    image: '/images/ai-skills-challenge-april-2024.png',
    title: 'AI Skills Challenge',
    issuer: 'Microsoft',
    date: 'April 2024',
    link: 'https://learn.microsoft.com/en-us/users/gunjeshkumar-1959/achievements/uxyky8w3?ref=https%3A%2F%2Fwww.linkedin.com%2F'
  },
  {
    image: '/images/aws-academy-graduate-aws-academy-machine-learning-foundations.png',
    title: 'AWS ML Foundation',
    issuer: 'AWS',
    date: 'March 2025',
    link: 'https://www.credly.com/badges/d6d4dea1-3567-40b3-a27d-dfa05218f1b3/public_url'
  },
  {
    image: '/images/GOOGLE PALY ACADEMY.png',
    title: 'Store Listing Badge',
    issuer: 'Google Play',
    date: 'December 2023',
    link: 'https://www.credential.net/19f89513-ffe4-4a4c-8484-78e9a1e8d789'
  },
  {
    image: '/images/MICROSOFT.png',
    title: 'Learn Challenge',
    issuer: 'Microsoft Learn',
    date: 'June 2022',
    link: 'https://learn.microsoft.com/en-us/users/gunjeshkumar-1959/achievements?tab=credentials-tab'
  },
  {
    image: '/images/mlsa _logo.png',
    title: 'MLSA Alpha Badge',
    issuer: 'MLSA',
    date: 'October 2024',
    link: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/3c3ca556-ac37-4999-998b-d2ece7ffa532'
  },
  {
    image: '/images/gdsc_badge.png',
    title: 'Core Team Badge',
    issuer: 'GDSC',
    date: 'August 2023',
    link: 'https://developers.google.com/profile/u/gunjesh07'
  },
];

const certificates = [
  { 
    title: 'CS50x', 
    issuer: 'Harvard University', 
    year: '2024',
    date: '2024',
    description: 'Introduction to Computer Science - Comprehensive course covering algorithms, data structures, and programming fundamentals',
    skills: ['C', 'Python', 'SQL', 'JavaScript', 'HTML/CSS'],
    credentialId: '7f55ae1f-3570-4ae9-ac18-2fdf7a267136',
    image: '/images/CS50x.png',
    pdfLink: 'https://gunjesh.in/resources/cs50x.pdf',
    link: 'https://cs50.harvard.edu/certificates/7f55ae1f-3570-4ae9-ac18-2fdf7a267136',
    verified: true
  },
  { 
    title: 'GitHub Foundations', 
    issuer: 'GitHub', 
    year: '2025',
    date: 'January 2025 - January 2028',
    description: 'Fundamental concepts of Git and GitHub for version control and collaborative development',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    credentialId: 'f9e1bbc7-6276-45b5-a5c8-f9959ece8e0c',
    image: '/images/GITHUB_Foundation.png',
    pdfLink: 'https://gunjesh.in/resources/GitHubFoundations.pdf',
    link: 'https://www.credly.com/badges/f9e1bbc7-6276-45b5-a5c8-f9959ece8e0c',
    verified: true
  },
  { 
    title: 'AWS ML Foundation', 
    issuer: 'Amazon Web Services', 
    year: '2025',
    date: 'March 2025',
    description: 'Foundation of machine learning concepts and AWS ML services for cloud-based AI applications',
    skills: ['Machine Learning', 'AWS', 'Cloud Computing', 'AI'],
    credentialId: 'd6d4dea1-3567-40b3-a27d-dfa05218f1b3',
    image: '/images/aws.png',
    pdfLink: 'https://gunjesh.in/resources/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations_Badge20250310-26-tgl0kg.pdf',
    link: 'https://www.credly.com/badges/d6d4dea1-3567-40b3-a27d-dfa05218f1b3/public_url',
    verified: true
  },
  { 
    title: 'Software Engineering', 
    issuer: 'NPTEL', 
    year: '2024',
    date: 'November 2024',
    description: 'Software development lifecycle, design patterns, and engineering best practices',
    skills: ['Software Design', 'Design Patterns', 'SDLC', 'Testing'],
    credentialId: 'NPTEL24CS119S105290117603871196',
    image: '/images/Software Engineering NPTEL.jpg',
    pdfLink: 'https://gunjesh.in/resources/Software Engineering_NPTEL.pdf',
    link: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24CS119S105290117603871196',
    verified: true
  },
  { 
    title: 'API Fundamentals', 
    issuer: 'Postman', 
    year: '2024',
    date: 'August 2024',
    description: 'RESTful API design, testing, and documentation using Postman',
    skills: ['REST API', 'Postman', 'API Testing', 'Documentation'],
    credentialId: 'CxPoW1V3RQ-KbVyjBntqag',
    image: '/images/postman.jpeg',
    pdfLink: 'https://gunjesh.in/resources/Postman.pdf',
    link: 'https://api.badgr.io/public/assertions/CxPoW1V3RQ-KbVyjBntqag?identity__email=gunjesh843%40gmail.com',
    verified: true
  },
  { 
    title: 'Store Listing Certificates', 
    issuer: 'Google Play Academy', 
    year: '2023',
    date: 'December 2023 - December 2026',
    description: 'Android app development and Google Play Store listing optimization',
    skills: ['Android', 'Mobile Development', 'Google Play', 'App Store'],
    credentialId: '19f89513-ffe4-4a4c-8484-78e9a1e8d789',
    image: '/images/google_play_academy.png',
    pdfLink: 'https://gunjesh.in/resources/Google Play Academy.pdf',
    link: 'https://www.credential.net/19f89513-ffe4-4a4c-8484-78e9a1e8d789',
    verified: true
  },
  { 
    title: 'AI for Everyone', 
    issuer: 'IBM & edX', 
    year: '2024',
    date: 'April 2024',
    description: 'Introduction to artificial intelligence concepts and applications',
    skills: ['AI', 'Machine Learning', 'Data Science', 'IBM'],
    credentialId: '357baf51617342418b3604e14a75210f',
    image: '/images/AI_IBM_edx.png',
    pdfLink: 'https://gunjesh.in/resources/edxIBM.pdf',
    link: 'https://courses.edx.org/certificates/357baf51617342418b3604e14a75210f',
    verified: true
  },
  { 
    title: 'ML to Deep Learning', 
    issuer: 'ISRO', 
    year: '2022',
    date: 'July 2022',
    description: 'Machine Learning to Deep Learning: A Journey for Remote Sensing Data Classification',
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'Remote Sensing'],
    credentialId: 'ISRO-ML-2022',
    image: '/images/ML_ISRO.png',
    pdfLink: 'https://gunjesh.in/resources/Machine Learning to Deep Learning A Journey for Remote Sensing Data Classification.pdf',
    link: 'https://certificate.iirs.gov.in/',
    verified: true
  },
];

const CertificatesPage = () => {
  return (
    <div className="min-h-screen crt">
      <Navbar />
      
      <main className="pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Header */}
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-primary mb-4 md:mb-6">
              <Award className="w-4 h-4" />
              <span className="text-xs md:text-sm font-mono">Certifications & Achievements</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-3 md:mb-4 px-2">
              Professional <span className="text-gradient">Certifications</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              A comprehensive collection of certifications and achievements in software development, AI/ML, and cloud technologies.
            </p>
          </div>

          {/* LeetCode Section */}
          <section className="mb-12 md:mb-20">
            <div className="glass rounded-xl md:rounded-2xl overflow-hidden">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">leetcode-achievements.json</span>
              </div>
              <div className="p-4 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 md:mb-8">
                  <img
                    src="/images/leetcode.png"
                    alt="LeetCode"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="text-xl md:text-3xl font-display font-bold text-foreground mb-1 md:mb-2">
                      LeetCode Achievements
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-3">
                      Competitive programming badges and milestones
                    </p>
                    <Button variant="default" size="sm" asChild>
                      <a
                        href="https://leetcode.com/u/gunjesh843/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        View Profile <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
                  {leetcodeBadges.map((badge, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-3 md:p-4 rounded-lg md:rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover-lift"
                    >
                      <img
                        src={badge.image}
                        alt={badge.title}
                        className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-3 hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-xs md:text-sm font-semibold text-foreground text-center">
                        {badge.title}
                      </h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground text-center mt-1 hidden sm:block">
                        {badge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Professional Certifications */}
          <section>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <h2 className="text-xl md:text-3xl font-display font-bold">
                Professional Certifications
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="glass rounded-xl md:rounded-2xl overflow-hidden hover-lift group"
                >
                  {/* Certificate Image */}
                  <div className="relative h-36 md:h-48 bg-secondary/50 flex items-center justify-center p-3 md:p-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    {cert.verified && (
                      <div className="absolute top-2 right-2 md:top-3 md:right-3 flex items-center gap-1 text-accent text-[10px] md:text-xs bg-background/80 backdrop-blur-sm px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                        <CheckCircle className="w-2.5 h-2.5 md:w-3 md:h-3" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                    {/* Title */}
                    <h3 className="text-base md:text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="flex items-center gap-2 text-xs md:text-sm text-primary">
                      <Building2 className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{cert.issuer}</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{cert.date}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {cert.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-mono rounded bg-secondary text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-mono rounded bg-secondary text-muted-foreground">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-3 md:pt-4 border-t border-border space-y-2">
                      <p className="text-[10px] md:text-xs text-muted-foreground hidden md:block">
                        Credential ID: <span className="text-foreground font-mono">{cert.credentialId}</span>
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 text-xs md:text-sm py-1.5 md:py-2" asChild>
                          <a href={cert.pdfLink} target="_blank" rel="noopener noreferrer">
                            PDF
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 text-xs md:text-sm py-1.5 md:py-2" asChild>
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            Verify <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Badges Section */}
          <section className="mt-12 md:mt-20">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <h2 className="text-xl md:text-3xl font-display font-bold">
                Professional <span className="text-gradient">Badges</span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">Industry recognition and achievement badges</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {professionalBadges.map((badge, index) => (
                <div
                  key={index}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 hover-lift group text-center"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <img
                      src={badge.image}
                      alt={badge.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-sm md:text-lg font-display font-bold text-foreground mb-1 md:mb-2">
                    {badge.title}
                  </h4>
                  <p className="text-xs md:text-sm text-primary mb-1 md:mb-2">{badge.issuer}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground mb-3 md:mb-4">{badge.date}</p>
                  <Button variant="outline" size="sm" className="w-full text-xs md:text-sm" asChild>
                    <a href={badge.link} target="_blank" rel="noopener noreferrer">
                      View <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mt-12 md:mt-20">
            <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-display font-bold text-center mb-6 md:mb-8">
                Certification <span className="text-gradient">Statistics</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-display font-bold text-primary mb-1 md:mb-2">
                    {certificates.length}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Total Certificates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-display font-bold text-accent mb-1 md:mb-2">
                    {leetcodeBadges.length}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">LeetCode Badges</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-display font-bold text-primary mb-1 md:mb-2">
                    {certificates.filter(c => c.year === '2024').length}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Earned in 2024</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-display font-bold text-accent mb-1 md:mb-2">
                    100%
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Verified</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CertificatesPage;
