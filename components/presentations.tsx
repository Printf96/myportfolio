export default function Presentations() {
  const conferences = [
    {
      title: '6th International Conference CSR & Sustainable Development',
      presentation: 'Why Indian Should Adopt Japan\'s Garbage Disposal System for A Longer Run to Achieve 12th Goal of the Sustainable Development Plan',
      organizer: 'Sharda University, Delhi, India',
      date: '10th – 11th October 2019',
      type: 'International'
    },
    {
      title: 'International Conference on Volatility, Uncertainty, Complexity, and Ambiguity in Business (IC-VUCA 2019)',
      presentation: 'Artificial Intelligence (AI) Enabled Organization Has Competitive Advantages In Cutthroat Environment (Red Ocean)',
      organizer: 'MIET, Meerut, India',
      date: '23rd -24th November 2019',
      type: 'International'
    },
    {
      title: 'International Conference on Computing, Communication & Intelligent System (ICCCIS-2021)',
      presentation: 'Recent Research Trends in AI and IoT',
      organizer: 'Sharda University, Greater Noida, India',
      date: '19th-20th February 2021',
      type: 'International'
    },
    {
      title: '2nd Research Clinic and Doctoral Consortium',
      presentation: 'A Study on Adoption of Cloud of things by Small and Medium Enterprises',
      organizer: 'FIIB, New Delhi & Taylor\'s University, Malaysia',
      date: '7th August 2021',
      type: 'International'
    },
    {
      title: 'International Conference on Digital Marketing Experiences (DIGMAR 2021)',
      presentation: 'Using Multi-Theory Model to Investigate Behavioral Intention to Use Cloud-Enabled Games',
      organizer: 'Jain (Deemed to be) University, Bangalore, India',
      date: '27th-29th October 2021',
      type: 'International'
    },
    {
      title: 'Machine Intelligence and Data Science Applications (MIDAS-2021)',
      presentation: 'What Drives Adoption of Cloud-based Online Games in an Emerging Market? An Investigation Using Flow Theory',
      organizer: 'Comilla University, Cumilla, Bangladesh',
      date: '26th-27th December 2021',
      type: 'International'
    }
  ]

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Presentations & Conferences</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>

      <div className="space-y-6">
        {conferences.map((conf, idx) => (
          <div key={idx} className="p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-foreground">{conf.title}</h4>
                <p className="text-accent font-medium text-sm mt-2">{conf.presentation}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                {conf.type}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>{conf.organizer}</p>
              <p>{conf.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
