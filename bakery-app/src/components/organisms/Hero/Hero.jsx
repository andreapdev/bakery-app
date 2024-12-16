import heroImage from '../../../assets/hero-image.png'

export function Hero() {
  return <>
  <div className="hero">
    <picture className='hero__picture'>
      <img className="hero__picture__img" src={heroImage} alt="Cupcakes" width="1200" />
    </picture>

    <div className='hero__content'>
      <h1 className='hero__content__title'>
        RECOMENDACIONES DEL DÍA
      </h1>

      <h2 className='hero__content__subtitle'>
        ¡Qué bien huele!
      </h2>
    </div>
  </div>
  </>;
}