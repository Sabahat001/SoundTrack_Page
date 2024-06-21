// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <section classNmae="Nav">
        <div className="main-nav">
          <div className="logos">
            <img className="logo" src="img/logo.svg" alt="" />
            <div className="titles">
              <p className="title">How it Works</p>
              <p className="title">Library</p>
              <p className="title">Pricing</p>
            </div>
          </div>
          <div className="buttons">
            <button className="signup" >Sign Up</button>
            <div className="login-div">
              <button className="login">login</button></div>
          </div>
        </div>
      </section>


      <section className="Hero-section">
        <div className="hero-div">
          <div className="hero-grid">
            <div className="hero-heading">
              <h1 className="hero-head">Let’s Connect <br /> with Your Visitors  <br />in Real Time</h1>
              <p className="hero-para">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="hero-img">
              <img className="img4" src="img/heroimg.svg" alt="" />
            </div>
            <div className="hero-images">
              <img className="img2" src="img/Group 19.svg" alt="" />
              <img className="img1" src="img/Group 41.svg" alt="" />
            </div>
            <div className="hero-img-2">
              <img className="img3" src="img/Group 42.svg" alt="" />
            </div>

          </div>
        </div>

      </section>



      <section className="visitor-section">
        <div className="visitor-div">
          <div className="visitor-grid">
            <div className="visitor-heading">
              <h1 className="visitor-head">Chat with visitors <br /> while they browse <br /> your site</h1>
              <hr className='horizontal' />
            </div>
            <div className="visitor-img">
              <img className="img5" src="img/img2.svg" alt="" />
              <img className="img6" src="img/img3.svg" alt="" />
            </div>

            <div className="visitor-images">
              <img className="para-img" src="img/para.svg" alt="" />
            </div>
            <div className="visitor-img-2">
              <img className="img7" src="img/img4.svg" alt="" />
              <div className="visit">
                <img className="img8" src="img/img5.svg" alt="" />
                <img className="img9" src="img/img6.svg" alt="" /></div>
            </div>
          </div>
        </div>
      </section>


      <section className="customer-section">
        <div className="customer-div">
          <div className="customer-grid">
            <div className="customer-img">
              <div className="video">
              <img className="img11" src="img/c2.svg" alt="" />
              <img className="img15" src="img/c5.svg" alt="" />
              <img className="img14" src="img/c4.svg" alt="" />
              </div>
              <img className="img12" src="img/c1.svg" alt="" />
              <img className="img13" src="img/c3.svg" alt="" />
            </div>
            <div className="customer-heading">
              <h1 className="customer-head">It’s possible to do <br /> video call with  <br />your customers</h1>
              <hr className='horizontal' />
              <img className="para" src="img/para.svg" alt="" />
            </div>




          </div>
        </div>

      </section>
    </>
  );
}

export default App;