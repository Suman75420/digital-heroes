import { Link, useLocation } from "react-router-dom";

function CharityDetails() {
  const location = useLocation();
  const charity = location.state?.charity;

  if (!charity) {
    return (
      <div style={styles.errorPage}>
        <h2>Charity not found</h2>
        <Link to="/charities" style={styles.backLink}>
          ← Back to Charities
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2>🦸 Digital Heroes</h2>

        <Link to="/charities" style={styles.link}>
          ← Back to Charities
        </Link>
      </header>

      <main style={styles.main}>
        <div style={styles.icon}>{charity.icon}</div>

       <h1 style={styles.title}>{charity.name}</h1> 

        <p style={styles.category}>{charity.category}</p>

        <p style={styles.description}>
          {charity.description}
        </p>

        <div style={styles.section}>
         <h2 style={styles.sectionTitle}>About this cause</h2>

          <p style={styles.sectionText}>
            Your contribution can help support meaningful initiatives and
            create a positive impact in the community.
          </p>
        </div>

        <div style={styles.section}>
         <h2 style={styles.sectionTitle}>Upcoming Events</h2> 

          <p style={styles.sectionText}>
            🎯 Charity golf day and community events will be announced here.
          </p>
        </div>

        <Link to="/signup" style={styles.button}>
          Support This Cause
        </Link>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    color: "#111827",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 6%",
    background: "white",
  },

  link: {
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: "600",
  },

  main: {
    maxWidth: "800px",
    margin: "auto",
    padding: "50px 20px",
    textAlign: "center",
  },

  icon: {
    fontSize: "70px",
  },

  category: {
    color: "#4f46e5",
    fontWeight: "600",
    fontSize: "18px",
  },

  title: {
  color: "#111827",
  fontSize: "38px",
  fontWeight: "800",
  marginBottom: "10px",
},

description: {
  color: "#374151",
  fontSize: "17px",
  fontWeight: "500",
  lineHeight: "1.7",
},

sectionTitle: {
  color: "#111827",
  fontSize: "22px",
  fontWeight: "800",
  marginBottom: "10px",
},
sectionText: {
  color: "#374151",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "1.6",
},

  section: {
    background: "white",
    padding: "25px",
    marginTop: "25px",
    borderRadius: "14px",
    textAlign: "left",
    boxShadow: "0 5px 18px #0000000d",
  },

  button: {
    display: "inline-block",
    marginTop: "30px",
    padding: "13px 22px",
    borderRadius: "8px",
    background: "#4f46e5",
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
  },

  errorPage: {
    padding: "50px",
    textAlign: "center",
  },

  backLink: {
    color: "#4f46e5",
    textDecoration: "none",
  },
};

export default CharityDetails;