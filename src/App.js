// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <section classNmae="Nav">
        <div className="main-nav">
          <div className="logos">
            <img className="logo" src="img/logo.webp" alt="" />
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
              <img className="img4" src="img/Group 40.webp" alt="" />
            </div>
            <div className="hero-images">
              <img className="img2" src="img/Group-19.webp" alt="" />
              <img className="img1" src="img/Group 41.webp" alt="" />
            </div>
            <div className="hero-img-2">
              <img className="img3" src="img/Group 42.webp" alt="" />
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
              <img className="img5" src="img/Group 168.webp" alt="" />
              <img className="img6" src="img/Group 71.webp" alt="" />
            </div>

            <div className="visitor-images">
              <img className="para-img" src="img/Group 87.webp" alt="" />
            </div>
            <div className="visitor-img-2">
              <img className="img7" src="img/Group 72.webp" alt="" />
              <div className="visit">
                <img className="img8" src="img/Group 167.webp" alt="" />
                <img className="img9" src="img/Group 169.webp" alt="" /></div>
            </div>
          </div>
        </div>
      </section>


      <section className="customer-section">
        <div className="customer-div">
          <div className="customer-grid">
            <div className="customer-img">
              <div className="video">
              <img className="img11" src="img/Rectangle 5.webp" alt="" />
              <img className="img15" src="img/Video.webp" alt="" />
              <img className="img14" src="img/Group 174.webp" alt="" />
              </div>
              <img className="img12" src="img/Group 71 (1).webp" alt="" />
              <img className="img13" src="img/c3 (2).webp" alt="" />
            </div>
            <div className="customer-heading">
              <h1 className="customer-head">It’s possible to do <br /> video call with  <br />your customers</h1>
              <hr className='horizontal' />
              <img className="para" src="img/Group 87.webp" alt="" />
            </div>
          </div>
        </div>
      </section>


      <section className="AboutUs-section">
        <div className="AboutUs-div">
          <div className="AboutUs-grid">
            <div className="AboutUs-heading">
              <h1 className="AboutUs-head">Browse our <br />Case Study</h1>
              <p className="About-Us-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div class="accordion">
        <div class="item">
            <p class="number">01</p>
            <div className="heading-about">
            <h2 className='Acc-head'>Online Shop</h2>
            <p class="text">3 Case Studies</p>
            <hr />
            </div>
       <img className="icon" src="img/Group 4.webp" alt="" />
        </div>
        <div class="item">
            <p class="number">02</p>
            <div className="heading-about">
            <h2 className='Acc-head'>Portfolio Website</h2>
            <p class="text">3 Case Studies</p>
            <hr />
            </div>
       <img  className='icon' src="img/Group 4.webp" alt="" /> 
        </div>
        <div class="item">
            <p class="number">03</p>
            <div className="heading-about">
            <h2 className='Acc-head'>Company Profile</h2>
            <p class="text">3 Case Studies</p>
            <hr />
            </div>
       <img   className='icon' src="img/Group 4.webp" alt="" />
</div>
        <div class="item">
            <p class="number">04</p>
            <div className="heading-about">
            <h2 className='Acc-head'>Online Learning</h2>
            <p class="text">3 Case Studies</p>
            <hr />
            </div>
       <img  className='icon' src="img/Group 4.webp" alt="" />
        </div>
        <div class="item">
            <p class="number">05</p>
            <div className="heading-about">
            <h2 className='Acc-head'>News Portal</h2>
            <p class="text">3 Case Studies</p>
            </div>
       <img className='icon' src="img/Group 4.webp" alt="" />
        </div>
      
    </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
