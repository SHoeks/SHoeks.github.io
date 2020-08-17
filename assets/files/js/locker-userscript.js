jQuery(document).ready(function ($) {
   $('.locked').sociallocker({
	text:{
	   header: 'The download link is locked',
	   message: 'Please support me and use one of the buttons below to unlock the download.'
	},
	theme: 'flat',
	facebook:{
	   like:{
	      url: 'https://www.facebook.com/northlandscapes.photography/',
	      title: 'Like Page'
	   },
	   share:{
	      url: 'https://www.northlandscapes.com/free-lightroom-presets-dark-and-moody-landscapes',
	      title: 'Share'
	   },
	   appId: '2067248989992134'
	},
	twitter:{
	   tweet:{
	      url: 'https://www.northlandscapes.com/free-lightroom-presets-dark-and-moody-landscapes',
	      text: 'Download FREE #Lightroom presets for dark and moody landscape photography by Northlandscapes',
	      via: 'JanWaider',
	      title: 'Tweet'
	   },
	   follow:{
	      url: 'https://twitter.com/JanWaider',
	      title: 'Follow'
	   }
	},
	buttons:{
	   order: ["facebook-like","twitter-follow"], //,"facebook-share","twitter-tweet"
	   counters: false,
	   lazy: true
	}
   });
});