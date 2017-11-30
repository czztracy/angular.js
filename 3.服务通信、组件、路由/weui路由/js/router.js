//路由
var router = angular.module("router", []).config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state("index", {
		url: "/index",
		templateUrl: "../templates/index.html"
	}).state("home", {
		url: "/home",
		template: `
			<div>
				<p>HOME</p>
				<a href="#!/home/a">A</a>
				<ui-view></ui-view>
			<div>
		`
	}).state("home.a", {
		url: "/a",
		template: `<p>恩比德</p>`
	})
	$urlRouterProvider.when("", "/index")
})
