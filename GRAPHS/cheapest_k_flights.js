/* TLE SOLUTION */
function findCheapestPrice(n, flights, src, dst, k) {
    const graph = {};
    for (let [from, to, price] of flights) {
        if (!graph[from]) graph[from] = [];
        graph[from].push([to, price]);
    };
    const queue = [[src, 0, 0]];
    const minCost = Array.from({ length: n }, () => Array(k+2).fill(Infinity));
    minCost[src][0] = 0;
    let result = Infinity;
    while (queue.length) {
        const [city, cost, stops] = queue.shift();
        if (city === dst) {
            result = Math.min(result, cost);
            continue;
        };
        if (stops <= k) {
            if (graph[city]) {
                for (let [nextCity, price] of graph[city]) {
                    const newCost = cost + price;
                    if (newCost < minCost[nextCity][stops+1]) {
                        minCost[nextCity][stops+1] = newCost;
                        queue.push([nextCity, newCost, stops+1]);
                    };
                };
            };
        };
    };
    return result === Infinity ? -1 : result;
};

const n = 3;
const flights = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
];
const src = 0;
const dst = 2;
const k = 1;

console.log(findCheapestPrice(n, flights, src, dst, k)); // Output: 200

/* BFS with Dijkstra's pruning */
function findCheapestPrice(n, flights, src, dst, k) {
    // Build adjacency lists maping src to a list of [dest, cost] pairs
    const adjLists = {};
    const bestCostTo = { src: 0 };
  
    for (let i = 0; i < n; i++) {
      adjLists[i] = [];
      bestCostTo[i] = Number.MAX_VALUE;
    }
    bestCostTo[src] = 0;
    for (const [s, d, p] of flights) {
      adjLists[s].push([d,p]);
    }
  
    // Now we'll use BFS with Dijkstra's optimization, recording
    // the best known costs to nodes.
    let foundFlight = false;
    let cheapestFound = Number.MAX_VALUE;
    let flightCount = 0;
    const maxFlights = k + 1;
    let flightsToTry = [[src, 0]];
    while (flightsToTry.length > 0 && flightCount <= maxFlights) {
      const nextLevel = [];
  
      for (const [nextDst, costSoFar] of flightsToTry) {
        if (nextDst === dst) {
          foundFlight = true;
          cheapestFound = Math.min(cheapestFound, costSoFar);
          continue; // no need to look at flights from here.
        }
        for (const [newDst, cost] of adjLists[nextDst]) {
          const newCost = cost + costSoFar;
          if (newCost < bestCostTo[newDst] && newCost < cheapestFound) {
            bestCostTo[newDst] = newCost;
            nextLevel.push([newDst, newCost]);
          }
        }
      }
  
      flightsToTry = nextLevel;
      flightCount++;
    }
  
    return foundFlight ? cheapestFound : -1;
  }