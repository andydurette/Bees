import React from 'react';
import Footer from './Footer';

export default class SpeciesInDanger extends React.Component {
render(){
return(
<React.Fragment>
   {/* Section tag exists as wrapper for React Router Transition */}
   <section>
      <div className="page-heading" id="sid">
         <h1>A threat to them is one to us as&nbsp;well.</h1>
      </div>
      {/*content-box 1*/}
      <section>
         <div className="content-box">
            <div className="content-box-flex">
               <div className="right">
                  <img src="/img/government.png" alt="Government building" />
               </div>
               <div className="left">
                  <h2>Threat Recognized by The American Government</h2>
                  <p>
                    For the first time a bumble bee species in the U.S has received protection under the Endangered Species Act, following an 87% decline in the species population since the late 1990s, according to the U.S. Fish and Wildlife Service (FWS). Rusty patched bumble bees now remain in just 13 states, down from 28 as of March 2017.
                  </p>
                  <p>
                    With bees in the U.S. pollinating more than 90 commercial crops including nuts, fruits and vegetables, according to an Obama-era White House report. “Pollinators are small but mighty parts of the natural mechanism that sustains us and our world,” said Tom Melius of the FWS in a press release. “Without them, our forests, parks, meadows and shrublands, and the abundant, vibrant life they support, cannot survive.”
                  </p>
               </div>
            </div>
         </div>
         {/*content-box 1 End*/}

         {/*content-box 2*/}
         <div className="content-box">
            <div className="content-box-flex">
               <div className="right">
                  <img src="/img/pesticide.png" alt="Pesticide"/>
               </div>
               <div className="left">
                  <h2>Pesticides</h2>
                  <p>
                    Most uses of neonicotinoid pesticides represent a risk to wild bees and honeybees, according to assessments published on 28 February 2018 by EFSA and are currently subject to restrictions in the EU because of the threat they pose to bees.
                  </p>
                  <p>
                    These new conclusions update those published in 2013, after which the European Commission imposed controls on use of the substances. For the new assessments, which this time cover wild bees – bumblebees and solitary bees – as well as honeybees, EFSA’s Pesticides Unit carried out an extensive data collection exercise, including a systematic literature review, to gather all the scientific evidence published since the previous evaluations.
                  </p>
               </div>
            </div>
         </div>
         {/*content-box 2 End*/}
         
         {/*content-box 3*/}
         <div className="content-box">
            <div className="content-box-flex">
               <div className="right">
                  <img src="/img/mite.png" alt="Varroa mite" />
               </div>
               <div className="left">
                  <h2>Invasive species</h2>
                  <p>
                    The Varroa mite has spread to and become a major pest of honey bees since their introduction into Florida in the mid 1980's. They were first reported in the Bluegrass Region of the Commonwealth in 1991 and now occur throughout the state. 
                  </p>
                  <p>
                     Varroa mites are external parasites that attack both honey bees and brood. They suck the blood from both the adults and developing brood, especially drone brood. This weakens and shortens the bee’s life. Emerging brood may be deformed with missing legs or wings. Untreated infestations of varroa mites will increase and may kill colonies. If the colonies are not examined for mites, losses may be mistaken for winter mortality or queenlessness.
                  </p>
               </div>
            </div>
         </div>
         {/*content-box 3 End*/}
      </section>
      <Footer/>
   </section>
</React.Fragment>
)
}
}