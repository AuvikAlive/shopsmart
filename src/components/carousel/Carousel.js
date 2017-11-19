import React from 'react'
import ReactSiema from 'react-siema'
import CarouselWrapper from './CarouselWrapper'
import PrevButton from './PrevButton'
import NextButton from './NextButton'

const Carousel = props => {
  let slider
  const { options, children } = props
  return (
    <CarouselWrapper>
      <ReactSiema
        ref={siema => {
          slider = siema
        }}
        {...options}
      >
        {children}
      </ReactSiema>
      <PrevButton className="prev" onClick={() => slider.prev()} />
      <NextButton className="next" onClick={() => slider.next()} />
    </CarouselWrapper>
  )
}

export default Carousel
