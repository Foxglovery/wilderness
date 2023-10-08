
// Get the sum of all trail miles
//Math.ciel on the return value NOT on the object eg. 730 miles
const totalTrailMiles = (trails) => {
    let totalTrailLength = 0
    for (const trail of trails) {
        totalTrailLength += trail.length
    }

    return Math.ceil(totalTrailLength)
}
//it iterates through [trails] appending trail.length to totalTrailLength.
// Get the shortest of all trails
//changed shortyTrail to shortestTrail
//need to change the value of shortest
//deleted <<
//***shortest = trails.length
const shortestTrail = (allTrails) => {
    let shortestTrailName = allTrails.length
    for (const trail of allTrails) {
        if(trail.length < shortestTrailName) {
            shortestTrailName = trail.length
        }
    }

    return shortestTrailName
}

// Get the longest of all trails
//*** longest = trails.length 
const longTrail = (allTrails) => {
    let longestTrailName = allTrails.length
    for (const trail of allTrails) {
        if(trail.length > longestTrailName) {
            longestTrailName = trail.length
        }
    }

    return longestTrailName
}

const totalRiverMiles = (rivers) => {
    let totalRiverLength = 0
    for (const river of rivers) {
        totalRiverLength += river.length 
    }
    return Math.ceil(totalRiverLength)
}

const shortestRiver = (allRivers) => {
    let shortestRiverName = allRivers.length
    for (const river of allRivers) {
        if(river.length < shortestRiverName) {
            shortestRiverName = river.length
        }
    }
    return shortestRiverName
}

const longestRiver = (allRivers) => {
    let longestRiverName = allRivers.length
    for (const river of allRivers) {
        if(river.length > longestRiverName) {
            longestRiverName = river.length
        }
        
    }
    return longestRiverName
}



const cheapestRiver = (allTrails) => {
    let cheapestRiverName = ""
    for (const trail of allTrails) {
        if(trail.price === "$") {
            cheapestRiverName += `\n\n ${trail.river}`
        }
    }

    return cheapestRiverName
}

const cheapestTrail = (allTrails) => {
    let cheapestTrailName = ""
    for (const trail of allTrails) {
        if(trail.price === "$") {
            cheapestTrailName += `\n\n ${trail.trailName}`
        }
    }

    return cheapestTrailName
}


const lushestRiver = (allTrails) => {
    let lushestRiverName = ""
    for (const trail of allTrails) {
        if(trail.price.length >= 4) {
            lushestRiverName += `\n\n ${trail.river}`
        }
    }

    return lushestRiverName
}

const lushestTrail = (allTrails) => {
    let lushestTrailName = ""
    for (const trail of allTrails) {
        if(trail.price.length >= 4) {
            lushestTrailName += `\n\n ${trail.trailName}`
        }
    }

    return lushestTrailName
}

// const getTrailDetails = (allTrails) => {
//     let detailList = ""
//     for (const detail  of allTrails) {
//         detailList.push()
//     }
// }

const getTrailDetails = (allTrails) => {
   for (const trail of allTrails) {
    console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.
The highlighted plant for the trip is ${trail.plantHighlight}.\n\n`)
    
   }
}

const getRiverDetails = (allRivers) => {
    for (const trail of allRivers) {
        console.log(`${trail.river} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.
The unique fish for the trip is ${trail.uniqueFish}.\n\n`)
    }
}

module.exports = {
    totalTrailMiles,
    shortestTrail,
    longTrail,
    totalRiverMiles,
    shortestRiver,
    longestRiver,
    cheapestRiver,
    cheapestTrail,
    lushestRiver,
    lushestTrail,
    getTrailDetails,
    getRiverDetails
}