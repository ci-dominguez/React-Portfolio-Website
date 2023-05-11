import { useEffect } from 'react';

const animations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id == 'drop-in-header') {
          let aniClass = 'drop-in-header';
          entry.target.classList.toggle(aniClass, entry.isIntersecting);
        } else if (entry.target.id == 'drop-in-text') {
          let aniClass = 'drop-in-text';
          entry.target.classList.toggle(aniClass, entry.isIntersecting);
        } else if (entry.target.id == 'fade-img') {
          let aniClass = 'fade-img';
          entry.target.classList.toggle(aniClass, entry.isIntersecting);
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hide');
    hiddenElements.forEach((ele) => observer.observe(ele));
  });
};

export default animations;
