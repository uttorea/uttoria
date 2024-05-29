import "./frame-component1.css";

const FrameComponent1 = () => {
  return (
    <section className="frame-wrapper12">
      <div className="frame-parent33">
        <div className="need-help-lets-discuss-you-group">
          <h1 className="need-help-lets-container1">
            <p className="need-help1">Need Help?</p>
            <p className="lets1">{`Let's `}</p>
            <p className="discuss1">{`Discuss `}</p>
            <p className="your-vision1">Your Vision</p>
          </h1>
          <div className="whether-youre-seeking1">
            Whether you're seeking innovative solutions, collaboration
            opportunities, or simply have a query, our team is here to assist
            you every step of the way.
          </div>
        </div>
        <div className="frame-parent34">
          <div className="frame-parent35">
            <div className="name-group">
              <div className="name2">Name</div>
              <div className="rectangle-parent6">
                <div className="frame-child23" />
                <input
                  className="your-full-name2"
                  placeholder="Your full name"
                  type="text"
                />
              </div>
            </div>
            <div className="contact-group">
              <div className="contact2">{`Contact `}</div>
              <div className="rectangle-parent7">
                <div className="frame-child24" />
                <input
                  className="phno-name27"
                  placeholder="Phno. name"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="frame-parent36">
            <div className="frame-parent37">
              <div className="email-group">
                <div className="email2">Email</div>
                <div className="frame-parent38">
                  <div className="rectangle-parent8">
                    <div className="frame-child25" />
                    <div className="your-email-address22">
                      Your email address
                    </div>
                  </div>
                </div>
              </div>
              <div className="subject-group">
                <div className="subject2">{`Subject `}</div>
                <div className="rectangle-parent9">
                  <div className="frame-child26" />
                  <input
                    className="reason-for-the2"
                    placeholder="Reason for the message"
                    type="text"
                  />
                </div>
              </div>
            </div>
            {/* <input className="message2" placeholder="Message" type="text" /> */}
            <div className="message2">Message</div>
            <textarea
            style={{overflow: 'hidden',width: '100%', height: '150px', resize: 'none'}}
              className="frame-child27"
              placeholder="Write your message.."
              rows={10}
              cols={46}
              
            />
          </div>
          <button className="send-message-frame">
            <div className="send-message2">Send message</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
