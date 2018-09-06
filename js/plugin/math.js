define(function(){

	return {
		add: function(a,b){
			return a + b;
		}
	};
});

//如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。
define(['myLib'], function(myLib){
　　　　function foo(){
　　　　　　myLib.doSomething();
　　　　}
　　　　return {
　　　　　　foo : foo
　　　　};
});