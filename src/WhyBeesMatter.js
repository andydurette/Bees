import React from 'react';

export default class WhyBeesMatter extends React.Component {
render(){
  return(
  <React.Fragment>
    {/* Section tag exists as wrapper for React Router Transition */}
    <section>
        <div className="page-heading" id="wbm">
          <h1>Ways bees enrich our&nbsp;world.</h1>
        </div>
        <section>
          {/* content-box 1 */}
          <div className="content-box">
              <div className="content-box-flex">
                <div className="right">
                    <img src="/img/honey.png" alt="Honey in a glass container"/>
                </div>
                <div className="left">
                    <h2>Pollination - Bees Provide Sources of Food</h2>
                    <p>
                      Honey is the first food that comes to mind regarding bees, made by bees regurgitating nectar and passing it back and forth in their mouths to one another before depositing and sealing it in a honeycomb. Its intended use is for the bees’ winter food stores however us humans are quite fond of this amber liquid as well – the 2013 honey crop was valued at $317.1 million. 
                    </p>
                    <p>
                     However there are many foods that would no longer be available to us if bees ceased pollinating for our agricultural gain: almonds, apples, asparagus, blueberries, broccoli, cantaloupes, cucumbers, cranberries, cherries,  pumpkins and watermelons. 
                    </p>
                </div>
              </div>
          </div>
          {/* content-box 1 End */}
          
          {/* content-box 2 */}
          <div className="content-box">
              <div className="content-box-flex">
                <div className="right">
                    <img src="/img/flowers.png" alt="Pink and white flowers" />
                </div>
                <div className="left">
                    <h2>Bees Provide a Natural Beauty to the Planet</h2>
                    <p>
                      Pollinating flowers contributing to the beauty of the planet’s botanic landscapes may be the bees’ perhaps simplest and least economically important actions, that said it’s certainly its most aesthetically pleasing one. By keeping flowers pollinated, bees perpetuate floral growth and provide alluring habitats for other creatures such as insects and birds. 
                    </p>
                    <p>
                      Bees are easily amongst the most important insects to humans on Earth. These humble, buzzing bugs deserve a colossal thanks – for helping provide us with our favorite fruits and vegetables, their delicious honey, and beautiful, flowery gardens!
                    </p>
                </div>
              </div>
          </div>
          {/* content-box 2 End */}

          {/* content-box 3 */}
          <div className="content-box">
              <div className="content-box-flex">
                <div className="right">
                    <img src="/img/hive.png" alt="Bee hive empty honeycombs"/>
                </div>
                <div className="left">
                    <h2>Ecosystem and Biodiversity</h2>
                    <p>
                      Bees are known for their elaborate hives, but they also help build homes for millions of other insects and animals. Their role as pollinators is indispensible to the growth of tropical forests, savannah woodlands, and temperate deciduous forests. Many tree species, like willows and poplars, couldn’t grow without pollinators like bees.
                    </p>
                    <p>
                      Your own garden even serves as a home for hundreds of tiny creatures, from birds and squirrels to thousands of tiny insects. If bees were to disappear, the animals that depend on these plants for survival would vanish as well.
                    </p>
                </div>
              </div>
          </div>
          {/* content-box 3 End */}
        </section>
    </section>
  </React.Fragment>
  )
}
}