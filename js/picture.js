			$(function(){
				var index = 0;
				var fun;
				dingshiqi();
				function dingshiqi() {
					var fun = setInterval(function(){
					if(index==$(".box-img").length-1){
						index = 0;
						$(".box-img").css("opacity","0");
						$(".box-img").eq(index).css("opacity","1");
					}else{
						index++;
						$(".box-img").css("opacity","0");
						$(".box-img").eq(index).css("opacity","1");
					}
				},3000)
				}
				$(".box-left").click(function(){
					clearInterval(fun);
					if(index==0){
						index = $(".box-img").length-1;
						$(".box-img").css("opacity","0");
						$(".box-img").eq(index).css("opacity","1");
						dingshiqi();
					}else{
						index--;
						$(".box-img").css("opacity","0");
						$(".box-img").eq(index).css("opacity","1");
						dingshiqi();
					}
				})
				$(".box-right").click(function(){
					clearInterval(fun);
					if(index==$(".box-img").length-1){
						index = 0;
						$(".box-img").css("opacity","0");
						$(".box-img").eq(index).css("opacity","1");
						dingshiqi();
					}else{
						index++;
						$(".box-img").css("opacity","0");
						$(".box-img").eq(index).css("opacity","1");
						dingshiqi();
					}
				})
			})