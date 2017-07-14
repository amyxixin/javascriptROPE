var id = [];
var route = [];
var secsSinceReport = [];
var lat = [];
var lon = [];
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "http://webservices.nextbus.com/service/publicXMLFeed?command=vehicleLocations&a=ttc&r=53&t=0"
		dataType: "xml"
		success: function(xml){
			$(xml).find("vehicle").each(function(){
				id.push($(this).attr("id"));
				route.push($(this).attr("routeTag"));
				secsSinceReport.push($(this).attr("secsSinceReport"));
				lat.push($(this).attr("lat"));
				lon.push($(this).attr("lon"));
			});
		}
	})
