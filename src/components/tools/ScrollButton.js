import React, { useState } from 'react';

const ScrollButton = () =>{
    
    const [visible, setVisible] = useState(false);
    
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <div className="button-scroll">
            <i onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="bi bi-arrow-up-circle-fill"></i>
        </div>
        );
    }
    
    export default ScrollButton;