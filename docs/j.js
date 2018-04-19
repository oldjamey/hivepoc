var videourl = 'https://ia800205.us.archive.org/14/items/RickAstleyNeverGonnaGiveYouUp_201603/Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up.mp4';
var videocontainer = '#main';
var video = '<video width="640" height="480" id="intro-video" autoplay loop src="' + videourl + '"></video>';
$(videocontainer).append(video);
