
setTimeout(addFirstbutton, 10000)
var mutedUser=[];
function addFirstbutton()
{
	
	
	$(".gig-comment-username").each(function(){
		username = $(this).html();
		$(this).after('<button class="muteme" value="'+username+'"> Mute </button>');
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
				$(this).after('<button class="muteme" value="'+username+'"> Mute </button>');
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
setInterval(addnewbutton, 1000);