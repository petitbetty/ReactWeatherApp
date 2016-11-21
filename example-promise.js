function addPromise(a, b) {
	return new Promise(function(resolve, reject) {
		
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(parseInt(a, 10) + parseInt(b, 10) );
		} else {
			reject('Please give a number');
		}
		
	});
}

addPromise(8,5).then(function(sum) {
	console.log('promise success', sum);
}, function(err) {
	console.log('promise error', err);
});

addPromise("betty",5).then(function(sum) {
	console.log('promise success', sum);
}, function(err) {
	console.log('promise error', err);
});

