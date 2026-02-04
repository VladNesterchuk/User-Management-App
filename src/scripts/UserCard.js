import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaTelegramPlane , FaInstagram , FaLinkedin  } from "react-icons/fa";

class UserCard extends React.Component {
  
  render() {
    const {user, onClose} = this.props;

    if (!user) return null;

    return (
          <div className="user-modal-overlay" onClick={onClose}>
        <div className="user-modal" onClick={(e) => e.stopPropagation()}>
          <IoMdClose className="user-modal-close" onClick={onClose} />

         
          <div className="user-modal-header">
            <div>
              <h2 className="user-modal-title">
                {user.firstname} {user.lastname}
              </h2>
              <div className="user-modal-subtitle">{user.position}</div>
            </div>

            <div className="user-modal-chips">
              <span className="chip">Age: {user.age}</span>
              <span className="chip">
                {user.workExp ? "With work experience" : "Without work experience"}
              </span>
            </div>
          </div>

          <div className="user-modal-info">
            <div className="user-modal-row">
              <span className="label">Email:</span>
              <span className="value">{user.email}</span>
            </div>
          </div>
        <div className="user-modal-scroll">
          <div className="user-modal-bio">
            <div className="user-modal-section-title">Bio</div>
            <p>{user.bio}</p>
          </div>

          <div className="user-modal-social">
            <div className="user-modal-section-title">Social</div>

            <div className="social-icons">

              <a href="/" className="social-btn" onClick={(e) => e.preventDefault()} aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a href="/" className="social-btn" onClick={(e) => e.preventDefault()} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="/" className="social-btn" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
