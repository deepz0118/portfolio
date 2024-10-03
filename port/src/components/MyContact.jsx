import React from 'react'

const MyContact = () => {
  return (
    <>
    <div className='w-50 h-70'>
<div className="form-card1">
  <div className="form-card2">
    <form className="form">
      <p className="form-heading">Get In Touch</p>
      <div className="form-field">
        <input required placeholder="Name" className="input-field" type="text" />
      </div>
      <div className="form-field">
        <input required placeholder="Email" className="input-field" type="email" />
      </div>
      <div className="form-field">
        <input required placeholder="Subject" className="input-field" type="text" />
      </div>
      <div className="form-field">
        <textarea required placeholder="Message" cols={30} rows={3} className="input-field" defaultValue={""} />
      </div>
      <button className="sendMessage-btn">Send Message</button>
    </form>
  </div>
</div>
</div> 
 </>
  )
}
export default MyContact