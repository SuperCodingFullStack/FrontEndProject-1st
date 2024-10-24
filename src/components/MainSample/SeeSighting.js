import React from 'react'
import ImageSwiper from './ImageSwiper'

const SeeSighting = () => {
  return (
    <section className="see_sight" style={{ backgroundColor: 'rgb(246,247,251)', paddingTop: '50px', paddingBottom: '50px'}}>
      <div className="wrapper mx-auto" style={{maxWidth: '80%'}}>
        <h3 className="font-bold text-xl pb-10">시선 집중</h3>
        <ImageSwiper />
      </div>
    </section>
  )
}

export default SeeSighting
