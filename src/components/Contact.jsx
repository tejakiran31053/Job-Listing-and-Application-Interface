import React from "react";

const Contact = () => {
  return (
    <div className="contact-theme">
      <div className="container">
        <h2 style={{ marginBottom: "2rem" }}>Contact Details</h2>

        <div className="contact-grid">
          <div className="card">
            <h3>Teja Kiran</h3>
            <p><b>Contact No:</b> 1593578246</p>
            <p><b>Email:</b> frontendpro26@gmail.com</p>
            <p><strong>Address:</strong> KL University, Vaddeswaram, C-block C008</p>

            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/teja__kiran_/"
                target="_blank"
                rel="noreferrer"
              >
                teja__kiran_
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/teja-kiran-84b044386/"
                target="_blank"
                rel="noreferrer"
              >
                teja linked-in 
              </a>
            </p>
          </div>

          <div className="card">
            <h3>Jagan</h3>
            <p><b>Contact No:</b> 7896541224</p>
            <p><b>Email:</b> frontendpromax@gmail.com</p>
            <p><b>Address:</b> KL University, Vaddeswaram, C-block C008</p>

            <p>
             <b>Instagram:</b>{" "}
              <a
                href="https://www.instagram.com/advaith_suhas_/"
                target="_blank"
                rel="noreferrer"
              >
                advaith_suhas_
              </a>
            </p>
          </div>

          <div className="card">
            <h3>Karthik</h3>
            <p><b>Contact No:</b> 7413698524</p>
            <p><b>Email:</b> frontendmegapromax@gmail.com</p>
            <p><b>Address:</b> KL University, Vaddeswaram, C-block C008</p>

            <p>
              <b>Instagram:</b>{" "}
              <a
                href="https://www.instagram.com/karthik_001k/"
                target="_blank"
                rel="noreferrer"
              >
                karthik_001k
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
