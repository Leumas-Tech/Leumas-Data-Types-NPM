class FileSize {
    constructor(bytes) {
        this.bytes = bytes;
    }

    toKB() {
        return this.bytes / 1024;
    }

    toMB() {
        return this.bytes / 1024 / 1024;
    }

    toGB() {
        return this.bytes / 1024 / 1024 / 1024;
    }
}
export default FileSize
// Usage
// const fileSize = new FileSize(1048576);
// console.log(fileSize.toKB()); // 1024
// console.log(fileSize.toMB()); // 1
// console.log(fileSize.toGB()); // 0.0009765625
