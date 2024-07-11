class RGBColor {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    toHex() {
        return `#${((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1).toUpperCase()}`;
    }

    toHSL() {
        let r = this.r / 255, g = this.g / 255, b = this.b / 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    }
}
export default RGBColor
// Usage
// const color = new RGBColor(255, 0, 0);
// console.log(color.toHex()); // #FF0000
// console.log(color.toHSL()); // { h: 0, s: 100, l: 50 }
