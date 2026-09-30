const clientGroups = [
  ["Tamil Nadu", ["Indian Institute of Technology Chennai", "Madras Institute of Technology", "Government College of Technology Coimbatore", "Indian Institute of Information Technology Tiruchirappalli", "Bharat Electronics Ltd Chennai"]],
  ["Karnataka", ["Indian Institute of Science Bengaluru", "University of Mysore", "University Visvesvaraya College of Engineering"]],
  ["Kerala", ["National Institute of Technology Calicut", "Indian Naval Academy Kannur", "Government Engineering College Wayanad"]],
  ["New Delhi", ["Indian Institute of Technology Delhi", "National Institute of Technology Delhi", "National Physical Laboratory"]],
  ["Odisha", ["Indian Institute of Technology Bhubaneswar", "National Institute of Technology Rourkela", "Government Polytechnic Sambalpur"]],
  ["Rajasthan", ["Indian Institute of Technology Jodhpur", "Central Electronics Engineering Research Institute Pilani", "College of Technology and Engineering Udaipur"]],
  ["Uttar Pradesh", ["Indian Institute of Technology BHU", "Banaras Hindu University", "Motilal Nehru National Institute of Technology", "Aligarh Muslim University"]],
  ["Telangana", ["National Institute of Technology Warangal", "Kakatiya Institute of Technology & Science", "JNTUH University College of Engineering"]],
  ["Punjab & Chandigarh", ["Dr. B.R. Ambedkar National Institute of Technology", "Punjab Engineering College", "Advanced Training Institute Ludhiana"]],
  ["North East India", ["National Institute of Technology Silchar", "National Institute of Technology Agartala", "National Institute of Technology Sikkim", "National Institute of Technology Nagaland"]],
] as const;

export default function ClientsPage() {
  return (
    <main className="inner-page" id="top">
      <section className="page-hero editorial-hero clients-hero">
        <div>
          <p className="eyebrow">Educational & research community</p>
          <h1>Trusted across India’s engineering ecosystem.</h1>
          <p>
            Vi Microsystems supports universities, institutes of technology,
            polytechnics, government organisations, and industrial customers
            across India.
          </p>
        </div>
      </section>
      <section className="client-directory">
        <header>
          <p className="eyebrow">Selected institutions</p>
          <h2>A nationwide customer network.</h2>
          <p>
            The directory below presents selected institutions from the current
            customer list, grouped by region.
          </p>
        </header>
        <div className="client-groups">
          {clientGroups.map(([state, clients], index) => (
            <article key={state}>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{state}</h3>
              </div>
              <ul>
                {clients.map((client) => (
                  <li key={client}>{client}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
