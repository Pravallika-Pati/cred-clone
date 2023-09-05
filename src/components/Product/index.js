import React, { useEffect, useRef, useState } from 'react'
import "./product.css";

const Product = () => {
    const[showAnimation,setShowAnimation]=useState(false);

    const ref=useRef(null);

    const toggleAnimation=(e)=>{
        if(e[0].isIntersecting){
        setShowAnimation(true);
    }
    };
    const options={
        root:null,
        rootMargin:"0px",
        threshold:0.5,
    };

    useEffect(()=>{
        const observer=new IntersectionObserver(toggleAnimation,options);

        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current);
            }
        }return ()=>{
            if(ref.current){
                observer.unobserve(ref.current);
            }
        }
    });
    return (
    <div className={`product-case ${showAnimation?'scale-up-bottom':""}`}
    ref={ref}
    >
        {showAnimation &&(
        <div className='showcase-wrapper'>
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-left-2.png"
            className="showcase-ui showcase-1"
            />
             <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-left-1.png"
            className="showcase-ui showcase-2"
            />
             <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-center.png"
            className="showcase-ui showcase-3"
            />
             <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-right-1.png"
            className="showcase-ui showcase-4"
            />
             <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-right-2.png"
            className="showcase-ui showcase-5"
            />
        </div>
      )}
    </div>
  );
};

export default Product;
