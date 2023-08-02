
var canvas = new fabric.Canvas("myCanvas")

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 400;

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function (Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y, 
			left:hole_x
		});
		canvas.add(hole_obj)
	});
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function (Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y, 
			left:ball_x
		});
		canvas.add(ball_obj)
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("Altura da imagem do bloco t = " + block-image_height);
			console.log("Quando a tecla direcional cima é pressinada, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove_(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("Altura da imagem do bloco t = " + block-image_height);
			console.log("Quando a tecla direcional baixo é pressinada, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove_(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			if(ball_x <=5)
		{
			ball_x = ball_x + block_image_height;
			console.log("Altura da imagem do bloco t = " + block-image_height);
			console.log("Quando a tecla direcional esquerda é pressinada, X =  " + ball_x + " , X = "+ball_x);
			canvas.remove_(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_height;
			console.log("Altura da imagem do bloco t = " + block-image_height);
			console.log("Quando a tecla direcional direita é pressinada, X =  " + ball_x + " , X = "+ball_x);
			canvas.remove_(ball_obj);
			new_image();
		}
		}
	}
	
}}
