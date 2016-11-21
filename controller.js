
var app = angular.module("kidTalk", []);

app.controller('kidTalkController', function($scope){
	
	$scope.kidSaysThis = [];
	
	$scope.words = ['no', 'me', 'I', 'gimme', 'cookie', 'candy', 'toy', 'mine', 'hungry', 'angry'];
	$scope.phrases = ['my turn', 'go away', 'no fair', 'watch this', 'look out', 'that hurts', 'gimme that', 'no way', 'you stink', 'move over'];

	$scope.dec = ['classA', 'classB', 'classC', 'classD', 'classE'];


	$scope.randomWord = function(){
		var item = {};
		item.kidSaysThis= $scope.words[Math.floor(Math.random() * $scope.words.length)] + "! ";
		$scope.kidSaysThis.push(item);
		console.log(item);
	};
	
	$scope.randomPhrase = function(){
		var item = {};
		item.kidSaysThis= $scope.phrases[Math.floor(Math.random() * $scope.phrases.length)] + "! ";
		$scope.kidSaysThis.push(item);
		console.log(item);
	};

	$scope.randomFancyWord = function(){
		var item = {};
		item.kidSaysThis= $scope.words[Math.floor(Math.random() * $scope.words.length)] + "! ";
		item.decoration = $scope.dec[Math.floor(Math.random() * $scope.dec.length)];
		$scope.kidSaysThis.push(item);
		console.log(item);
	};
	
	$scope.randomFancyPhrase = function(){
		var item = {};
		item.kidSaysThis= $scope.phrases[Math.floor(Math.random() * $scope.phrases.length)] + "! ";
		item.decoration = $scope.dec[Math.floor(Math.random() * $scope.dec.length)];
		$scope.kidSaysThis.push(item);
		console.log(item);
	};
});

