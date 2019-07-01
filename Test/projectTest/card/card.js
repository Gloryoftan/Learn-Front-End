function Card(option) {
	this.init(option);
}

Card.prototype = {
	init: function (option) {

		if (option.id == undefined) {
			return;
		}
		this._id = option.id;
		let _maxContainment = option.containment == undefined ? $('body') : $("#" + option.containment);
		_maxContainment.append(this._buildCard(option, "max"));
		if (option.close) {
			this._makeClosable(this._id + "-card", option.extraCloseProcess);
		}
		if (option.moveable) {
			this._makeMovable(this._id + "-card", option.moveContainment, option.extraMoveProcess);
		}
		if (option.resizable) {
			this._makeResizable(this._id + "-card", option.extraResizableProcess, option.extraConfig);
		}
		if (option.mini.show) {
			let _minContainment = option.mini.miniContainment == undefined ? $('body') : $("#" + option.mini.miniContainment);

			_minContainment.append("<span class='minicard-container'>" + this._buildCard(option.mini, "mini") + "</span>");
		}



	},
	_buildCard: function (info, type) {
		var html = '';
		var addon = type == 'mini' ? 'mini' : '';
		var addClass = '';
		var addStyle = '';
		var _left = 0;
		var _top = 0;
		var _h = 200;
		var _w = 200;
		var _titleText = '';
		var mcSelector = '#' + this._id + '-minicard';
		if ($(mcSelector).length > 0) {
			var _o = $(mcSelector).offset();
			_left = _o.left;
			_top = _o.top;
			_h = $(mcSelector).height();
			_w = $(mcSelector).width();
		}
		if (type == 'max' || type == 'interact') {
			addClass = 'max nice-hover-1';
			addStyle = 'left: ' + _left + 'px; top: ' + _top + 'px; height: ' + _h + 'px; width: ' + _w + 'px; opacity: 0';
		}
		if (type == 'mini') {
			addClass = 'mini';
		}
		if (!info.title.show) {
			addClass += ' almost-no-title';
		} else {
			_titleText = info.title.text == undefined ? "标题" : info.title.text;
		}
		var _icon = info.title.icon == undefined ? '' : info.title.icon;
		if (_icon == '') {
			addClass += ' no-icon';
		}

		html += '<div class="card floating ' + addClass + '" id="' + this._id + '-' + addon + 'card" style="' + addStyle + '">';
		html += '<div class="card-title" id="' + this._id + '-' + addon + 'card-title">' + _icon + '<span>' + _titleText + '</span></div>';
		html += '<div class="card-body" id="' + this._id + '-' + addon + 'card-body">' + info.body + '</div>';
		html += '</div>';
		return html;

	},
	_makeClosable: function (cardId, extraProcess) {
		let cardCloseTo = -1;
		var $card = $('#' + cardId);
		$card.addClass('closable');
		this._getButtContainer(cardId).append('<span class="close-butt"><i class="fas fa-times-circle"></i></span>');
		var close = function () {
			clearTimeout(cardCloseTo);
			$card.addClass('blur-n-out');
			cardCloseTo = setTimeout(function () {
				$card.remove();
				if (extraProcess != undefined) {
					extraProcess();
				}
			}, 250);
		}

		$('#' + cardId + ' .close-butt i').on({
			'mousedown': function (e) {
				e.stopPropagation()
			},
			'click': function (e) {
				e.stopPropagation();
				close();
			}
		});

		$('#' + cardId + ' .card-title .icon').dblclick(function (e) {
			e.stopPropagation();
			close();
		});
	},

	_makeMovable: function (cardId, containment, extraProcess) {
		var $body = $('body');
		let someCardIsMoving = false;
		if (containment == undefined) {
			containment = $body;
		}
		var offset = [];
		var $card = $('#' + cardId);
		var $cardTitle = $('#' + cardId + '-title');
		$card.addClass('movable');
		$card.on({
			'mouseenter': function (e) {
				$card.draggable({
					enable: true,
					containment: containment,
					start: function (e, ui) {
						someCardIsMoving = true;
						$body.css({
							'pointer-events': 'none'
						});
						$card.css({
							'transition': 'none'
						});
					},
					drag: function (e, ui) {},
					stop: function (e, ui) {
						someCardIsMoving = false;
						$body.css({
							'pointer-events': ''
						});
						$card.css({
							'transition': ''
						});
						if (extraProcess != undefined) {
							extraProcess();
						}
					}
				});
			},
			'mouseleave': function (e) {
				if (!someCardIsMoving) {
					$card.draggable('destroy');
				}
			}
		});
	},

	_getButtContainer: function (cardId) {
		var selector = '#' + cardId + ' .butt-container';
		if ($(selector).length == 0) {
			var $card = $('#' + cardId);
			$card.append('<div class="butt-container"></div>');
		}
		return $(selector);
	},

	_makeResizable: function (cardId, extraProcess, extraConfig) {
		if (extraConfig == undefined) {
			extraConfig = {};
		}
		var $card = $('#' + cardId);
		$card.addClass('resizable');
		$card.resizable(this._merge({
			handles: 'n, e, s, w, ne, se, sw, nw',
			start: function () {
				$('body').css({
					'pointer-events': 'none'
				});
				$card.css({
					'transition': 'none'
				});
			},
			stop: function () {
				$('body').css({
					'pointer-events': ''
				})
				$card.css({
					'transition': ''
				});
				if (extraProcess != undefined) {
					extraProcess();
				}
			}
		}, extraConfig));
	},
	_merge: function (targetDict, sourceDict) {
		if (typeof targetDict == 'undefined') {
			return $.extend(true, {}, sourceDict);
		}

		var retDict = $.extend(true, {}, targetDict);

		if (typeof sourceDict == 'undefined') {
			return retDict;
		}
		for (var key in sourceDict) {
			if (key in retDict && retDict[key] != null && typeof retDict[key] == 'object' && !(retDict[key] instanceof Array)) {
				if (Object.keys(retDict[key]).length > 0 && !(retDict[key] instanceof Array)) {
					retDict[key] = merge(retDict[key], sourceDict[key]);
				} else {
					retDict[key] = sourceDict[key];
				}
			} else {
				retDict[key] = sourceDict[key];
			}
		}
		return retDict;
	}
}

var card = new Card({
	id: "test",
	title: {
		show: true,
		text: "xx",
		//icon:""
	},
	body: "aaa",
	containment:"test",
	mini: {
		show: true,
		title: {
			show: true,
			text: "xx",
			//icon:""
		},
		body: "aaa",
		miniContainment: "min-contain"
	},
	close: true,
	// extraCloseProcess: function() {

	// },
	moveable: true,
	// extraMoveProcess: function() {

	// },
	resizable: true,
	// extraResizableProcess: function() {

	// },
	// extraConfig:{

	// }
})

//card.init();