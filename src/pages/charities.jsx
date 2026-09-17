import { useState } from "react";
import { Link } from "react-router-dom";

const charityList = [
  {
    name: "Education for All",
    category: "Education",
    description: "Helping children access learning and educational resources.",
    icon: "📚",
  },
  {
    name: "Healthy Lives",
    category: "Healthcare",
    description: "Supporting healthcare access for communities in need.",
    icon: "❤️",
  },
  {
    name: "Green Earth",
    category: "Environment",
    description: "Protecting nature and creating a greener future.",
    icon: "🌱",
  },
  {
    name: "Animal Care",
    category: "Animal Welfare",
    description: "Supporting animal rescue and welfare initiatives.",
    icon: "🐾",
  },
];

function Charities() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCharities = charityList.filter((charity) => {
    
     const searchText = search.toLowerCase();

     const matchesSearch =
     charity.name.toLowerCase().includes(searchText) ||
     charity.category.toLowerCase().includes(searchText) ||
     charity.description.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || charity.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2 color="#008000 ">🦸 Digital Heroes</h2>
        <Link to="/" style={styles.link}>Home</Link>
      </header>

      <main style={styles.main}>
        <h1>Charity Directory</h1>
        <p style={styles.subtitle}>
          Discover causes and choose how you want to make a difference.
        </p>

        <div style={styles.filters}>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search charities..."
            style={styles.input}
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            style={styles.input}
          >
            <option>All</option>
            <option>Education</option>
            <option>Healthcare</option>
            <option>Environment</option>
            <option>Animal Welfare</option>
          </select>
        </div>

        <div style={styles.grid}>
          {filteredCharities.map((charity) => (
            <article key={charity.name} style={styles.card}>
              <div style={styles.icon}>{charity.icon}</div>
             <h2 style={styles.cardTitle}>{charity.name}</h2>
              <p style={styles.category}>{charity.category}</p>
              <p style={styles.cardDescription}>{charity.description}</p>
              <div style={styles.actions}>
             <Link
               to="/charity-details"
               state={{ charity }}
              style={styles.detailsButton}
             >
              View Details
             </Link>

             <Link to="/signup" style={styles.button}>
             Support This Cause
             </Link>
            </div>
            </article>
          ))}
        </div>

        {filteredCharities.length === 0 && (
          <p>No charities match your search.</p>
        )}

        <p style={styles.note}>
          Sample charity listings for demonstration. These are not verified
          organizations or live donation links.
        </p>
      </main>
    </div>
  );
}


const styles = {
  
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    color: "#0d172e",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 6%",
    background: "#ffffff",
    color: "#111827",
  },
  main: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "35px 20px",
    color: "#111827",
  },
  subtitle: {
    color: "#4b5563",
    marginBottom: "25px",
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "25px",
  },
  input: {
    color: "#111827",
    flex: "1",
    minWidth: "200px",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    background: "#ffffff",
    fontSize: "15px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    color: "#111827",
    padding: "24px",
    borderRadius: "14px",
    boxShadow: "0 5px 18px #0000000d",
  },
  icon: {
    fontSize: "35px",
  },
  cardTitle: {
    color: "#111827",
    fontSize: "21px",
    fontWeight: "800",
    marginBottom: "8px",
  },
  category: {
    color: "#4338ca",
    fontWeight: "800",
    fontSize: "14px",
    marginBottom: "10px",
  },
  cardDescription: {
    color: "#374151",
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "1.6",
  },
  actions: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "12px",
  },
  detailsButton: {
    display: "inline-block",
    padding: "11px 15px",
    borderRadius: "8px",
    border: "1px solid #4f46e5",
    color: "#4338ca",
    background: "#ffffff",
    textDecoration: "none",
    fontWeight: "700",
  },
  button: {
    display: "inline-block",
    marginTop: "12px",
    padding: "11px 15px",
    borderRadius: "8px",
    background: "#4338ca",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "700",
  },
  link: {
    color: "#4338ca",
    textDecoration: "none",
    fontWeight: "700",
  },
  note: {
    marginTop: "25px",
    fontSize: "13px",
    color: "#4b5563",
  },

  cardTitle: {
  color: "#111827",
  fontSize: "21px",
  fontWeight: "800",
  marginBottom: "8px",
},

cardDescription: {
  color: "#374151",
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "1.6",
},
};

export default Charities;