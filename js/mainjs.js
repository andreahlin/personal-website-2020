var colorSet1 = ["#a5b6d1", 
					"#dbca30", 
					"#c15d3a",
					"#3a4a63",
					"#5f774a",
					"#837da0",
					"#66607f",
					"#b585b3",
					"#af646f",
					"#75a8af",
					"#bf792f",
					"#72164f",
					"#6f9681",
					"#354f07",
					"#5560db",
					"#f2bd43"]; 

var hobbiesArray = [
		 	"her family" ,
			"sketching people who aren't looking",
			"making music with her friends",
			"criminal minds",
			"baking nian gao",
			"leisurely walks in suburban neighborhoods",
			"philly sunsets from her 13th floor apartment",
			"laying in her bed",
			"swimming",
			"communication interpretation",
			"listening to people she knows sing",
			"coffee shops with big windows",
			"laughing really really hard",
			"working on her latest knitting project",
			"making watercolor cards",
			"sleeping in",
			"playing with cats",
			"reading books that make her cry",
			"finding a brand new jam",
			"drinking tea",
			"a good vine compilation",
			"dancing in her room" ,
			"babies and small children",
		    "sitting outside in the springtime",
			"making ceramic pots" ,
			"videos of musicians performing & getting really into it",
			"kind eyes",
			"learning music theory",
			"folding fresh laundry",
			"watching twilight unironically",
			"playing soccer",
			"thanking others sincerely",
			"ice cream",
			]

// function that shuffles an array 
function fisherYates(list) 
{
	var currentIndex = list.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = list[currentIndex]; 
		list[currentIndex] = list[randomIndex];
		list[randomIndex] = temporaryValue;
	}
	return list; 
}

function hoverColor()
{
	// console.log("hi");
	var shuffledArray = fisherYates(colorSet1);
	var count = 0; 
	// $(this).css('color', 'pink'); 
	$(this).children('.letter-class').each(function() {
		$(this).css('color', shuffledArray[count]); 
		count++;
	});
}

function hoverDone() 
{
	$(this).children('.letter-class').each(function() {
		$(this).css('color', 'black'); 
	});
}

function hoverColorSmall()
{
	// console.log("hi");
	var shuffledArray = fisherYates(colorSet1);
	var count = 0; 
	// $(this).css('color', 'pink'); 
	$(this).children('.letter-class-2').each(function() {
		$(this).css('color', shuffledArray[count]); 
		count++;
	});
}

function hoverDoneSmall() 
{
	$(this).children('.letter-class-2').each(function() {
		$(this).css('color', 'black'); 
	});
}

function hoverIcon()
{
	$(this).attr('src','media/home-yellowblue.png');
}

function hoverIconDone()
{
	$(this).attr('src','media/home-blueyellow.png');

}

$(document).ready(function(){
	$(".colorlink").hover(hoverColor, hoverDone);
	$(".return-home").hover(hoverColorSmall, hoverDoneSmall);

	$(".return-house-icon").hover(hoverIcon, hoverIconDone);   
})

$("andrea.html").ready(function(){
	var newArr = fisherYates(hobbiesArray);
	$("#hobbies-array").html("&#19968;  &nbsp;" + "jesus" + "<br>" 
		+ "&#20108; &nbsp;" + newArr[0] + "<br>" + 
		"&#19977; &nbsp;" + newArr[1] + "<br>"); 
	var count = 2; 

	$("#hobbies-button").click(function() {
		if (count + 2 >= hobbiesArray.length) 
		{
			count = 0; 
		}
		$("#hobbies-array").html("&#19968; &nbsp;" + newArr[count] + "<br>" 
		+ "&#20108; &nbsp;" + newArr[count + 1] + "<br>" + 
		"&#19977; &nbsp;" + newArr[count + 2] + "<br>"); 
		count = count + 3; 
	})
})

$("andrea.html").ready(function() {
	$("#button-contact").hover(function() {
		$(this).html("<br> contact >>"); 
	},
	function() {
		$(this).html("<br> contact >")
	})
})

$("visuals.html").ready(function() {
	  $("video").hover(function() {
	  	$(this)[0].controls = true; 
	  	$(this)[0].controls.opacity = 0.5;
	  }, function() { $(this)[0].controls = false;})

	$("#button-contact2").hover(function() {
			$(this).html("<br> vimeo >>"); 
		},
		function() {
			$(this).html("<br> vimeo >")
		})
})

$(document).ready(function(){
	$(".go-home-link").hover(function() {
			$(this).html("<< home"); 
		},
		function() {
			$(this).html("&nbsp < home")
		})
})

$(document).ready(function(){
	// var music = new Audio("animation music 1.wav");
	// music.play(); 
})

// ARCHIVE: drop down function
// $("archive.html").ready(function() {
// 	// $('.btn-btn-custom').collapse() { console.log("here"); }

// 	var upArrow = String.fromCharCode(9651);
// 	var downArrow = String.fromCharCode(9661);
// 	var newString, newString2;
// 	$(".btn-btn-custom").click(function() {
// 		var string = $(this).html();
// 		var arrowSymbol = string.charAt(11); 
// 		if (arrowSymbol === downArrow) 
// 		{
// 			// change down arrow to the up arrow
// 			newString = string.replace(downArrow, upArrow);
// 			$(this).html(newString);
// 		} 
// 		else 
// 		{
// 			// change it to the down arrow
// 			newString2 = string.replace(upArrow, downArrow);
// 			$(this).html(newString2);
// 		}	
// 	});
// })




