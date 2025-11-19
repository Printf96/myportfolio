export default function Skills() {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: '💻',
      skills: ['MS Access', 'Oracle 8i', 'SPSS v21', 'SMART PLS v4.0', 'Tableau', 'Python', 'SQL', 'HTML/CSS', 'C/C++', 'Visual Basic']
    },
    {
      title: 'Research & Analytics',
      icon: '📊',
      skills: ['Data Analysis', 'Statistical Modeling', 'Qualitative Research', 'Academic Publishing', 'Literature Review', 'SEM Analysis']
    },
    {
      title: 'Technologies',
      icon: '⚙️',
      skills: ['Artificial Intelligence', 'Internet of Things (IoT)', 'Blockchain', 'Machine Learning', 'Cloud Computing', 'Digital Transformation']
    },
    {
      title: 'Soft Skills',
      icon: '🎯',
      skills: ['Leadership', 'Public Speaking', 'Problem Solving', 'Team Management', 'Academic Writing', 'Mentoring', 'Project Management']
    },
    {
      title: 'Languages',
      icon: '🗣️',
      skills: ['English', 'Hindi', 'Punjabi', 'German (Basic)']
    },
    {
      title: 'Specializations',
      icon: '🔬',
      skills: ['AI in Business', 'IoT Applications', 'Blockchain Technology', 'Digital Banking', 'Innovation Management', 'Sustainable Development']
    }
  ]

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Skills & Expertise</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-200">
            <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span>{category.icon}</span>
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
