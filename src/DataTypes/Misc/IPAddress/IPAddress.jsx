class IPAddress {
    constructor(address) {
        this.address = address;
    }

    isValidIPv4() {
        const parts = this.address.split('.');
        if (parts.length !== 4) return false;
        return parts.every(part => {
            const num = parseInt(part, 10);
            return num >= 0 && num <= 255;
        });
    }

    isValidIPv6() {
        const parts = this.address.split(':');
        if (parts.length !== 8) return false;
        return parts.every(part => /^[0-9A-Fa-f]{1,4}$/.test(part));
    }
}
export default IPAddress
// Usage
// const ipv4 = new IPAddress('192.168.0.1');
// console.log(ipv4.isValidIPv4()); // true
// console.log(ipv4.isValidIPv6()); // false

// const ipv6 = new IPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334');
// console.log(ipv6.isValidIPv4()); // false
// console.log(ipv6.isValidIPv6()); // true
