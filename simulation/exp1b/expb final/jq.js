$(document).ready(function() {
	
	$("img.gp1").click(function() {
		var total = 0;
		var src = $(this).attr("src");
		var srcOfa1 = $("#a1").attr("src");
		var srcOfF1 = $("#f1").attr("src");
		var id = $(this).attr("id");
		
		//changing the value of all display
		/*if(id == "a1") {
			if($("img#f1").attr("src") == "green.jpg") {
				$("#q1").attr("src","0.jpg");
				if($("img#k1").attr("src") == "green.jpg") {
					$("#q2").attr("src","0.jpg");
					if($("img#k1").attr("src") == "green.jpg") {
						$("#q3").attr("src","0.jpg");
					}
				}
			} else {
				return false;
			}
		}*/
		
		//Check the status of the f1 button, if it is green or red
		if(id == "f1") {
			if(srcOfF1 == "green.jpg") {
				$("#q1").attr("src","8.jpg");
				$(this).attr("src","red.jpg");
				return false;
				
			} else {
				$(this).attr("src","green.jpg");
				srcOfF1 = "green.jpg";
			}
			//alert("hhhh");
			
		}
		//checkTotOfOtherGrps("gp2","gp3");
		
		//check first group button status either its green or red
		if(src == "green.jpg") {
			$(this).attr("src","red.jpg");
		} else {
			$(this).attr("src","green.jpg");
			checkTotOfOtherGrps("gp2","gp3");
		}

		//changing the value of q1 display
		//alert(srcOfF1);
		if(srcOfF1 == "green.jpg") {
			$(".gp1").each(function() {
				var src = $(this).attr("src");
				if(src == "green.jpg") {
					total += parseInt($(this).attr("imgValue"));
				}
				$("#q1").attr("src",total+".jpg");
			});
		}
		checkTotal();
		
	});
	
	$("img.gp2").click(function() {
		var total = 0;
		var src = $(this).attr("src");
		var srcOfk1 = $("#k1").attr("src");
		var id = $(this).attr("id");
		
		
		//Check the status of the f1 button, if it is green or red
		if(id == "k1") {
			if(srcOfk1 == "green.jpg") {
				$("#q2").attr("src","8.jpg");
				$(this).attr("src","red.jpg");
				return false;
				
			} else {
				$(this).attr("src","green.jpg");
				srcOfk1 = "green.jpg";
			}
			//alert("hhhh");
			
		}
		
		//check first group button status either its green or red
		if(src == "green.jpg") {
			$(this).attr("src","red.jpg");
		} else {
			$(this).attr("src","green.jpg");
			checkTotOfOtherGrps("","gp3");			
		}
		
		//checkTotOfOtherGrps("","gp3");

		//changing the value of q1 display
		//alert(srcOfF1);
		if(srcOfk1 == "green.jpg") {
			$(".gp2").each(function() {
				var src = $(this).attr("src");
				if(src == "green.jpg") {
					total += parseInt($(this).attr("imgValue"));
				}
				$("#q2").attr("src",total+".jpg");
			});
		}
		checkTotal();
		
	});
	
	$("img.gp3").click(function() {
		var total = 0;
		var src = $(this).attr("src");
		var srcOfp1 = $("#p1").attr("src");
		var id = $(this).attr("id");
		
		
		//Check the status of the f1 button, if it is green or red
		if(id == "p1") {
			if(srcOfp1 == "green.jpg") {
				$("#q3").attr("src","8.jpg");
				$(this).attr("src","red.jpg");
				return false;
				
			} else {
				$(this).attr("src","green.jpg");
				srcOfp1 = "green.jpg";
			}
			//alert("hhhh");
			
		}
		
		//check first group button status either its green or red
		if(src == "green.jpg") {
			$(this).attr("src","red.jpg");
		} else {
			$(this).attr("src","green.jpg");
		}

		//changing the value of q1 display
		//alert(srcOfF1);
		if(srcOfp1 == "green.jpg") {
			$(".gp3").each(function() {
				var src = $(this).attr("src");
				if(src == "green.jpg") {
					total += parseInt($(this).attr("imgValue"));
				}
				$("#q3").attr("src",total+".jpg");
			});
		}
		checkTotal();
		
	});
	
	
});


function checkTotOfOtherGrps(gp2,gp3) {
	var tot_grp2 = 0;
	var tot_grp3 = 0;
	var srcOfk1 = $("#k1").attr("src");
	var srcOfp1 = $("#p1").attr("src");
	if(srcOfk1 == "green.jpg"){
		if(gp2 != "") {
			$(".gp2").each(function() {
				var src = $(this).attr("src");
				if(src == "green.jpg") {
					tot_grp2 += parseInt($(this).attr("imgValue"));
				}
			});
			$("#q2").attr("src",tot_grp2+".jpg");
		}
	}
	if(srcOfp1 == "green.jpg"){
		$(".gp3").each(function() {
			var src = $(this).attr("src");
			if(src == "green.jpg") {
				tot_grp3 += parseInt($(this).attr("imgValue"));
			}
		});
		$("#q3").attr("src",tot_grp3+".jpg");
	}
	
}


function checkTotal() {
	var tot1 = 0;
	var tot2 = 0;
	var tot3 = 0;
	
	if($("#a1").attr("src") == "red.jpg" && $("#g1").attr("src") == "red.jpg" && $("#l1").attr("src") == "red.jpg") {
		$(".gp1").each(function() {
			var src = $(this).attr("src");
			if(src == "green.jpg") {
				tot1 += parseInt($(this).attr("imgValue"));
			}
		});
		
		$(".gp2").each(function() {
			var src = $(this).attr("src");
			if(src == "green.jpg") {
				tot2 += parseInt($(this).attr("imgValue"));
			}
		});
		
		$(".gp3").each(function() {
			var src = $(this).attr("src");
			if(src == "green.jpg") {
				tot3 += parseInt($(this).attr("imgValue"));
			}
		});
		
		if(tot1 == 0 && tot2 == 0 && tot3 == 0) {
			$("#q1,#q2,#q3").attr("src","default.jpg");
		}
		else if(tot1 == 0 && tot2 == 0 && tot3 != 0) {
			$("#q1,#q2").attr("src","default.jpg");
		}
		else if(tot1 == 0 && tot2 != 0 && tot3 != 0) {
			$("#q1").attr("src","default.jpg");
		}
		else if(tot1 == 0 && tot2 != 0 && tot3 == 0) {
			$("#q1").attr("src","default.jpg");
		}
	}
}


