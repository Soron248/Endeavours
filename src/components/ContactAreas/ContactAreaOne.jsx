import React, { useState } from "react";
import { CONTACT_SHAPE } from "../../lib/assets";

export const ContactAreaOne = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [msg, setMsg] = useState("")

  const postCotacts = async (data)=>{

    try {
      const res = await fetch("https://endeavours.pythonanywhere.com/api/customers/",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if(res.status === 201){
        setMail("")
        setMsg("")
        setName("")
        setPhone("")
        setSubject("")
        alert("contact submitted successfully")
      }
    } catch (error) {
      console.log(error.msg)
      alert("Sorry try again latter..")
    }
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(name,mail,phone,subject,msg)

    const bodyData = {
      name: name,
      email: mail,
      phone_number: phone,
      messages: [
        {
          subject: subject,
          message: msg
        }
    ]
    }

    postCotacts(bodyData)
  }

  return (
    <section className="contact-area contact-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="contact-content">
              <div className="section-title mb-30 tg-heading-subheading animation-style2">
                <span className="sub-title tg-element-title">GET IN TOUCH</span>
                <h2 className="title tg-element-title">
                  We Are Connected To Help Your Business!
                </h2>
              </div>
              <p>
              Get in Touch for Personalized Support
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form">
              <form action="#" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="text" placeholder="Name *" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="email" placeholder="E-mail *" value={mail} onChange={(e)=>setMail(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="number" placeholder="Phone *" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input type="text" placeholder="Subject *" value={subject} onChange={(e)=>setSubject(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-grp">
                      <textarea placeholder="Comments *" value={msg} onChange={(e)=>setMsg(e.target.value)} ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit">Submit Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="contact-shape">
        <img src={CONTACT_SHAPE} alt="" />
      </div> */}
    </section>
  );
};
