export default function About() {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">About</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed">
          I am an academician and researcher with a passion for cutting-edge technologies and education excellence. 
          My research interests span across Artificial Intelligence, Internet of Things (IoT), Blockchain, 
          Machine Intelligence, and their applications in business transformation.
        </p>
        
        <p className="text-lg text-muted-foreground leading-relaxed pt-6">
          Currently serving as an Assistant Professor at Lovely Professional University, I combine practical industry experience 
          with academic rigor. My background includes senior management roles at leading financial institutions and consulting expertise 
          across multiple domains including real estate, advertising, and financial services.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed pt-6">
          I am deeply committed to mentoring students, publishing impactful research, and contributing to the academic community through 
          faculty development programs and international conferences.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 pt-8">
        <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-200">
          <p className="text-sm text-muted-foreground mb-2">Expertise</p>
          <p className="text-lg font-semibold">AI & IoT Research</p>
          <p className="text-sm text-muted-foreground mt-3">Blockchain, Machine Learning, Digital Transformation</p>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-200">
          <p className="text-sm text-muted-foreground mb-2">Teaching</p>
          <p className="text-lg font-semibold">Academic Excellence</p>
          <p className="text-sm text-muted-foreground mt-3">MBA, BBA, LLB - National & International students</p>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-200">
          <p className="text-sm text-muted-foreground mb-2">Service</p>
          <p className="text-lg font-semibold">Research & Innovation</p>
          <p className="text-sm text-muted-foreground mt-3">Conference presentations, Publishing, Leadership</p>
        </div>
      </div>
    </section>
  )
}
