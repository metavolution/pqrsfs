var SDL = require('../lib/sdl');
console.dir(SDL);

var ic = 0;
var increment = 0.1;

SDL.init(SDL.INIT.VIDEO);
var screen = SDL.setVideoMode(800,600,32,0);
process.on('exit', function () { SDL.quit(); });

var img = SDL.createRGBSurface(0, 256, 256);
for (var y = 0; y < 256; y++) {
  for (var x = 0; x < 256; x++) {
    var a = Math.floor(Math.sin(x/256*Math.PI)*Math.sin(y/256*Math.PI)*256);
    //SDL.fillRect(img, [x, y, 1,1], (0 << 0)+(y << 8)+(x << 16)+(a << 24));
  }
}
SDL.flip(img);

setInterval(function () {
  var cr = 0, cg = 0, cb = 0;
	cr = 255;
  cr = Math.random() * 255;
  cg = Math.random() * 255;
  cb = Math.random() * 255;

	cr = Math.sin (1);
  cr = Math.sin (Math.PI);

  cr = Math.sin (ic * Math.PI/2) * 255;
	cg = Math.cos (ic * Math.PI) * 255;
 	cb = Math.tan (ic) * 255;
  cr = 0;

  ic += increment;
  if (ic >= 1) { 
    ic = 0;
		if (Math.random() <= 0.1)
  		SDL.fillRect(img,[0, 0, 800,600],SDL.mapRGB(img.format, 0, 0, 0));
  }

  for (var i = 0; i < 2; i++) {

    var x = Math.floor(Math.random() * (screen.w - 256));
    var y = Math.floor(Math.random() * (screen.h - 256));

    SDL.blitSurface(img, null, screen, [x,y]);
    //pixelRGBA(img,10,10,255,0,0,100);
    SDL.fillRect(img,[x, y, 1,1],SDL.mapRGB(img.format, cr, cg, cb));

  }
  SDL.flip(screen);
}, 10);
//SDL.freeSurface(img);

SDL.events.on("QUIT", function (evt) { process.exit(0); }); // Window close
SDL.events.on("KEYDOWN", function (evt) {
  if (evt.sym === 99 && evt.mod === 64) process.exit(0); // Control+C
  if (evt.sym === 27 && evt.mod === 0) process.exit(0);  // ESC
});

