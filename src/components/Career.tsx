import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor&apos;s in Computer Science</h4>
                <h5>KL University</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              CGPA: 9.92. Building a strong foundation in core computer science
              with focused practice in Data Structures and Algorithms,
              problem-solving, and software development fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Being Infinity | DSA Instructor Mentor</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Worked as a DSA instructor mentor and software developer.
              Developed their website and recently implemented payment
              integration to support smoother user onboarding and transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
