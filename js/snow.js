		     var canvas=document.getElementById("canvas");
		     var ctx=canvas.getContext("2d");
		     var width=window.innerWidth;
			 var height=window.innerHeight;
			 canvas.width=width;
		     canvas.height=height;
			 var bg=new Image();
			 bg.src="img/bg.png";
			 function bgpaint(){
				 ctx.drawImage(bg,0,0,width,height);
			 }
			
			function fullSnow(){
				//获取画布，设置图片
				//var xh=new Image();
				//xh.src="img/h1.png";
				//雪花的构造函数及原型
				function Snow(size,positionX){
					this.size=size;
					this.height=size;
					this.x=positionX;
					this.y=0;
					this.k=0;
				}
				Snow.prototype={	
					paint:function(){
						//ctx.drawImage(xh,this.x,this.y);
						
						ctx.beginPath();
						ctx.arc(this.x,this.y,this.size,0,360);
						ctx.fillStyle="white";
						ctx.fill();
						ctx.closePath();
						this.k++;	
					},
					step:function(){
						this.y+=10;
					}
				}
				//添加雪花
				var Snows=[];
                function addSnow(){
					var size=parseInt(6*Math.random());
					var x=width*Math.random();
					Snows[Snows.length]=new Snow(size,x);
				
				}
				
				//画所有雪花
				function paint(){
					//ctx.clearRect(0,0,canvas.width,canvas.height); 
					for(var i=0;i<Snows.length;i++){
						Snows[i].paint();
						
					}
				}
				//所有雪花的移动
				function move(){
						for(var i=0;i<Snows.length;i++){	
								Snows[i].step();
						}
					
			    }
				//删除出界雪花
				function deleat(){
					var arr=[];
					for(var i=0;i<Snows.length;i++){
						if(Snows[i].height>height){
							
						}
					}
				}
				//启动定时器
	        
				setInterval(function(){
					addSnow();
					move();
					bgpaint();
					paint();
					
					   
				},1000/24);	
			}
			

			fullSnow();
	