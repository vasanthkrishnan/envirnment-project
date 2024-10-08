
import Nav from "./nav";
import image from '../assets/img/image.webp'; 
import plant from '../assets/img/planting.jpg';
import Bot from './bottom';

const About = () => {
  return (
    <>
      <Nav />
      <div className="h-full w-full flex items-center flex-col font-serif ml-7 mr-7">
        <div className="h-10 w-screen flex items-center justify-center font-semibold text-3xl mt-10">
          About The Foundation
        </div>

        <div className="flex items-center justify-center">
          <img className="h-70 w-90 mt-10" src={image} alt="Foundation Image" />
        </div>

        <div className="text-2xl font-semibold mt-5">One More Tree Foundation</div>

        <div className="mt-5 font-serif leading-10 p-20">
          <span className="font-bold ">
            The One More Tree Foundation was founded by two friends with the goal of planting one million trees in Poland and around the world.
          </span>
          We are a non-profit organization that works to protect the environment and nature, support and promote environmental awareness, and combat climate change. We are a young NGO that is in the process of implementing projects in which local governments across Poland are partners.
        </div>

        <div className="flex mt-10 w-screen">
          <div className="w-1/2 flex justify-center">
            <img className="h-70 w-auto" src={plant} alt="Planting Trees" />
          </div>
          <div className="w-1/3 flex items-center justify-center flex-col font-serif leading-7">
            <h2 className="text-2xl font-bold mb-4 font-serif">Our Activity</h2>
            <ul className="list-none"> 
              <li>
                <span className="font-bold">We plant trees</span>
                <br /> Together with volunteers, we try to turn the area green.
              </li>
              <li>
                <span className="font-bold">We educate</span>
                <br /> We organize workshops aimed at primary school students, during which we teach the youngest pro-environmental behavior.
              </li>
              <li>
                <span className="font-bold">We activate</span>
                <br /> We engage local communities in activities focused on caring for nature.
              </li>
              <li>
                <span className="font-bold">We support sustainable development</span>
                <br /> Our aim is to engage companies in environmental activities. We want to support companies in their journey to reduce their carbon footprint.
              </li>
            </ul>
          </div>
        </div>
        <div className="font-bold mt-10 text-2xl">Our Mission</div>
        <div className="leading-8 mt-5 p-20 text-center"><span className="ml-5">
            
            We believe that we are the last generation with a real chance to save the world and we want to make the most of this opportunity. Together we can help improve the environment for future generations. Our mission is to strengthen the sense of responsibility for climate change and activate local communities to take action to protect it.
            </span>

The goal of the One More Tree Foundation is to plant one million trees in Poland and around the world, which will generate up to 140,000,000 kilograms of oxygen, the amount consumed by one million adult humans. The Foundation encourages active participation in planting trees and promoting environmental initiatives, as well as running social and educational campaigns to raise awareness of the impact of human activities on the environment.</div>
      </div>
      <Bot/>
    </>
  );
};


export default About;