import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
    <div className="flex items-center justify-center mt-5 ">
       <div class="trm">
      <div class="terminal_toolbar">
          <div class="butt">
            <button class="btn btn-color"></button>
            <button class="btn"></button>
            <button class="btn"></button>
          </div>
          <p class="user">Alazizxan@admin: ~</p>
          <div class="add_tab">
            +
          </div>
      </div>
          <div class="terminal_body">
          <div class="terminal_promt">
                <span class="terminal">Alazizxan@admin: </span>
                <span class="terminal_location">~</span>
                <span class="terminal_bling">$</span>
                <span className="text-">mkdir project</span>
            </div>
            <div class="terminal_promt">
                <span className="text">Mode   Name
----                 -------------         ------ ----
d-----        17/07/2023     17:04        a</span>
            </div>
            <div class="terminal_promt">
                <span className="text"> 
                .
                </span>
            </div>
            <div class="terminal_promt">
                <span class="terminal_user">Alazizxan`@admin:</span>
                <span class="terminal_location">~</span>
                <span class="terminal_bling">$</span>
                <span class="terminal_cursor"></span>
            </div>
           </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
