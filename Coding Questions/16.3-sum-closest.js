class Solution {
    /**
     * Returns all paths from the top left cell to
     * the bottom right cell.
     *
     * @param {Array<Array<string>>} board Input 2D array.
     * @return {Set<string>} Set of all paths as strings.
     */
    //  There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

    //  You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

    //  Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.
    carPooling(trips, capacity) {
        // get a log of all the trips
        let log = [];
        for (let i = 0; i < trips.length; i++) {
            log.push([trips[i][0], trips[i][1], trips[i][2]]);
        }
        
    }
}

module.exports = Solution;
