import React from 'react'
import Quote from './Quote'
import StyledTestimonial from './StyledTestimonial'
import Angle from './Angle'
import Client from './Client'
import Avatar from './Avatar'
import Name from './Name'
import Position from './Position'

const Testimonial = () => (
  <StyledTestimonial>
    <Quote>
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book ...
      <Angle />
    </Quote>
    <Client>
      <Avatar>
        <img src="http://via.placeholder.com/200x200" alt="slide" />
      </Avatar>
      <div className="info">
        <Name>Yulia Michelle</Name>
        <Position>Manager</Position>
      </div>
    </Client>
  </StyledTestimonial>
)

export default Testimonial
