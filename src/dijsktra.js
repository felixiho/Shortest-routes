export class Dijkstra {


	lowestCostNode(costs, processed) {
		return Object.keys(costs).reduce((lowest, node) => {
			if (lowest === null || costs[node] < costs[lowest]) {
				if (!processed.includes(node)) {
					lowest = node;
				}
			}
			return lowest;
		}, null);
	}

	// function that returns the minimum cost and path to reach Finish
	dijkstra() {
		let graph = {
			start: { A: 5, B: 2 },
			A: { C: 4, D: 2 },
			B: { A: 8, D: 7 },
			C: { D: 6, finish: 3 },
			D: { finish: 1 },
			finish: {}
		};

		// track lowest cost to reach each node
		const costs = Object.assign({ finish: Infinity }, graph.start);

		// track paths
		const parents = { finish: null };
		for (let child in graph.start) {
			parents[child] = 'start';
		}

		// track nodes that have already been processed
		const processed = [];

		let node = this.lowestCostNode(costs, processed);

		while (node) {
			let cost = costs[node];
			let children = graph[node];
			for (let n in children) {
				let newCost = cost + children[n];
				if (!costs[n]) {
					costs[n] = newCost;
					parents[n] = node;
				}
				if (costs[n] > newCost) {
					costs[n] = newCost;
					parents[n] = node;
				}
			}
			processed.push(node);
			node = this.lowestCostNode(costs, processed);
		}

		let optimalPath = ['finish'];
		let parent = parents.finish;
		while (parent) {
			optimalPath.push(parent);
			parent = parents[parent];
		}
		optimalPath.reverse();

		const results = {
			distance: costs.finish,
			path: optimalPath
		};

		console.log(results);
	}
}