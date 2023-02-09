function Talk(){
    var Know = {
    "Who Are You" : "Hello, Codewith_random Here ",
    "How Are You" : "Good :)",
    "What Can I Do For You" : "Please Give Us A Follow & Like.",
    "Your Followers" : "I Have My Family Of 5000 Members, I Don't Have Follower ,Have Supportive Famiy ",
    "Ok" : "Thank You So Much ",
    "Bye" : "Okay! Will Meet Soon.."
    };
    var User = document.getElementById('UserBox').value;
    document.getElementById('ChatLog').InnerHTML = User + "<br>";
    if (User in Know) {
    document.getElementById('ChatLog').InnerHTML = Know[User] + "<br>";
    }else{
    document.getElementById('ChatLog').InnerHTML = "Sorry,I Didn't Understand <br>";
    }
    }