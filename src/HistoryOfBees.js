import React from 'react';

export default class HistoryOfBees extends React.Component {
render(){
  return(
  <React.Fragment>
    {/* Section tag exists as wrapper for React Router Transition */}
    <section>
        <div className="page-heading" id="hob">
          <div className='gradient-layer'>
            <h1>How the Bee, came to&nbsp;Bee.</h1>
          </div>
        </div>
        <section>
          {/*content-box 1*/}
          <div className="content-box">
              <div className="content-box-flex">
                <div className="right">
                    <img src="/img/dna.png" alt="Stand of dna"/>
                </div>
                <div className="left">
                    <h2>Bee’s were Originally Wasps</h2>
                    <p>
                      Bees are roughly believed through discoveries and analysis to have appeared about 120 million years ago evolving from a
                      predatory wasp. This evolution took place around the same time flowers started to produce nectar to entice insects to
                      come eat and spread their pollen in exchange.
                    </p>
                    <p>
                      Studies believe the wasp species of sphecid wasp experimented with stocking its nest with pollen instead of dead insects.
                      This could have been a gradual process, with the wasp initially adding just a little pollen to the nest provisions. 
                      As pollen is rich in protein, it would have provided a good nutritional supplement, particularly at times when prey was scarce. 
                      When the wasp eventually evolved to feed its offspring purely on pollen, it had become the first bee.
                    </p>
                </div>
              </div>
          </div>
          {/*content-box 1 End*/}

          {/*content-box 2*/}
          <div className="content-box">
              <div className="content-box-flex">
                <div className="right">
                    <img src="/img/north-america.png" alt="Continent of North America" />
                </div>
                <div className="left">
                    <h2>The Bee’s Introduction to North America</h2>
                    <p>
                      Honey bees are among the most recognizable and beneficial of the insects that live in North America. But these insects are not even native to the Americas. Like most of the livestock associated with American farms, honey bees were imported by European settlers.
                    </p>
                    <p>
                      Prior to the arrival of the Old World settlers, honey bees were unknown to Native Americans. In fact, several early American writers, including Thomas Jefferson, reported that honey bees were called “white man's flies.” The name was recognition that the appearance of honey bees in America was associated with the arrival of the Europeans.
                    </p>
                </div>
              </div>
          </div>
          {/*content-box 2 End*/}

          {/*content-box 3*/}
          <div className="content-box">
              <div className="content-box-flex">
                <div className="right">
                    <img src="/img/south-america.png" alt="Continent of South Africa" />
                </div>
                <div className="left">
                    <h2>The Bee’s Introduction to South America</h2>
                    <p>
                      Although European Bee's were also sent to south america they did not prosper in the same way they had done
                      in North America. Dr. Kerr  was aware of a more adaptive bee species known as African bees but more so known
                      today as killer bees for their were more defensive nature.
                    </p>
                    <p>
                      Dr. Kerr planned to test them more in the environment 
                      and hopefully breed them to be more docile. This did not come to pass however as the story goes that, one
                      day in 1957, an innocent beekeeper from the area removed all the queen excluders. Suddenly, 26 queens escaped
                      the lab in small swarms and by 1978 were the dominant bee in South America.
                    </p>
                </div>
              </div>
          </div>
          {/*content-box 3 End*/}
        </section>
    </section>
  </React.Fragment>
  )
}
}