import { MdArrowOutward } from "react-icons/md";
import "./styles/Certifications.css";

const certifications = [
  {
    title: "MongoDB Certified Associate Developer",
    link: "https://learn.mongodb.com/c/aNyUJDr_QgiYO17d6bo0uA",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    link: "https://www.credly.com/badges/ae2babab-5c37-4943-9510-93289cbb7720/public_url",
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <h2>
        My <span>Certifications</span>
      </h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            className="cert-card"
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            <div className="cert-card-title">{cert.title}</div>
            <div className="cert-card-link">
              View Credential <MdArrowOutward />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
