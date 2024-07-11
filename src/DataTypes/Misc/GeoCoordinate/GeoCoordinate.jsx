class GeoCoordinate {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }

    toDMS() {
        const convertToDMS = (coordinate) => {
            const absolute = Math.abs(coordinate);
            const degrees = Math.floor(absolute);
            const minutesNotTruncated = (absolute - degrees) * 60;
            const minutes = Math.floor(minutesNotTruncated);
            const seconds = Math.floor((minutesNotTruncated - minutes) * 60);
            return `${degrees}°${minutes}'${seconds}"`;
        };

        return {
            lat: convertToDMS(this.lat),
            lon: convertToDMS(this.lon)
        };
    }
}
export default GeoCoordinate
// Usage
// const coordinate = new GeoCoordinate(40.7128, -74.0060);
// console.log(coordinate.toDMS()); // { lat: "40°42'51\"", lon: "74°0'21\"" }
