import hero from "../../assets/hero.png";
import Button from "../../UI/button/button.component";

import './banner.styles.scss';

const Banner = () => {
    return (
      <div className="banner relative flex justify-end w-full h-full">
        <img src={hero} alt="Astro" />
        <div className="banner__text-box absolute top-1/2 left-60 -translate-y-1/2 bg-opacity-60 bg-secondary text-white px-10 py-5 rounded max-w-lg">
            <h2 className="text-3xl mb-3">Become one  the tech gurus</h2>
            <p className="mb-4">Invest in yourself. Find any course related to software engineering and tech only here.</p>
            <Button type="white-purple">Explore courses</Button>
        </div>
      </div>
    )
}

export default Banner;