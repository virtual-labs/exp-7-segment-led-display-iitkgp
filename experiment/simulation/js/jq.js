$(document).ready(function() {
	
	$("img.gp1").click(function() {
		var total = 0;
		var src = $(this).attr("src");
		var srcOfa1 = $("#a1").attr("src");
		var srcOfF1 = $("#f1").attr("src");
		var id = $(this).attr("id");
		
		//changing the value of all display
		/*if(id == "a1") {
			if($("img#f1").attr("src") == "images/green.jpg") {
				$("#q1").attr("src","images/0.jpg");
				if($("img#k1").attr("src") == "images/green.jpg") {
					$("#q2").attr("src","images/0.jpg");
					if($("img#k1").attr("src") == "images/green.jpg") {
						$("#q3").attr("src","images/0.jpg");
					}
				}
			} else {
				return false;
			}
		}*/
		
		//Check the status of the f1 button, if it is green or red
		if(id == "f1") {
			if(srcOfF1 == "images/green.jpg") {
				$("#q1").attr("src","images/8.jpg");
				$(this).attr("src","images/red.jpg");
				return false;
				
			} else {
				$(this).attr("src","images/green.jpg");
				srcOfF1 = "images/green.jpg";
			}
			//alert("hhhh");
			
		}
		//checkTotOfOtherGrps("gp2","gp3");
		
		//check first group button status either its green or red
		if(src == "images/green.jpg") {
			$(this).attr("src","images/red.jpg");
		} else {
			$(this).attr("src","images/green.jpg");
			checkTotOfOtherGrps("gp2","gp3");
		}

		//changing the value of q1 display
		//alert(srcOfF1);
		if(srcOfF1 == "images/green.jpg") {
			$(".gp1").each(function() {
				var src = $(this).attr("src");
				if(src == "images/green.jpg") {
					total += parseInt($(this).attr("imgValue"));
				}
				$("#q1").attr("src","images/"+total+".jpg");
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
			if(srcOfk1 == "images/green.jpg") {
				$("#q2").attr("src","images/8.jpg");
				$(this).attr("src","images/red.jpg");
				return false;
				
			} else {
				$(this).attr("src","images/green.jpg");
				srcOfk1 = "images/green.jpg";
			}
			//alert("hhhh");
			
		}
		
		//check first group button status either its green or red
		if(src == "images/green.jpg") {
			$(this).attr("src","images/red.jpg");
		} else {
			$(this).attr("src","images/green.jpg");
			checkTotOfOtherGrps("","gp3");			
		}
		
		//checkTotOfOtherGrps("","gp3");

		//changing the value of q1 display
		//alert(srcOfF1);
		if(srcOfk1 == "images/green.jpg") {
			$(".gp2").each(function() {
				var src = $(this).attr("src");
				if(src == "images/green.jpg") {
					total += parseInt($(this).attr("imgValue"));
				}
				$("#q2").attr("src","images/"+total+".jpg");
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
			if(srcOfp1 == "images/green.jpg") {
				$("#q3").attr("src","images/8.jpg");
				$(this).attr("src","images/red.jpg");
				return false;
				
			} else {
				$(this).attr("src","images/green.jpg");
				srcOfp1 = "images/green.jpg";
			}
			//alert("hhhh");
			
		}
		
		//check first group button status either its green or red
		if(src == "images/green.jpg") {
			$(this).attr("src","images/red.jpg");
		} else {
			$(this).attr("src","images/green.jpg");
		}

		//changing the value of q1 display
		//alert(srcOfF1);
		if(srcOfp1 == "images/green.jpg") {
			$(".gp3").each(function() {
				var src = $(this).attr("src");
				if(src == "images/green.jpg") {
					total += parseInt($(this).attr("imgValue"));
				}
				$("#q3").attr("src","images/"+total+".jpg");
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
	if(srcOfk1 == "images/green.jpg"){
		if(gp2 != "") {
			$(".gp2").each(function() {
				var src = $(this).attr("src");
				if(src == "images/green.jpg") {
					tot_grp2 += parseInt($(this).attr("imgValue"));
				}
			});
			$("#q2").attr("src","images/"+tot_grp2+".jpg");
		}
	}
	if(srcOfp1 == "images/green.jpg"){
		$(".gp3").each(function() {
			var src = $(this).attr("src");
			if(src == "images/green.jpg") {
				tot_grp3 += parseInt($(this).attr("imgValue"));
			}
		});
		$("#q3").attr("src","images/"+tot_grp3+".jpg");
	}
	
}


function checkTotal() {
	var tot1 = 0;
	var tot2 = 0;
	var tot3 = 0;
	
	if($("#a1").attr("src") == "images/red.jpg" && $("#g1").attr("src") == "images/red.jpg" && $("#l1").attr("src") == "images/red.jpg") {
		$(".gp1").each(function() {
			var src = $(this).attr("src");
			if(src == "images/green.jpg") {
				tot1 += parseInt($(this).attr("imgValue"));
			}
		});
		
		$(".gp2").each(function() {
			var src = $(this).attr("src");
			if(src == "images/green.jpg") {
				tot2 += parseInt($(this).attr("imgValue"));
			}
		});
		
		$(".gp3").each(function() {
			var src = $(this).attr("src");
			if(src == "images/green.jpg") {
				tot3 += parseInt($(this).attr("imgValue"));
			}
		});
		
		if(tot1 == 0 && tot2 == 0 && tot3 == 0) {
			$("#q1,#q2,#q3").attr("src","images/default.jpg");
		}
		else if(tot1 == 0 && tot2 == 0 && tot3 != 0) {
			$("#q1,#q2").attr("src","images/default.jpg");
		}
		else if(tot1 == 0 && tot2 != 0 && tot3 != 0) {
			$("#q1").attr("src","images/default.jpg");
		}
		else if(tot1 == 0 && tot2 != 0 && tot3 == 0) {
			$("#q1").attr("src","images/default.jpg");
		}
	}
}


