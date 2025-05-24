import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";
import styles from "./styles/PushyBlockGame.scss"; // Import the SCSS file

interface Options {
  // Add any options if needed in the future
}

const defaultOptions: Options = {};

export default ((userOpts?: Options) => {
  const opts = { ...userOpts, ...defaultOptions };

  function PushyBlockGame(props: QuartzComponentProps): JSX.Element {
    return (
      <div id="wrapper"> {/* Changed id to "wrapper" and removed placeholder */}
        <canvas class="sketch"></canvas> {/* Added canvas element */}
      </div>
    );
  }

  // Styles and scripts will be added later
  PushyBlockGame.css = styles; // Assign imported styles

  PushyBlockGame.afterDOMLoaded = `
// --- START OF PASTED GAME SCRIPT ---
function program() {

    title("https://www.khanacademy.org/computer-programming/happy-new-yearsgame/4622310878134272");
    size(400, 400);

    // All code goes here
    // todo: complete! if it lags, or just keeps on reloading, turn delag(the variable on line 6) to true
    // works for mobile now!!! I dare you to find the easter egg
    smooth();
    textFont(createFont("serif"));
    // for your potato computer, make it true
    var delag = false;
    var wins = false;
    var scene = 'home';
    var scene_images = [];
    var click = false;
    var keys = [];
    var keytick = 0;
    //              up    left  down   right
    var direcs = [false, false, false, false];
    // {
    function draw_pixel_art(cols, img, siz, x, y) {
        noStroke();
        for(var i = 0;i < img.length;i ++) {
            for(var j = 0;j < img[i].length;j ++) {
                fill(cols[img[i][j]]);
                if(img[i][j] === ' ') {
                    noFill();
                }
                rect(j * siz + x, i * siz + y, siz, siz);
            }
        }
    }
    var arctan = function(x1,y1,x2,y2){
        if(x2>=x1 && y2>=y1){
            return atan((y2-y1)/(x2-x1))-180;
        }else if(x2<=x1 && y2>=y1){
            return -1*(360-atan((y2-y1)/(x2-x1)));
        }else if(x2>=x1 && y2<=y1){
            return atan((y2-y1)/(x2-x1))-180;
        }else if(x2<=x1 && y2<=y1){
            return (atan((y2-y1)/(x2-x1)));
        }
    };
    function rot(x1, y1, x2, y2, r) {
        var g = arctan(x1, y1, x2, y2);
        return {x: x2 - cos(r + g) * dist(x1, y1, x2, y2), y: y2 - sin(r + g) * dist(x1, y1, x2, y2)};
    }
    //} random funcs

    // {

    // {
    var player_colors = {
        "0":color(255, 0, 0),
        "1":color(209, 0, 0),
        "2":color(0, 0, 0),
    };
    var player_pixel = [
    " 22222222 ",
    "2101100102",
    "2010101012",
    "2000100102",
    "2001100112",
    "2101100112",
    "2110001002",
    "2110001102",
    "2100110012",
    " 22222222 ",
    ];
    var firework_colors1 = {
        "0":color(0, 187, 255),
        "1":color(0, 55, 207),
        "2":color(0, 0, 0),
    };
    var firework_colors2 = {
        "0":color(136, 255, 0),
        "1":color(0, 207, 69),
        "2":color(0, 0, 0),
    };
    var firework_colors3 = {
        "0":color(247, 255, 0),
        "1":color(207, 152, 0),
        "2":color(0, 0, 0),
    };
    var firework_colors4 = {
        "0":color(255, 85, 0),
        "1":color(207, 31, 0),
        "2":color(0, 0, 0),
    };
    var firework_colors5 = {
        "0":color(247, 0, 255),
        "1":color(138, 0, 207),
        "2":color(0, 0, 0),
    };
    var firework_colors6 = {
        "0":color(77, 0, 255),
        "1":color(24, 0, 207),
        "2":color(0, 0, 0),
    };
    var firework_pixel = [
    "    22    ",
    "  221022",
    " 20110112 ",
    "2110100112",
    "2110101102",
    "2100101102",
    "2111010112",
    " 21110112 ",
    "  221022  ",
    "    22    ",
    ];
    var spike_colors = {
        "0":color(87, 87, 87),
        "1":color(186, 186, 186),
        "2":color(0, 0, 0),
    };
    var spike_pixel = [
    "    22    ",
    "   2102   ",
    "   2002   ",
    "   2012   ",
    "  211002  ",
    "  201002  ",
    " 21001012  ",
    " 20101102 ",
    "2101100012",
    "2222222222",
    ];
    var block_colors1 = {
        "0":color(64, 64, 64),
        "1":color(120, 120, 120),
        "2":color(0, 0, 0),
    };
    var block_colors2 = {
        "1":color(64, 64, 64),
        "2":color(120, 120, 120),
        "0":color(0, 0, 0),
    };
    var block_colors3 = {
        "2":color(64, 64, 64),
        "0":color(120, 120, 120),
        "1":color(0, 0, 0),
    };
    var block_pixel = [
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    ];
    for(var i = 0;i < block_pixel.length;i ++) {
        for(var j = 0;j < 10;j ++) {
            block_pixel[i] += floor(random(0, 3));
        }
    }
    var river_colors = {
        "0":color(0, 149, 255),
        "1":color(0, 102, 255),
        "2":color(0, 221, 255)
    };
    var river_pixel = [
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    ];
    var conveyor_colors = {
        "0":color(108, 108, 108),
        "1":color(148, 148, 148),
        "2":color(128, 128, 128)
    };
    for(var i = 0;i < block_pixel.length;i ++) {
        for(var j = 0;j < 10;j ++) {
            river_pixel[i] += floor(random(0, 3));
        }
    }
    //} pixel art

    var portal;
    var player_img;
    var spike_img;
    var block_img1;
    var block_img2;
    var block_img3;
    var river_img;
    var conveyor_img;
    background(255, 255, 255);
    if(!delag) {
        var pixels = [];
        for(var i = 0;i < 400;i += 0.5) {
            for(var j = 0;j < 400;j += 0.5) {
                pixels.push({x:i, y:j, col:color(255, 255, 255)});
            }
        }
        for(var i = 0;i < pixels.length;i ++) {
            var t = pixels[i];
            if(dist(200, 200, t.x, t.y) < 20) {
                t.col = color(0, 17, 255);
                if((arctan(200, 200, t.x, t.y) + 30 * 80) % 30 < 15) {
                    t.col = color(187, 0, 255);
                }
                var r = rot(t.x, t.y, 200, 200, (50 - dist(200, 200, t.x, t.y)) * 2);
                t.x = r.x;
                t.y = r.y;
            }
            stroke(t.col);
            point(t.x, t.y);
        }
        portal = get(180, 180, 40, 40);
        background(255, 255, 255);
        draw_pixel_art(player_colors, player_pixel, 4, 0, 0);
        player_img = get(0, 0, 40, 40);
        background(255, 255, 255);
        draw_pixel_art(spike_colors, spike_pixel, 4, 0, 0);
        spike_img = get(0, 0, 40, 40);
        background(255, 255, 255);
        draw_pixel_art(block_colors1, block_pixel, 4, 0, 0);
        block_img1 = get(0, 0, 40, 40);
        background(255, 255, 255);
        draw_pixel_art(block_colors2, block_pixel, 4, 0, 0);
        block_img2 = get(0, 0, 40, 40);
        background(255, 255, 255);
        draw_pixel_art(block_colors3, block_pixel, 4, 0, 0);
        block_img3 = get(0, 0, 40, 40);
        background(255, 255, 255);
        draw_pixel_art(river_colors, river_pixel, 4, 0, 0);
        river_img = get(0, 0, 40, 40);
        background(255, 255, 255);
        draw_pixel_art(conveyor_colors, river_pixel, 4, 0, 0);
        var conveyor_img = get(0, 0, 40, 40);
    }else {
        noStroke();
        for(var i = 0;i < 360;i += 15) {
            if(i % 30 < 15) {
                fill(0, 17, 255);
            }else {
                fill(187, 0, 255);
            }
            arc(200, 200, 40, 40, i, i + 15);
        }
        portal = get(180, 180, 40, 40);
        background(255, 255, 255);
        noStroke();
        fill(255, 0, 0);
        rect(0, 0, 40, 40);
        player_img = get(0, 0, 40, 40);
        background(255, 255, 255);
        fill(0, 0, 0);
        triangle(0, 40, 20, 0, 40, 40);
        spike_img = get(0, 0, 40, 40);
        background(255, 255, 255);
        fill(0, 0, 0);
        rect(0, 0, 40, 40);
        block_img1 = get(0, 0, 40, 40);
        block_img2 = block_img1;
        block_img3 = block_img1;
        background(255, 255, 255);
        fill(0, 153, 255);
        rect(0, 0, 40, 40);
        river_img = get(0, 0, 40, 40);
        background(255, 255, 255);
        fill(122, 122, 122);
        rect(0, 0, 40, 40);
        conveyor_img = get(0, 0, 40, 40);
    }
    //} graphics

    // {
    function firework_particle(x, y, col) {
        this.x = x;
        this.y = y;
        this.direc = random(0, 360);
        this.magnitude = random(0, 10);
        this.xs = cos(this.direc) * this.magnitude;
        this.ys = sin(this.direc) * this.magnitude;
        this.col = col;
        this.life = 200;
    }
    firework_particle.prototype.draw = function() {
        noStroke();
        fill(this.col);
        for(var i = 10;i > 0;i --) {
            fill(lerpColor(this.col, color(13, 32, 128), sqrt(i/10)));
            rect(this.x, this.y, 0.5, 0, -i / 1.3);
        }
        //ellipse(this.x, this.y, 5, 5);
        this.x += this.xs;
        this.y += this.ys;
        this.xs = lerp(this.xs, 0, 0.07);
        this.ys = lerp(this.ys, 0, 0.07);
        this.ys += random(0.005, 0.015);
        this.life --;
    };
    var cols = [
    color(255, 0, 0),
    color(255, 255, 0),
    color(255, 0, 255),
    color(0, 255, 0),
    color(0, 255, 255),
    color(0, 0, 255),
    ];
    function firework() {
        this.x = random(0, 400);
        this.y = 450;
        this.ys = -5;
        this.xs = random(-1, 1);
        this.col = cols[floor(random(0, 6))];
        this.burst = false;
        this.parts = [];
    }
    firework.prototype.draw = function() {
        if(!this.burst) {
            fill(this.col);
            ellipse(this.x, this.y, 3, 3);
            if(this.y < 100) {
                this.burst = true;
                for(var i = 0;i < 50;i ++) {
                    this.parts.push(new firework_particle(this.x, this.y, this.col));
                }
            }
        }else {
            for(var i = 0;i < this.parts.length;i ++) {
                this.parts[i].draw();
                if(this.parts[i].life < 0) {
                    this.parts.splice(i, 1);
                }
            }
        }
        this.x += this.xs;
        this.y += this.ys;
        this.ys -= 0.1;
    };
    //} fireworks

    // {
    var blocks = [];
    var level = 0;
    var levels = [
    [
    "bbbbbbbbbb",
    "b        b",
    "b   o    b",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "b   m    b",
    "b   @    b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "b        b",
    "b       ob",
    "b    bbbbb",
    "b        b",
    "b  bbbb  b",
    "bbbb m   b",
    "b    @   b",
    "b        b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "bo   sss b",
    "b        b",
    "b ss     b",
    "b      ssb",
    "bsssss   b",
    "bs   s   b",
    "b  s b mbb",
    "b@bs     b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "bssss   ob",
    "b>>vs    b",
    "b^svs>   b",
    "b^svs^  sb",
    "b^svs^s  b",
    "b^s>>^s  b",
    "bmssssssmb",
    "b@       b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "b   o    b",
    "b        b",
    "b        b",
    "brrrrrrrrb",
    "b        b",
    "b   m    b",
    "b   m    b",
    "b@       b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "bor ss   b",
    "br<<^s m b",
    "b   ^<<< b",
    "b>v bss  b",
    "b v     <b",
    "bm       b",
    "b  >v    b",
    "b>>^v   @b",
    "bbbbsbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "b     rrob",
    "b >   << b",
    "b    ^<<<b",
    "brrrrr   b",
    "b        b",
    "bs ss  m b",
    "b    mmm b",
    "b@       b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "bvmmmm bob",
    "bv     b b",
    "b v    b b",
    "bv     b b",
    "b>>>>> brb",
    "b      brb",
    "b        b",
    "b@       b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbob",
    "b>>>>vbrrb",
    "bmbbbvsrrb",
    "b s<v  srb",
    "b rm   m b",
    "b sm     b",
    "b sv^    b",
    "b s>     b",
    "b@  mrm^ b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "b>v>v>v>vb",
    "b^v^v^v^vb",
    "b^v^v^v^vb",
    "b^v^v^v^vb",
    "bmv^v^v^vb",
    "bmv^v^v^vb",
    "bmv^v^v^rb",
    "b@>^>^>^ob",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "b       ob",
    "brrrrrrrrb",
    "b        b",
    "b        bbbbbbb",
    "b            mvb",
    "b        b^<<<<b",
    "b            mvb",
    "b       @b^<<<<<",
    "bbbbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "b mm m  ob",
    "bm mmmmm b",
    "bmm mmmm b",
    "bmmmm    b",
    "bmmmmm mmb",
    "bmmmmmm mb",
    "bmmmmmmm b",
    "b@mmmmmmmb",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "b@m>>v<m b",
    "b s      b",
    "b        bbbbb",
    "b      sr    b",
    "b      rmmm  b",
    "b      rmmm  b",
    "b   bbbbbbbbbb",
    "b   rrrrob",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "boooooooob",
    "brrrrrrrrb",
    "brrrrrrrrb",
    "b      ^ b",
    "b>  s^   b",
    "bm  ^m v b",
    "b    ^   b",
    "b@    m^ b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "bo   sss b",
    "b   @    b",
    "b ss     b",
    "b      ssb",
    "bsssss   b",
    "bs   s   b",
    "b  s b mbb",
    "b@bs     b",
    "bbbbbbbbbb",
    ],
    [
    "bbbbbbbbbb",
    "bor ss   b",
    "br<<^s@m b",
    "b   ^<<< b",
    "b>v bss  b",
    "b v     <b",
    "bm       b",
    "b@ >v    b",
    "b>>^v   @b",
    "bbbbsbbbbb",
    ],

    [
    "bbbbbbbbbb",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "b@       b",
    "bbbbbbbbbb",
    ],
    /*
    [
    "bbbbbbbbbb",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "b        b",
    "bbbbbbbbbb",
    ],*/

    ];
    var leveltxt = ["Push the firework\\ninto the portal\\n(arrow keys or swipe\\non mobile)", "If you get stuck,\\npress the restart button\\nor the enter button", "Avoid the spikes\\nthey will kill\\nboth you and\\nthe fireworks", "Conveyor blocks push\\nthe fireworks around,\\nbut you cannot use the\\nconveyor blocks", "Put fireworks in the river\\nto create a bridge\\n(don't question it)", "Good Luck!", "This one is kinda\\nhard", "patience", "", "", "ngl, I'm running\\nout of ideas", "", "the horde", "Try ramming through\\nconveyor belts,\\nsometimes they let you\\nthrough", "This looks similar...", "Try to bring the\\nplayers together"];
    var storyline = "It's New Year's again, \\nbut something treacherous has occured.\\n Professor Turpis, has stolen all of the\\nfireworks for the firework show!\\nHelp us bring back the fireworks please!";
    //} level stuff

    // {
    function Block(x, y, type, conveyorDirec) {
        this.x = x;
        this.y = y;
        this.fakex = this.x;
        this.fakey = this.y;
        this.type = type;
        this.movable = false;
        if(this.type === 'movable' || this.type === 'player') {
            this.movable = true;
        }
        this.waterlogged = false;
        if(this.type !== 'river') {
            this.waterlogged = true;
        }
        this.direction = "neutral";
        this.conveyorDirec = "neutral";
        this.conveyorUpdates = "";
        if(this.type === 'conveyor') {
            this.conveyorDirec = conveyorDirec;
        }else {
            this.conveyorUpdates = 0;
        }
        this.randScheme = floor(random(0, 3));
        this.randScheme2 = floor(random(0, 6));
    }
    function loadLevel() {
        var ad_later = [];
        var add_later = [];
        var addd_later = [];
        blocks = [];
        for(var i = 0;i < levels[level].length;i ++) {
            for(var j = 0;j < levels[level][i].length;j ++) {
                switch(levels[level][i][j]) {
                    case 'b':
                        add_later.push(new Block(j * 40, i * 40, "normal"));
                    break;
                    case  '@':
                        addd_later.push(new Block(j * 40, i * 40, "player"));
                    break;
                    case 'm':
                        addd_later.push(new Block(j * 40, i * 40, "movable"));
                    break;
                    case 'o':
                        blocks.push(new Block(j * 40, i * 40, "portal"));
                    break;
                    case 's':
                        add_later.push(new Block(j * 40, i * 40, "spike"));
                    break;
                    case '<':
                        ad_later.push(new Block(j * 40, i * 40, "conveyor", "LEFT"));
                    break;
                    case '>':
                        ad_later.push(new Block(j * 40, i * 40, "conveyor", "RIGHT"));
                    break;
                    case '^':
                        ad_later.push(new Block(j * 40, i * 40, "conveyor", "UP"));
                    break;
                    case 'v':
                        ad_later.push(new Block(j * 40, i * 40, "conveyor", "DOWN"));
                    break;
                    case 'r':
                        add_later.push(new Block(j * 40, i * 40, "river"));
                }
            }
        }
        for(var i = 0;i < ad_later.length;i ++) {
            blocks.push(ad_later[i]);
        }
        for(var i = 0;i < add_later.length;i ++) {
            blocks.push(add_later[i]);
        }
        for(var i = 0;i < addd_later.length;i ++) {
            blocks.push(addd_later[i]);
        }
    }
    Block.prototype.draw = function(blocks) {
        rectMode(CORNER);
        switch(this.type) {
            case 'movable':
                if(!delag) {
                    switch(this.randScheme2) {
                        case 0:
                            draw_pixel_art(firework_colors1, firework_pixel, 4, this.fakex, this.fakey);
                        break;
                        case 1:
                            draw_pixel_art(firework_colors2, firework_pixel, 4, this.fakex, this.fakey);
                        break;
                        case 2:
                            draw_pixel_art(firework_colors3, firework_pixel, 4, this.fakex, this.fakey);
                        break;
                        case 3:
                            draw_pixel_art(firework_colors4, firework_pixel, 4, this.fakex, this.fakey);
                        break;
                        case 4:
                            draw_pixel_art(firework_colors5, firework_pixel, 4, this.fakex, this.fakey);
                        break;
                        case 5:
                            draw_pixel_art(firework_colors6, firework_pixel, 4, this.fakex, this.fakey);
                        break;
                    }
                } else {
                    fill(0, 0, 0);
                    rectMode(CORNER);
                    rect(this.fakex, this.fakey, 40, 40);
                    fill(255, 255, 255);
                    ellipse(this.fakex + 20, this.fakey + 20, 20, 20);
                }
            break;
            case 'normal':
                fill(0, 0, 0);
                rect(this.fakex, this.fakey, 40, 40);
                if(this.randScheme === 0) {
                    image(block_img1, this.fakex, this.fakey);
                }else if(this.randScheme === 1) {
                    image(block_img2, this.fakex, this.fakey);
                }else if(this.randScheme === 2) {
                    image(block_img3, this.fakex, this.fakey);
                }
            break;
            case 'spike':
                fill(0, 0, 0);
                image(spike_img, this.fakex, this.fakey);

            break;
            case 'river':
                fill(0, 85, 255);

                image(river_img, this.fakex, this.fakey);
                if(this.waterlogged) {
                    fill(54, 54, 54, 200);
                    rect(this.fakex, this.fakey, 40, 40);
                }

            break;
            case 'player':
                fill(255, 0, 0);
                //rect(this.fakex, this.fakey, 40, 40);
                image(player_img, this.fakex, this.fakey);
                if(keys[UP] || direcs[0]) {
                    this.y -= 40;
                    this.direction = "UP";
                }else if(keys[DOWN] || direcs[2]) {
                    this.y += 40;
                    this.direction = "DOWN";
                }else if(keys[LEFT] || direcs[1]) {
                    this.x -= 40;
                    this.direction = "LEFT";
                }else if(keys[RIGHT] || direcs[3]) {
                    this.x += 40;
                    this.direction = "RIGHT";
                }
                if(keys[UP] || keys[DOWN] || keys[LEFT] || keys[RIGHT] || direcs[0] || direcs[1] || direcs[2] || direcs[3] || direcs[4]) {
                    for(var i = 0;i < blocks.length;i ++) {
                        if(blocks[i].type !== 'player') {
                            blocks[i].direction = "neutral";
                        }
                    }
                } 
                //this.fakex = constrain(this.fakex, 0, 400 - 40);
                //this.fakey = constrain(this.fakey, 0, 400 - 40);
            break;
            case 'portal':
                fill(0, 34, 255);
                pushMatrix();
                translate(this.fakex + 20, this.fakey + 20);
                rotate(frameCount % 30);
                image(portal, -20, -20);
                popMatrix();
            break;
            case 'conveyor':
                fill(74, 74, 74);
                rect(this.fakex, this.fakey, 40, 40);
                image(conveyor_img, this.fakex, this.fakey);
                // arrows
                fill(255, 255, 255);
                pushMatrix();
                translate(this.fakex + 20, this.fakey + 20);
                pushMatrix();
                switch(this.conveyorDirec) {
                    case 'RIGHT':
                        rotate(180);
                    break;
                    case 'UP':
                        rotate(90);
                    break;
                    case 'DOWN':
                        rotate(270);
                }
                translate(-this.fakex - 20, -this.fakey - 20);

                for(var i = 0;i < 5;i ++) {
                    triangle(this.fakex + 10 + i * 10 - (frameCount / 5) % 10, this.fakey + 12, this.fakex + 10 + i * 10 - (frameCount / 5) % 10, this.fakey + 28, this.fakex + 2 + i * 10 - (frameCount / 5) % 10, this.fakey + 20);
                }
                popMatrix();
                popMatrix();
        }
        this.fakex = lerp(this.fakex, this.x, 0.2);
        this.fakey = lerp(this.fakey, this.y, 0.2);
    };
    Block.prototype.check = function(blocks) {
        if(this.type === 'river' && this.waterlogged) {
            return 0;
        }
        for(var i = 0;i < blocks.length;i ++) {
            var bl = blocks[i];
            if(!(bl.type === 'player' && this.type === 'player')) {
                if(bl.x === this.x && bl.y === this.y && bl !== this && bl.type !== 'portal' && bl.type !== 'conveyor' && !(bl.type === 'river' && bl.waterlogged)) {
                    if(this.type === 'player') {
                        if(bl.movable) {
                            switch(this.direction) {
                                case 'LEFT':
                                    bl.x -= 40;

                                break;
                                case 'RIGHT':
                                    bl.x += 40;
                                break;
                                case 'UP':
                                    bl.y -= 40;
                                break;
                                case 'DOWN':
                                    bl.y += 40;
                                break;
                            }
                            bl.direction = this.direction;
                            bl.check(blocks);
                        }else {
                            switch(this.direction) {
                                case 'LEFT':
                                    this.x += 40;
                                break;
                                case 'RIGHT':
                                    this.x -= 40;
                                break;
                                case 'UP':
                                    this.y += 40;
                                break;
                                case 'DOWN':
                                    this.y -= 40;
                                break;
                            }
                        }
                        switch(bl.type) {
                            case 'spike':
                                loadLevel();
                            break;
                            case 'river':
                                if(!bl.waterlogged) {
                                    loadLevel();
                                }
                        }
                    }else {
                        if(bl.movable) {
                            switch(this.direction) {
                                case 'LEFT':
                                    bl.x -= 40;
                                break;
                                case 'RIGHT':
                                    bl.x += 40;
                                break;
                                case 'UP':
                                    bl.y -= 40;
                                break;
                                case 'DOWN':
                                bl.y += 40;
                                break;
                            }
                            bl.direction = this.direction;
                            bl.check(blocks);
                        }else {
                            switch(this.direction) {
                                case 'LEFT':
                                    this.direction = 'RIGHT';
                                    this.x += 40;
                                break;
                                case 'RIGHT':
                                    this.direction = "LEFT";
                                    this.x -= 40;
                                break;
                                case 'UP':
                                    this.direction = "DOWN";
                                    this.y += 40;
                                break;
                                case 'DOWN':
                                    this.direction = "UP";
                                    this.y -= 40;
                                break;
                            }
                            this.check(blocks);
                        }
                        switch(bl.type) {
                            case 'spike':
                                this.fakex = -200;
                                this.fakey = -200;
                                this.x = -200;
                                this.y = -200;
                            break;
                            case 'river':
                                if(!bl.waterlogged) {
                                    this.x = -200;
                                    this.y = -200;
                                    this.fakex = -200;
                                    this.fakey = -200;
                                    bl.waterlogged = true;
                                }
                        }
                    }
                }
                if(bl.x === this.x && bl.y === this.y && bl !== this && this.movable) {
                    if(bl.type === 'portal') {
                        if(this.type === 'movable') {
                            level ++;
                            loadLevel();
                        }
                    }else if(bl.type === 'conveyor' && this.conveyorUpdates === 0) {
                        if(this.type !== 'player') {
                            switch(bl.conveyorDirec) {
                                case 'UP':
                                    this.y -= 40;
                                break;
                                case 'DOWN':
                                    this.y += 40;
                                break;
                                case 'LEFT':
                                    this.x -= 40;
                                break;
                                case 'RIGHT':
                                    this.x += 40;
                            }
                            this.direction = bl.conveyorDirec;
                            this.conveyorUpdates += 15;
                            this.check(blocks);
                        }else {
                            switch(this.direction) {
                                case 'UP':
                                    this.y += 40;
                                break;
                                case 'DOWN':
                                    this.y -= 40;
                                break;
                                case 'LEFT':
                                    this.x += 40;
                                break;
                                case 'RIGHT':
                                    this.x -= 40;
                                    this.conveyorUpdates += 15;
                            }
                            this.check(blocks);
                        }
                    }
                }
            }
        }
        this.draw(blocks);
        if(this.conveyorUpdates > 0) {
            this.conveyorUpdates --;
        }
    };
    //} block stuff

    // {
    function get_foci_dist(a, b){
        if(a > b){
            return sqrt(a * a / 4 - b * b / 4);
        }else{
            return sqrt(b * b / 4 - a * a / 4);        
        }
    }
    function Button(x, y, w, h, type){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.type = type;
        this.scale = 1;
    }
    Button.prototype.draw = function(col1, col2, txt) {
        fill(lerpColor(col1, col2, 10 * (this.scale - 1)));
        pushMatrix();
            translate(this.x, this.y);
            scale(this.scale);
            if(this.inside()){
                if(this.scale < 1.1){
                    this.scale += 0.02;
                }
            }else{
                if(this.scale > 1){
                    this.scale -= 0.02;
                }
            }
            strokeWeight(3);
            if(this.type === 'rect' || this.type === 'rest'){
                noStroke();
                rectMode(CORNER);
                for(var i = 0;i < this.w - 9;i ++) {
                    if(i % 30 < 10) {
                        fill(255, 0, 0);
                    }else if(i % 30 < 20) {
                        fill(0, 255, 0);
                    }else {
                        fill(255, 255, 255);
                    }
                    rect(-this.w / 2 + i, -this.h / 2, 10, this.h, 5);
                }
                for(var i = 9;i < this.h - 19;i ++) {
                    if(i % 30 < 10) {
                        fill(255, 0, 0);
                    }else if(i % 30 < 20) {
                        fill(0, 255, 0);
                    }else {
                        fill(255, 255, 255);
                    }
                    rect(-this.w / 2, -this.h / 2 + i, this.w, 10);
                }
                rectMode(CENTER);
                fill(lerpColor(col1, col2, 10 * (this.scale - 1)));
                rect(0, 0 , this.w - 10, this.h - 10, 5);
            }else if(this.type === 'ellipse'){
                ellipse(0, 0, this.w, this.h);
            }
            textAlign(CENTER, CENTER);
            fill(255, 0, 255);
            textSize(sqrt(this.w * this.h) / (txt.length / log(txt.length + 1)));
            for(var i = 4;i > -1;i --) {
                fill(lerpColor(color(255, 0, 255), color(0, 0, 255), i / 5));
                text(txt, i, i);
            }
            if(this.type === 'rest') {
                noFill();
                strokeWeight(4);
                stroke(0, 0, 0);
                arc(0, 0, this.w - 11, this.h - 11, 91, 390);
                noStroke();
                fill(0, 0, 0);
                triangle(sqrt(3) * this.w / 4, this.h / 4, sqrt(3) * this.w / 4 - 10, this.h / 4, sqrt(3) * this.w / 4 - 8, this.h / 4 - 8);
            }
        popMatrix();
    };
    Button.prototype.inside = function(){
        if(this.type === 'rect' || this.type === 'rest'){
            if(mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2 && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2){
                return true;
            }
        }else if(this.type === 'ellipse'){
            var foci_dist = get_foci_dist(this.w, this.h);
            var foci;
            if(this.w > this.h){
                foci = [this.x - foci_dist, this.y, this.x + foci_dist, this.y];
            }else{
                foci = [this.x, this.y - foci_dist, this.x, this.y + foci_dist];
            }
            if(dist(mouseX, mouseY, foci[0], foci[1]) + dist(mouseX, mouseY, foci[2], foci[3]) <= max(this.w, this.h)){
                return true;
            }
        }
        return false;
    };
    Button.prototype.click = function(to, from){
        if(this.inside() && scene === from && click){
            if(scene_images.length > 0) {
                return 0;
            }
            for(var i = 0;i < width;i += 80) {
                for(var j = 0;j < height;j += 80) {
                    scene_images.push([get(i, j, 80, 80), i, j]);
                }
            }
            scene = to;
        }
    };
    Button.prototype.restart = function() {
        if(this.inside() && click) {
            loadLevel();
        }
    };
    //} button

    // {
    var play_button = new Button(200, 180, 210, 100, "rect");
    var story_button = new Button(200, 320, 210, 100, "rect");
    var back_button = new Button(200, 350, 210, 70, "rect");
    var restart_button = new Button(25, 25, 40, 40, "rest");
    var firework_list = [];
    //} buttons

    // {
    function back() {
        // fireworks
        if(wins) {
            if(frameCount % 50 === 0) {
                firework_list.push(new firework());
            }
        }
        background(13, 32, 128);
        // fireworks
        if(wins) {
            for(var i = 0;i < firework_list.length;i ++) {
                firework_list[i].draw();
                if(firework_list[i].y > 460) {
                    firework_list.splice(i, 1);
                }
            }
        }
        // house body
        fill(235, 196, 117);
        rectMode(CENTER);
        rect(200, 200, 100, 100, 5);
        fill(107, 51, 45);
        triangle(200, 105, 261, 157, 138, 153);
        // window
        fill(81, 107, 237);
        stroke(0, 0, 0);
        rect(180, 180, 30, 16);
        line(165, 180, 195, 180);
        line(180, 172, 180, 188);
        pushMatrix();
        translate(43, 0);
        rect(180, 180, 30, 16);
        line(165, 180, 195, 180);
        line(180, 172, 180, 188);
        popMatrix();
        // door
        noStroke();
        fill(92, 35, 35);
        rect(198, 229, 20, 50);
        // snow, credit troy cook for curve vertex thing
        pushMatrix();
        translate(200, 205);
        fill(232, 255, 253);
        beginShape();
        curveVertex(-199,17); 
        curveVertex(-140,-39); 
        curveVertex(3,31); 
        curveVertex(146,-53); 
        curveVertex(199,45); 
        curveVertex(199,199); 
        curveVertex(-199,198); 
        curveVertex(-199,17); 
        curveVertex(-140,-39); 
        curveVertex(3,31);
        endShape();
        popMatrix();
        // moon
        fill(255, 255, 255);
        ellipse(70, 60, 50, 50);
        fill(13, 32, 128);
        ellipse(82, 51, 50, 50);
        if(dist(mouseX, mouseY, 70, 60) < 25 && dist(mouseX, mouseY, 82, 51) > 25 && click) {
            println("Pretty moon!");
        }
    }
    function game() {
        background(255, 255, 255);
        for(var i = 0;i < blocks.length;i ++) {
            if(blocks[i].type === 'player') {
                blocks[i].check(blocks);
            }else {
                blocks[i].draw();
            }
        }
        for(var i = 0;i < blocks.length;i ++) {
            for(var j = 0;j < blocks.length;j ++) {
                if(blocks[i].x === blocks[j].x && blocks[i].y === blocks[j].y && blocks[i] !== blocks[j] && blocks[i].type !== 'player' && blocks[j].type !== 'player' && (blocks[i].type !== 'river' && blocks[j].type !== 'river')) {
                    blocks[i].check(blocks);
                }
            }
        }

        textAlign(CENTER, CENTER);
        fill(255, 0, 0);
        textSize(35);
        for(var i = 4;i > -1;i --) {
            fill(lerpColor(color(255, 0, 255), color(0, 0, 255), i / 5));
            text(leveltxt[level], 200 + i, 200 + i);
        }

        restart_button.draw(color(115, 239, 255), color(71, 99, 255), "");
        restart_button.restart();

        if(keys[ENTER]) {
            loadLevel();
        }
        if(keytick > 0) {
            keys[keyCode] = false;
            direcs = [false, false, false, false];
            keytick --;
        }

        if(level === levels.length - 1) {
            scene = 'win';
        }
    }
    function win() {
        //background(255, 255, 255);
        textSize(30);
        fill(255, 0, 255);
        textAlign(CENTER, CENTER);
        for(var i = 4;i > -1;i --) {
            fill(lerpColor(color(255, 0, 255), color(0, 0, 255), i / 5));
            text("You succesfully stopped\\nProfessor Turpis and\\ncreated a\\nFIREWORK SHOW!", 200 + i, 173 + i);
        }
        wins = true;
        back_button.draw(color(115, 239, 255), color(71, 99, 255), "Back");
        back_button.click("home", "win");
    }
    function home() {
        play_button.draw(color(115, 239, 255), color(71, 99, 255), "Play");
        play_button.click("game", "home");
        story_button.draw(color(115, 239, 255), color(71, 99, 255), "Story");
        story_button.click("story", "home");
        fill(255, 0, 255);
        textSize(47);
        for(var i = 4;i > -1;i --) {
            fill(lerpColor(color(255, 0, 255), color(0, 0, 255), i / 5));
            text("Save New Year's!", 200 + i, 80 + i);
        }

    }
    function story() {
        //background(255, 255, 255);
        fill(255, 0, 242);
        textSize(24);
        textAlign(CENTER, CENTER);
        for(var i = 3;i > -1;i --) {
            fill(lerpColor(color(255, 0, 255), color(0, 0, 255), i / 5));
            text(storyline, 200 + i, 223 + i);
        }
        text(storyline, 200, 223);
        back_button.draw(color(115, 239, 255), color(71, 99, 255), "Back");
        back_button.click("home", "story");
    }
    //} scenes

    // initialize the game
    loadLevel();

    // draw function
    draw = function() {
        back();
        switch(scene) {
            case 'logo':
            break;
            case 'home':
                home();
            break;
            case 'game':
                game();
            break;
            case 'win':
                win();
            break;
            case 'story':
                story();
        }
        // {
        for(var i = 0;i < scene_images.length;i ++) {
            image(scene_images[i][0], scene_images[i][1], scene_images[i][2]);
        }
        if(frameCount % 2 === 0) {
            scene_images.pop();
        }
        //} transition
        click = false;
        //println(keys);
        if(keytick !== 0) {}
    };

    // mouse handlers
    mouseClicked = function() {
        click = true;
    };
    mouseDragged = function() {
        if(keytick === 0) {
            var dx = mouseX - pmouseX;
            var dy = mouseY - pmouseY;
            if(abs(dx) > abs(dy) && abs(dx) > 5) {
                if(dx > 0) {
                    direcs[3] = true;
                }else{
                    direcs[1] = true;
                }
            }
            if(abs(dy) > abs(dx) && abs(dy) > 5) {
                if(dy > 0) {
                    direcs[2] = true;
                }else{
                    direcs[0] = true;
                }
            }
            keytick = 10;
        }
    };
    // key handlers
    keyPressed = function() {
        if(keytick === 0) {
            keys[keyCode] = true;
            keytick = 10;
        }
    };

    keyReleased = function() {
        keys[keyCode] = false;
    };
}

runPJS(program);
// --- END OF PASTED GAME SCRIPT ---
  `; // Ensure this backtick is present and correct.

  return PushyBlockGame;
}) satisfies QuartzComponentConstructor;
