export default function Experience() {
  const experiences = [
    {
      title: 'Assistant Professor',
      company: 'Lovely Professional University, Phagwara, Punjab',
      period: 'August 2023 - Present',
      type: 'Current',
      highlights: [
        'Teaching and research in AI, IoT, and Blockchain',
        'Guiding PhD and Master\'s level students',
        'Contributing to faculty development programs'
      ]
    },
    {
      title: 'Teaching Assistant',
      company: 'Sharda University, Greater Noida',
      period: 'September 2019 - December 2024',
      highlights: [
        'Managing seminars, conferences, and PhD research club',
        'Teaching MBA/BBA/LLB students (Online/Offline/Hybrid)',
        'Conducting examinations and academic evaluations',
        'Managing university events and publications'
      ]
    },
    {
      title: 'Deputy Manager',
      company: 'HDFC Bank Ltd, New Delhi',
      period: 'August 2015 - July 2018',
      highlights: [
        'Managed team of associates and network partners',
        'Generated business volume from existing clients',
        'Created brand awareness and cross-sold banking products',
        'Best outperformer in 2015 recruitment batch'
      ]
    },
    {
      title: 'Assistant Manager',
      company: 'Earth Infra Pvt. Ltd, Noida',
      period: 'July 2013 - July 2015',
      highlights: [
        'Team management and client relationship building',
        'Business development and brand awareness',
        'Created volume from existing clients'
      ]
    },
    {
      title: 'Professional Consultant (Freelance)',
      company: 'Self-employed',
      period: 'July 2013 - August 2019',
      highlights: [
        'Real Estate (Plots, Flats, Apartments, Commercial)',
        'Advertising (ATL, BTL, Mall Activation)',
        'Financial Advisory (Investment, Insurance, Mutual Funds)',
        'Travel Consulting (Specialized in Dubai)'
      ]
    },
    {
      title: 'Sales Executive',
      company: 'VKM Logistics Pvt. Ltd, New Mumbai',
      period: 'December 2012 - June 2013',
      highlights: [
        'Consulted new clients and understood requirements',
        'Created volume from existing clients',
        'Managed client relationships',
        'Participated in international trade exhibitions'
      ]
    }
  ]

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Experience</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                <p className="text-primary font-medium mt-1">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-accent">{exp.period}</p>
                {exp.type && <p className="text-xs text-muted-foreground mt-1">{exp.type}</p>}
              </div>
            </div>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-muted-foreground flex gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
