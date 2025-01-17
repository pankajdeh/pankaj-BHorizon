import React from 'react'

const ContactMap = () => {

    const locationname = "Abu Dhabi, United Arab Emirates";
  const location = `https://maps.google.com/maps?q=${locationname}&t=k&z=10&ie=UTF8&iwloc=&output=embed`;

  return (
     <div className=" p-4 w-full h-full">
    <iframe
      src={location}
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  </div>
  )
}

export default ContactMap