import { Code2, Palette, Zap, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with best practices',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, user-friendly interfaces with attention to detail',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and ensuring smooth user experiences',
    },
    {
      icon: Smartphone,
      title: 'Responsive',
      description: 'Building seamless experiences across all devices and screen sizes',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref as any}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold gradient-text mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            About Me
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '0.1s' }}>
            Passionate frontend developer specializing in modern web technologies
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <Card className={`glass ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a frontend developer with a passion for creating engaging digital experiences. 
                With expertise in <span className="text-primary font-semibold">HTML, CSS, Bootstrap, Tailwind CSS, React, and TypeScript</span>, 
                I transform ideas into pixel-perfect, responsive websites. I believe in writing clean, 
                maintainable code and staying updated with the latest web technologies to deliver 
                exceptional results.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.title}
                className={`glass group hover:scale-105 transition-all duration-300 perspective-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
