

title Bjorn's Wild Adventure

participant Data
participant Bjorn
participant Functions



Data<-Bjorn:requests array (trails)
Data->Bjorn:exports array(trails)
Data<-Bjorn:requests array (rivers)
Data->Bjorn:exports array(rivers)
box over Bjorn:Console Logs the store template
Bjorn->Functions:requests functions {\n    totalTrailMiles,\n    shortestTrail,\n    longTrail,\n    totalRiverMiles,\n    shortestRiver,\n    longestRiver,\n    cheapestRiver,\n    cheapestTrail,\n    lushestRiver,\n    lushestTrail,\n    getTrailDetails,\n    getRiverDetails
Bjorn<-Functions:exports said functions
Bjorn->Functions:invokes function (totalTrailMiles) with array [trails]
box right of Functions:declares var (totalTrailLength)
loop info
Functions->Functions:iterates through [trails] cumulatively adding trails.length to totalTrailLength
Functions->Functions
end
Bjorn<-Functions:returns var (totalTrailLength)

box over Bjorn:console logs contextual string relating to and including totalTrailLength
Bjorn->Functions:invokes function (shortestTrail) with array [trails]
box right of Functions:declares var (shortestTrailName) as the length of the first trail
loop info
Functions->Functions:iterates through [trails] reassigning shortestTrailName with trail.length if shortestTrailName < the current trail.length.  
end
Bjorn<-Functions:returns var (shortestTrailName)
box over Bjorn:console logs contextual string relating to and including shortestTrailName
Bjorn->Functions:invokes function (longTrail) with array [trails]
box right of Functions:declares var (longestTrailName) as the length of the first trail
loop info
Functions->Functions:iterates through [trails] reassigning longestTrailName with trail.length if longestTrailName > the current trail.length.  
end
Bjorn<-Functions:returns var (longestTrailName)
box over Bjorn:console logs contextual string relating to and including longestTrailName
Bjorn->Functions:invokes function (totalRiverMiles) with array [rivers]
box right of Functions:declares var (totalRiverLength) as empty string
loop info
Functions->Functions:iterates through [rivers] cumulatively adding rivers.length to totalRiverLength
end
Bjorn<-Functions:returns var (totalRiverLength)
box over Bjorn:console logs contextual string relating to and including totalRiverLength
Bjorn->Functions:invokes function (shortestRiver) with array [rivers]
box right of Functions:declares var (shortestRiverName) as the length of the first river
loop info
Functions->Functions:iterates through [rivers] reassigning shortestRiverName with rivers.length if shortestRiverName < the current rivers.length.  
end
Bjorn<-Functions:returns var (shortestRiverName)
box over Bjorn:console logs contextual string relating to and including shortestRiverName
Bjorn->Functions:invokes function (longestRiver) with array [rivers]
box right of Functions:declares var (longestRiverName) as the length of the first river
loop info
Functions->Functions:iterates through [rivers] reassigning longestRiverName with rivers.length if longestRiverName > the current rivers.length.  
end
Bjorn<-Functions:returns var (longestRiverName)
box over Bjorn:console logs contextual string relating to and including longestRiverName
Bjorn->Functions:invokes function (cheapestRiver) with array [rivers]
box right of Functions:declares var (cheapestRiverName) as empty string
loop info
Functions->Functions:iterates through [rivers] and checks if rivers.price === "$"; reassigns (rivers.river) to cheapestRiverName
end
Bjorn<-Functions:returns var (cheapestRiverName)
box over Bjorn:console logs contextual string relating to and including cheapestRiverName
Bjorn->Functions:invokes function (cheapestTrail) with array [trails]
box right of Functions:declares var (cheapestTrailName) as empty string
loop info
Functions->Functions:iterates through [trails] and checks if trails.price === "$"; reassigns (trails.trailName) to cheapestTrailName
end
Bjorn<-Functions:returns var (cheapestTrailName)
box over Bjorn:console logs contextual string relating to and including cheapestTrailName

Bjorn->Functions:invokes function (lushestRiver) with array [rivers]
box right of Functions:declares var (lushestRiverName) as empty string
loop info
Functions->Functions:iterates through [rivers] and checks if length of (rivers.price) > 4; reassigns (rivers.river) to lushestRiverName
end
Bjorn<-Functions:returns var (lushestRiverName)
box over Bjorn:console logs contextual string relating to and including lushestRiverName
Bjorn->Functions:invokes function (lushestTrail) with array [trails]
box right of Functions:declares var (lushestTrailName) as empty string
loop info
Functions->Functions:iterates through [trails] and checks if length of (trails.price) > 4; reassigns (trails.trailName) to lushestTrailName
end
Bjorn<-Functions:returns var (lushestTrailName)
box over Bjorn:console logs contextual string relating to and including lushestTrailName
Bjorn->Functions:invokes function (getTrailDetails) with array [trails]
loop info
Functions->Functions:iterates array [trails]; for each object, console.log a user friendly string with trail name, starting latitude and longitude, length, and a plant highlight.  
end 

Bjorn->Functions:invokes function (getRiverDetails) with array [rivers]
loop info
Functions->Functions:iterates array [rivers]; for each object, console.log a user friendly string with river name, starting latitude and longitude, length, and a unique fish found therein.  
end 

