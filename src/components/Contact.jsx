const socials = [
{ name: "Instagram", url: "https://www.instagram.com/callmesamu_1/" },
  { name: "Facebook",  url: "https://www.facebook.com/callmesamu1" },
  { name: "WhatsApp",  url: "https://wa.me/250738709591" }, // your number, no spaces
  { name: "LinkedIn",  url: "https://www.linkedin.com/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVyzhi65CRVW1tdPFVJ6Z6w%3D%3D" },
  { name: "X",         url: "https://x.com/S_a_m_u_18/photo" },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2>Let's Connect</h2>
      <p>Reach me on any of these platforms:</p>
      
     <div className="social-row">
        
        {/* Email is now a visual box, not a link */}
        <div className="social-btn email-visual">
          Email: ndanyuzwesamuel953@gmail.com
        </div>
        {/* 2. Social Media Links */}
        {socials.map((s) => (
          <a 
            key={s.name} 
            href={s.url} 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn"
          >
            {s.name}
          </a>
        ))}
      </div>
    </section>
  );
}