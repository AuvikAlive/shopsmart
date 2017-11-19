import React from 'react'
import Carousel from './Carousel'
import Testimonial from './Testimonial'

const options = {
  perPage: window.matchMedia('(orientation: portrait)').matches ? 1 : 3
}

const Testimonials = () => (
  <Carousel options={options}>
    <div>
      <Testimonial />
    </div>

    <div>
      <Testimonial />
    </div>

    <div>
      <Testimonial />
    </div>

    <div>
      <Testimonial />
    </div>

    <div>
      <Testimonial />
    </div>

    <div>
      <Testimonial />
    </div>
  </Carousel>
)

export default Testimonials
