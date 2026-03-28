import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-slate-300 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Contact Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-3">Teja Kiran</h3>
            <p><b>Contact No:</b> 1593578246</p>
            <p><b>Email:</b> frontendpro26@gmail.com</p>
            <p><b>Address:</b> KL University, Vaddeswaram, C-block C008</p>

            <p className="mt-2">
              <b>Instagram:</b>{" "}
              <a
                href="https://www.instagram.com/teja__kiran_/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-600 hover:underline"
              >
                teja__kiran_
              </a>
            </p>

            <p>
              <b>LinkedIn:</b>{" "}
              <a
                href="https://www.linkedin.com/in/teja-kiran-84b044386/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-600 hover:underline"
              >
                teja linked-in
              </a>
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-3">Jagan</h3>
            <p><b>Contact No:</b> 7896541224</p>
            <p><b>Email:</b> frontendpromax@gmail.com</p>
            <p><b>Address:</b> KL University, Vaddeswaram, C-block C008</p>

            <p className="mt-2">
              <b>Instagram:</b>{" "}
              <a
                href="https://www.instagram.com/advaith_suhas_/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-600 hover:underline"
              >
                __varma__01 
              </a>
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md md:col-span-2">
            <h3 className="text-lg font-semibold mb-3">Karthik</h3>
            <p><b>Contact No:</b> 7413698524</p>
            <p><b>Email:</b> frontendmegapromax@gmail.com</p>
            <p><b>Address:</b> KL University, Vaddeswaram, C-block C008</p>

            <p className="mt-2">
              <b>Instagram:</b>{" "}
              <a
                href="https://www.instagram.com/karthik_001k/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-600 hover:underline"
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