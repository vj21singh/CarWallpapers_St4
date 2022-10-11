import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="float-container">
      <div class="float-child">
      <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      </div>
      <div class="float-child">
      <img src="https://images.unsplash.com/photo-1555472287-ada4cab06bfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
      </div>
      <div class="float-child">
      <img src="https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
      </div>
      </div>
      <div class="float-container">
      <div class="float-child">
      <img src="https://images.unsplash.com/photo-1623703985638-d4530c062523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjg1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
      </div>
      <div class="float-child">
      <img src="https://images.unsplash.com/photo-1538592116845-119a3974c958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzAyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
      </div>
      <div class="float-child">
      <img src="https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <h1>1. Introduction</h1>
      <p>Unsplash is a photo discovery platform for free to use, high-definition photos. We (Unsplash Inc., a Canadian corporation) operate the Unsplash website at unsplash.com (the “Site”) and all related websites, software, mobile apps, and other services that we provide (together, the “Service”) with the goal of celebrating and enabling contributors and fostering creativity in our community. Your use of the Service, and our provision of the Service to you, constitutes an agreement by you and Unsplash to be bound by the terms and conditions in these Terms of Service.</p>
      <br></br>
      <h1>2. License to Photos</h1>
      <p>One of the best features of the Service permits you to search, view, and download photographs that have been uploaded by Unsplash users (“Photos”). You may download and use Photos from the Service in accordance with, and subject to, the Unsplash License. We encourage you to familiarize yourself with the Unsplash License, as well as the accompanying FAQs. To be sure you don’t miss it, here’s the crux of the license:</p>
      <br></br>
      <h1>3. Limited License to Use the Service (but not the Photos)</h1>
      <p>Conditioned on your continued compliance with these Terms, we grant you permission to access the Service only for your personal use.This means that Photos on the Service come with a very, very broad copyright license under the Unsplash License. This is why we say that they are “Free to Use.” Note that the Unsplash License does not include the right to use:</p>
      <br></br>
      <h1>4. User Content</h1>
      <br></br>
      <p>A. At a High Level. The Service lets you upload and post your Photos, as well as written text, images, web links, location information, and other content (“User Content”). Any User Content that you make available on the Service will belong to you or your licensors. We will not claim any ownership in your User Content–it is completely, 100%, yours.</p>
      <br></br>
      <p>B. Limited License to Us. You grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to host, store, transfer, display, adapt, perform, reproduce, modify, translate, and distribute your User Content (in whole or in part) in any media formats and through any media channels (now known or hereafter developed). You understand that we will not pay you for any use of your Photos and that your Photos will be made available to the public for their use without providing you attribution or compensation.</p>
      <br></br>
      <p>C. Authority. When you upload Photos to the Service, in addition to the license that you grant us to post the Photos publicly and permit other Unsplash users to download and use them, you also authorize us under your copyrights to enforce any violations of the sublicenses we grant in the Photos to others. In other words, if an Unsplash user misuses one of your Photos downloaded from the Service, you authorize us to enforce your copyrights in the Photos on your behalf. If you are interested in learning more about this, please see our FAQs.</p>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Subject</label>
        <input type="text" />

        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" />

        <button className="btn">Submit</button>
      </form>
    </div>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
