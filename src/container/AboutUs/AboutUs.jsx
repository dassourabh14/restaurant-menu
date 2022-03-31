import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Despite everything we hold fast to the fundamental rationality that new sustenance, well-disposed administration, and a laid-back air is the ideal end to a hard day of work or play. We trust you taste it in each chomp.</p>
        <a href="https://templatetoaster.com/template/steak-meat-butcher-shop-blogger-template"><button type="button" className="custom__button">Know More</button></a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Food is the great connector, and laughs are the cement. If we go out to eat and have a nice meal, that is one thing. If we can share a laugh, now we are friends.</p>
        <a href="https://templatetoaster.com/template/steak-meat-butcher-shop-blogger-template"><button type="button" className="custom__button">Know More</button></a>
      </div>
    </div>
  </div>
);

export default AboutUs;
