import React, { useState } from 'react';

export default function Bathtub() {
  const [currentHeight, setCurrentHeight] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);

  const fillWater = (isFill = false, times = 5) => {
    const bathtubElem = document.querySelector('.bathtub-v');
    const height = bathtubElem.clientHeight // get container height
    const perHeight = height / 5;

    const emptyDiv = document.createElement('div');
    emptyDiv.setAttribute("style", "background-color: blue;");
    emptyDiv.style.backgroundColor = "blue";
    emptyDiv.style.height = perHeight + 'px';

    setTimeout(() => {
      if (isFill) {
        if (bathtubElem.children.length === 5) {
          alert('Bathtub is filled water fully.');
          return;
        }

        bathtubElem.appendChild(emptyDiv);
        setCurrentHeight(perHeight * (5 - times + 1));
        setCurrentLevel(5 - times + 1);
      } else {
        if (bathtubElem.children.length === 0) {
          alert('Bathtub is empty. Please fill water.');
          return;
        }

        setCurrentHeight(height - perHeight * (5 - times + 1));
        setCurrentLevel(times - 1);

        if ((times - 1) === 0) {
          return;
        };
        bathtubElem.removeChild(bathtubElem.firstChild);
      }

      if (--times) fillWater(isFill, times);
    }, 2000);


    // since the translate Y is backward (full is 0px, empty is 150px), then the fill portion must be backward to (the first click is 75%, second click is 50%, last click is 0%)
    document.querySelector('.bathtub .fill').style.transform = 'translate(0, ' + ((100 - (isFill ? 100 : 0)) / 100) * height + 'px)'
  }

  return(
    <div className="container p-4">
      <div className="mb-3 flex">
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded mr-2 flex items-center'
          onClick={() => fillWater(true, 5)}>
          Increase Water Level
        </button>
        <button
          className='bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded mr-2 flex items-center'
          onClick={() => fillWater(false, 5)}>
          Decrease Water Level
        </button>
      </div>

      <div className="relative ml-24">
        <div className='invisible bathtub-v bathtub flex flex-col-reverse'></div>

        <div className="bathtub absolute top-0">
          <div className="fill">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="300px"
              height="300px"
              viewBox="0 0 300 300"
              enableBackground="new 0 0 300 300"
              xmlSpace="preserve">
              <path
                fill="#04ACFF"
                className="wave-shape"
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                  c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                  c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"/>
            </svg>
          </div>
        </div>
        <span className="absolute text-white top-10">
          Level: {currentLevel} <br />Height: {currentHeight}px
        </span>
      </div>
    </div>
  );
}