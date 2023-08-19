import React from 'react'
import SEO from '../components/SEO'

const about = () => {
  return (<>
    <SEO title='Virtual Talks' />
    <div class="container " style={{
      paddingTop: "5rem"
    }}>
    <section class="hero  is-white">
      <div class="hero-body">
        <div class="container has-text-left">
       
          <h1 class="is-size-2">Virtual sessions live from KFR</h1>
          <p>
            We invite you to our Press Conference & VIP Cocktail on <strong>January 1st 2021</strong> at Tae Kwon Do,
            VIP hall.<br />
            We’re so pleased to welcome you to our celebration of linking people together.
          </p>
         
          {/* <div class="column has-text-left">
            <p>
              <button class="button is-medium is-primary is-contained" type="submit" value="Submit">
               
                <span>Donate Now </span>
              </button>
            </p>
           
          </div> */}
        </div>
      </div>
     
    </section>
    </div></>
  )
}

export default about