var diceArr = [];

for (let i = 0; i < 25; i++) {
	$("#dice").append('<div id="' + i + '" value="" class="fields"></div>');
	diceArr.push(i);
}

function DiceColor(nameColor_1, nameColor_2, color) {
	this.nameColor_1 = nameColor_1;
	this.nameColor_2 = nameColor_2;
	this.color = color;
}

DiceColor.prototype.drawDice = function (index) {
	var firstIdDice = '#' + this.nameColor_1;
	var secondIdDice = '#' + this.nameColor_2;
	$(firstIdDice).val(this.color).css('background', this.color);
	$(secondIdDice).val(this.color).css('background', this.color);
};

var forhover = '';
var down = false;

$('.fields').on("mousedown", function (e) {
	down = true;
	forhover = $(this).val();
});

$('.fields').mouseup(function (e) {
	down = false;
});

var targetId = '';
var yellowColor = 0;
var orangeColor = 0;
var redColor = 0;
var greenColor = 0;
var blueColor = 0;
var violetColor = 0;

var yellow = new DiceColor(0, 4, 'yellow');
yellow.drawDice();
var orange = new DiceColor(7, 14, 'orange');
orange.drawDice();
var red = new DiceColor(10, 19, 'red');
red.drawDice();


$(".fields").hover(function (event) {
	if (down) {
		if (forhover === 'yellow' & yellowColor !== 2) {
			$(this).css({ background: 'yellow' });
			targetId = event.target.id;
			if (targetId == 0 || targetId == 4) {
				yellowColor += 1;
			}
		} else if (forhover === 'orange' & orangeColor !== 2) {
			$(this).css({ background: 'orange' });
			targetId = event.target.id;
			if (targetId == 7 || targetId == 14) {
				orangeColor += 1;
			}
		} else if (forhover === 'red' & redColor !== 2) {
			$(this).css({ background: 'red' });
			targetId = event.target.id;
			if (targetId == 10 || targetId == 19) {
				redColor += 1;
			}
		} else if (forhover === 'green' & greenColor !== 2) {
			$(this).css({ background: 'green' });
			targetId = event.target.id;
			if (targetId == 10 || targetId == 19) {
				greenColor += 1;
			}
		} else if (forhover === 'blue' & blueColor !== 2) {
			$(this).css({ background: 'blue' });
			targetId = event.target.id;
			if (targetId == 10 || targetId == 19) {
				blueColor += 1;
			}
		} else if (forhover === 'violet' & violetColor !== 2) {
			$(this).css({ background: 'violet' });
			targetId = event.target.id;
			if (targetId == 10 || targetId == 19) {
				violetColor += 1;
			}
		}
	}
});
