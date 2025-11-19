export default function Publications() {
  const publications = [
    {
      title: 'A Study on Digital Intelligence and Influencer Marketing for Sustainable Diversification of India\'s Retail Economy: A Qualitative Study',
      authors: 'Singh, M., Michael, R. A., Saheb, S. S., Yadav, P. S., Kiran, P. N., & Malhi, A.',
      venue: 'IGI Global Scientific Publishing',
      year: '2025',
      doi: 'https://doi.org/10.1002/masy.202300092'
    },
    {
      title: 'Artificial Intelligence of Things (AIoT)‐Enabled Personalized Banking: Investigating Intention to Adopt',
      authors: 'Malhi, A. S., Kovid, R. K., & Singh, T. P.',
      venue: 'Reshaping Intelligent Business and Industry: Convergence of AI and IoT at the Cutting Edge',
      year: '2024',
      doi: 'https://doi.org/10.1002/9781119905202.ch21'
    },
    {
      title: 'Assessing the Role of Digital Awareness in Promoting Polymer‐Based Sustainability',
      authors: 'Chaudhary, A. G., Vashisht, A., Shyam, H. S., Malhi, A. S., & Gupta, R.',
      venue: 'Macromolecular Symposia',
      year: '2024',
      doi: 'https://doi.org/10.1002/masy.202300092'
    },
    {
      title: 'Wearable Technologies for Health: Investigating Behavioral Intention to Adopt Cloud-Based Smartwatch',
      authors: 'Malhi, A.S., Kovid, R.K., Kanika',
      venue: 'Machine Intelligence and Data Science Applications (MIDAS 2022). Springer, Singapore',
      year: '2023',
      doi: 'https://doi.org/10.1007/978-981-99-1620-7_16'
    },
    {
      title: 'What Drives Adoption of Cloud-Based Online Games in an Emerging Market? An Investigation Using Flow Theory',
      authors: 'Malhi, A.S., Kovid, R.K., Dutta, A., Sijariya, R.',
      venue: 'Machine Intelligence and Data Science Applications. Springer, Singapore',
      year: '2022',
      doi: 'https://doi.org/10.1007/978-981-19-2347-0_60'
    },
    {
      title: 'Lab-Based Meat and Its Emergence In India',
      authors: 'Malhi, A. S. & Singh, R. K.',
      venue: 'Global Competitiveness Technological Disruption and Organizational Resilience. Kaav Publications',
      year: '2022',
      doi: 'https://Doi.Org/10.52458/9789391842307'
    }
  ]

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Publications</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>

      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <div key={idx} className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-200">
            <h4 className="text-lg font-bold text-foreground mb-2">{pub.title}</h4>
            <p className="text-muted-foreground text-sm mb-3">{pub.authors}</p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-muted-foreground">{pub.venue}</p>
                <p className="text-sm text-accent font-medium mt-1">{pub.year}</p>
              </div>
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-medium text-sm"
              >
                View Publication →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
