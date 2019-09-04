import React from 'react';

export default class Sources extends React.Component {
render(){
return(
<React.Fragment>
   {/* Section tag exists as wrapper for React Router Transition */}
   <section>
      <div className="page-heading" id="sor">
         <div className='gradient-layer'>
            <h1>The Sources of these Unbeelievable Facts.</h1>
         </div>
      </div>
      <section>
         <div className="content-box sources">
            <div className="content-box-flex">
               <div className="right">
                  <img src="/img/research.png" alt="Books"/>
               </div>
               <div className="left">
                  <h2>Why Bees Matter</h2>
                  <p>
                     <a href="http://www.pthomeandgarden.com/5-ways-bees-are-important-to-the-environment/" target="_blank" rel="noopener noreferrer">pthomeandgarden.com</a>
                     <a href="https://www.onegreenplanet.org/animalsandnature/why-bees-are-important-to-our-planet/" target="_blank" rel="noopener noreferrer">onegreenplanet.org</a>
                  </p>
                  <h2>History of bees</h2>
                  <p>
                     <a href="https://www.scientificamerican.com/article/the-beguiling-history-of-bees-excerpt/" target="_blank" rel="noopener noreferrer">scientificamerican.com</a>
                     <a href="https://permaculturenews.org/2014/09/24/the-cranky-honey-bees-of-south-america/" target="_blank" rel="noopener noreferrer">permaculturenews.org</a>
                  </p>
                  <h2>A species Endangered</h2>
                  <p>
                     <a href="http://time.com/4709114/bumble-bee-endangered-species-trump/" target="_blank" rel="noopener noreferrer">time.com</a>
                     <a href="https://www.efsa.europa.eu/en/press/news/180228" target="_blank" rel="noopener noreferrer">efsa.europa.eu8</a>
                     <a href="https://entomology.ca.uky.edu/ef608" target="_blank" rel="noopener noreferrer">entomology.ca</a>
                  </p>
               </div>
            </div>
         </div>
      </section>
   </section>
</React.Fragment>
)
}
}