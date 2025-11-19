import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float preserve-3d" 
             style={{ transform: 'rotateX(45deg) rotateY(45deg)' }} />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-accent/30 rounded-full animate-float-slow" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-primary/20 rotate-45 animate-float" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg animate-float-slow" 
             style={{ animationDelay: '0.5s', transform: 'rotateX(30deg)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-lg text-muted-foreground">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text">
              Frontend Developer
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80">
              Crafting beautiful, responsive web experiences with modern technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React', 'TypeScript'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" 
               style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-in-up" 
               style={{ animationDelay: '0.6s' }}>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all">
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};
