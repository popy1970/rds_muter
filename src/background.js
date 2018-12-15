
setTimeout(addFirstbutton, 10000)
var mutedUser=[];
var userlist =[];
var counter;
var usertocount;
var countmessage=[];
function addFirstbutton()
{
	

	if ($("#commentsDiv").length > 0)
	{
		$(".form-popup").show();
	}

	$(".gig-comment-username").each(function(){
		username = $(this).html();
		$(this).after('<button class="muteme" value="'+username+'"> Silence </button>');
		if ($.inArray( username, userlist ) == -1)
			{
				countmessage[username] = 0;
				userlist.push(username);
				$("#user_container").append('<div class="usernameListe"><button class="muteme btn_list" value="'+username+'"> Silence </button><div class="nickname">'+username+'</div><div data-name="'+username+'" class="count">1</div></div>');
				//countmessage[username] = 1;
				//countmessage.push({username:1});
				//var counter= $(".count").find("[data-name='" + username + "']");
				//console.log(counter);
				//counter.innerHTML ="bla";
				//console.log(countmessage[username]);
			}
		//console.log(usertocount);
		countmessage[username] = countmessage[username] +1;
		$(".usernameListe").find("[data-name='" + username + "']").html(countmessage[username]);
	});
	console.log(countmessage);
	$.each(countmessage,function (index, value) {
	    console.log('value='+value);
	});
	$(".muteme").click(function(){
		mutedUser.push($(this).attr("value"));
		
		
		$(".gig-comment-username").each(function(){
			username = $(this).html();
			if ($.inArray( username, mutedUser ) != -1)
			{
				$(this).closest(".gig-comment-self-data").hide();
				$(this).closest(".gig-comment").find(".gig-comment-photo").hide();
			}
		});
	});
//	var bloclist = $(".gig-comment-username");
//	var username;
//	for(var i = 0; i < bloclist.length; i++){
//		username = bloclist[i].innerHTML;
//	    $(this).after('<button value="'+username+'">test</button>');
//	}
//	$(".gig-comment-username").after('<button value="blabla">test</button>');
}

function addnewbutton()
{
	$(".gig-comment-newComment").find(".gig-comment-username").each(function(){
		username = $(this).html();
		if ($.inArray( username, mutedUser ) != -1)
		{
			$(this).closest(".gig-comment-self-data").hide();
			$(this).closest(".gig-comment").find(".gig-comment-photo").hide();
		}
		if ($(this).parent().find(".muteme").length == 0){
				$(this).after('<button class="muteme" value="'+username+'"> Silence </button>');
				$(this).parent().find(".muteme").click(function(){
					mutedUser.push($(this).attr("value"));
					username = $(this).attr("value");
					if ($.inArray( username, mutedUser ) != -1)
					{
						$(this).closest(".gig-comment-self-data").hide();
						$(this).closest(".gig-comment").find(".gig-comment-photo").hide();
					}
					$(".gig-comment-username").each(function(){
						username = $(this).html();
						if ($.inArray( username, mutedUser ) != -1)
						{
							$(this).closest(".gig-comment-self-data").hide();
							$(this).closest(".gig-comment").find(".gig-comment-photo").hide();
						}
					});
					});
		}
		
	});
}
var box = '<div class="form-popup"><div id="popup_header">Liste des usagers</div>\
	<div id="user_container" class="hidden"></div>\
	</div>';
$("body").prepend(box);

$("#popup_header").click(function(){
	if ($("#user_container").hasClass("hidden"))
		{
			$("#user_container").removeClass("hidden")
		}
	else
		{
			$("#user_container").addClass("hidden")
		}
});
setInterval(addnewbutton, 1000);

