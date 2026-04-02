const fadingAnimation ={
    hideElements() {
        this.sectionElements.forEach((sectionElement) => {
            sectionElement.style.opacity = '0';
        });
    }, observeSections() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        });
        this.sectionElements.forEach((sectionElement) => {
            this.observer.observe(sectionElement);
        });
    }, init(){
        this.sectionElements = document.querySelectorAll('section');
        this.hideElements();
        this.observeSections();
    }
}

fadingAnimation.init();

