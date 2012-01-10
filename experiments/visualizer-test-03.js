var SDL = require('../lib/sdl');
console.dir(SDL);

var ic = 0;
var increment = 0.12342;

SDL.init(SDL.INIT.VIDEO);
var screen = SDL.setVideoMode(640,480,32,0);
process.on('exit', function () { SDL.quit(); });


var img = SDL.createRGBSurface(0, 256, 256);


setInterval(function () {
  var cr = 0, cg = 0, cb = 0;
	cr = 255;

	//cr = Math.sin (1);
  //cr = Math.sin (Math.PI);

  cr = Math.sin (ic * Math.PI/2) * 255;
	cg = Math.cos (ic * Math.PI) * 255;
 	cb = Math.tan (ic) * 255;
  cr = 0;

  ic += increment;
  if (ic >= 10) { 
    ic = 0;
		if ( (Math.random() <= 0.23) && (Math.random() <= 0.42) )
  		//SDL.fillRect(img,[0, 0, Math.random() * 640, Math.random() * 480],SDL.mapRGB(img.format, 0, 0, 0));
;
  }

  for (var i = 0; i < 2; i++) {

    var x = Math.floor(Math.random() * (screen.w - 256));
    var y = Math.floor(Math.random() * (screen.h - 223));

    SDL.blitSurface(img, null, screen, [x,y]);
    //pixelRGBA(img,10,10,255,0,0,100);
    SDL.fillRect(img,[x, y, 1+Math.random()+0.5,1+Math.random()+0.5],SDL.mapRGB(img.format, cr, cg, cb));

  }
  SDL.flip(screen);
}, 1);
//SDL.freeSurface(img);

SDL.events.on("QUIT", function (evt) { process.exit(0); }); // Window close
SDL.events.on("KEYDOWN", function (evt) {
  if (evt.sym === 99 && evt.mod === 64) process.exit(0); // Control+C
  if (evt.sym === 27 && evt.mod === 0) process.exit(0);  // ESC
});

