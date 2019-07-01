var map = {};

map['T'] = 'Tom';
map['J'] = 'Jack';
map['K'] = 'Kate';

console.debug(map['T']);
console.debug(map.K);

for(var key in map) {
	console.debug(key);
}