//过滤器
var filters = angular.module("filters", []).filter("html", function($sce){
	return function(value){
		return $sce.trustAsHtml(value)
	}
})
