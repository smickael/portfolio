import React from "react";
import styles from "../styles";

export const Description = () => {
  return (
    <div
      className={`relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 ${styles.paddingY}`}
    >
      {/* <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8"> */}
      <div className="mt-8 flex flex-col-reverse md:flex-row">
        <div className="relative lg:col-start-2 lg:row-start-1 md:w-1/2 w-full">
          <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <div className="relative aspect-w-12 aspect-h-7 lg:aspect-none">
                <img
                  className="rounded-lg object-cover object-center transform mx-auto"
                  src="profile_layers.png"
                  alt="Mickael K."
                  width={400}
                  height={425}
                />
              </div>
            </figure>
          </div>
        </div>
        <div className="mt-8 ml-4 mr-4 lg:mt-0 md:w-1/2 w-full">
          <div className="prose prose-indigo mx-auto mt-5 text-gray-50 lg:col-start-1 lg:row-start-1 lg:max-w-none">
            <div>
              <h2 className="text-lg font-semibold text-indigo-600">
                Let me introduce myself
              </h2>
              <h3 className="mt-2 text-3xl font-cdSemiBold leading-8 tracking-tight text-slate-300 sm:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500">
                I'm Mickael
              </h3>
            </div>
            <p className="font-medium">
              Passionate about IT and web development in particular from an
              early age, I immediately knew in what way I was going to be able
              to mix pleasure and professionalism.
            </p>
            <br />
            {/* <p>
              Years later, I had the chance to join the 42 school from the
              United States, and I was able to extend my skills on current
              front-end technologies.
            </p>
            <br />
            <p>
              I focused in web programming more particularly on languages such
              as <span class="font-bold">React</span> and{" "}
              <span class="font-bold">NodeJs</span> in order to carry out web
              projects. So far, I have been able to contribute to various{" "}
              <span class="font-bold">website </span>
              projects (web3, showcase site, e-commerce) or even{" "}
              <span class="font-bold">mobile applications</span> developed in{" "}
              <span class="font-bold">React-Native</span> deployable on iOS and
              Android.
            </p>
            <br />
            <p>
              Having a sensitivity for the visual part of a site, I also make
              complete models via <span class="font-bold">Figma</span> with the
              different pages of the project as well as the{" "}
              <span class="font-bold">design system</span> in order to respond
              to the visual identity of the client.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
