import React from "react";
import '../styles/certifications.css'
import ibmCert from "../assets/certificates/ibm-certificate.png";

function Certifications() {
  return (
    <div className="certifications-page">
      <h1>Certifications</h1>

      <div className="cert-card">
        <img src={ibmCert} alt="IBM Certificate" />

        <h3>IBM AI Developer - Coursera</h3>
      </div>
    </div>
  );
}

export default Certifications;