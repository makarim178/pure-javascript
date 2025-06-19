class HoverIntent {
    constructor({ elem, over, out, interval = 100 }) {
        this.elem = elem;
        this.over = over;
        this.out = out;
        this.interval = interval;

        elem.addEventListener('mouseover', this.onMouseOver.bind(this));
        elem.addEventListener('mouseout', this.onMouseOut.bind(this));
    }

    onMouseOver() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(() => {
            this.over();
        }, this.interval);
    }

    onMouseOut() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(() => {
            this.out();
        }, this.interval);
    }
    
    destroy() {
        this.elem.removeEventListener('mouseover', this.onMouseOver);
        this.elem.removeEventListener('mouseout', this.onMouseOut);
    }
} 