export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            <span className="text-foreground">Academic Researcher</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              & Educator
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            PhD-qualified Assistant Professor specializing in AI, IoT, and Blockchain technologies. 
            Passionate about research, innovation, and nurturing the next generation of tech leaders.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-8">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
          >
            Get in Touch
          </a>
          <a
            href="#publications"
            className="px-8 py-3 rounded-lg bg-card hover:bg-card/80 border border-border text-foreground font-semibold transition-all duration-200"
          >
            View Publications
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-12 sm:flex sm:gap-12">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-accent">15+</p>
            <p className="text-sm text-muted-foreground mt-2">Research Publications</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-accent">8+</p>
            <p className="text-sm text-muted-foreground mt-2">International Presentations</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-accent">2+</p>
            <p className="text-sm text-muted-foreground mt-2">Years as Professor</p>
          </div>
        </div>
      </div>
    </section>
  )
}
