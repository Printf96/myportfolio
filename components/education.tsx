export default function Education() {
  const qualifications = [
    {
      degree: 'PhD',
      field: 'Doctoral Degree',
      institution: 'Sharda University, Greater Noida',
      year: '2024',
      status: 'Completed'
    },
    {
      degree: 'PGDM',
      field: 'Postgraduate Diploma in Management (Marketing & IT)',
      institution: 'IMS Ghaziabad',
      year: '2011',
      status: 'CGPA: 6.77'
    },
    {
      degree: 'BCA',
      field: 'Bachelor of Computer Applications',
      institution: 'IPEM Ghaziabad',
      year: '2007',
      status: '64.46%'
    }
  ]

  const certifications = [
    'IITK Blockchain Certificate Program (June 2025)',
    'Core Java Foundations (April 2025)',
    'Linux Training (April 2025)',
    'Fundamentals of Blockchain (April 2025)',
    'UGC NET Qualified (December 2018)',
    'NISM VA Certification (June 2017)',
    'NISM VI Certification (January 2016)',
    'IRDA Certification (September 2015)'
  ]

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Education</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>

      {/* Degrees */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-accent">Degrees</h3>
        <div className="space-y-4">
          {qualifications.map((qual, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground">{qual.degree}</h4>
                  <p className="text-primary font-medium mt-1">{qual.field}</p>
                  <p className="text-muted-foreground mt-2">{qual.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-accent">{qual.year}</p>
                  <p className="text-sm text-muted-foreground mt-1">{qual.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-accent">Professional Certifications</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-200">
              <p className="text-foreground font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
