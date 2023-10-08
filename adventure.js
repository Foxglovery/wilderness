const {trails} = require("./data.js")
const {rivers} = require("./data.js")
//ASK FOR THE WILDLIFE CONTENT FROM TEAM

const {
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
} = require("./functions.js")



console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

const shortTrail = shortestTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)

 const riverTotal = totalTrailMiles(rivers)
 console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

 const shortRiver = shortestRiver(rivers)
 console.log(`The shortest river tour is ${shortRiver} kilometers`)

 const longestRiverResult = longestRiver(rivers)
 console.log(`The longest river tour is ${longestRiverResult} kilometers`)

 const cheapTrails = cheapestTrail(trails)
 console.log(`The least expensive trails are ${cheapTrails}`)

 const lushTrails = lushestTrail(trails)
 console.log(`The most expensive trails are ${lushTrails}`)

 console.log('***************************************************')
console.log('*****              R I V E R S                *****')
console.log('***************************************************')

 const cheapRivers = cheapestRiver(rivers)
 console.log(`The cheapest river tours are ${cheapRivers}`)

 const lushRivers = lushestRiver(rivers)
 console.log(`The most expensive river tours are ${lushRivers}`)
console.log('TRAIL DETAILS:\n\n------------------------------------')
 getTrailDetails(trails)
 console.log('RIVER DETAILS:\n\n------------------------------------')
getRiverDetails(rivers)