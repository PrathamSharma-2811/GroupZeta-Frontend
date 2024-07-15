import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#061d1a', marginTop: 'auto' }}>
      <div className="container p-4">
        <section className="d-flex justify-content-between" style={{ backgroundColor: '#5d665d' }}>
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <button className="text-white me-4" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <FaFacebookF />
            </button>
            <button className="text-white me-4" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <FaTwitter />
            </button>
            <button className="text-white me-4" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <FaGoogle />
            </button>
            <button className="text-white me-4" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <FaInstagram />
            </button>
            <button className="text-white me-4" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <FaLinkedin />
            </button>
          </div>
        </section>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
          <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '50px', backgroundColor: '#7c4dff', height: '2px' }} />
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">shopzeta.com</a>
      </div>
    </footer>
  );
};

export default Footer;
