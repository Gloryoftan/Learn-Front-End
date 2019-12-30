function buildRegionSwitchButts(_config) {
    let $cont = $('<div>').attr({
        id: 'region-butt-container',
        class: 'nice-tag-container'
    }).appendTo($('.map-container'));
    let _initDeg = -60;
    $nav = $('<div>').attr({
        id: 'circleNav'
    }).appendTo($cont);
    $navL1 = $('<ul>').attr({
        class: 'l1Menu'
    }).appendTo($nav);
    $navL2 = $('<ul>').attr({
        class: 'l2Menu'
    }).appendTo($nav);
    $navHome = $('<div>').attr({
        class: 'home',
    }).appendTo($nav);

    let _svgHtml = '<svg height="0" width="0"><defs>\
            <clipPath clipPathUnits="objectBoundingBox" id="sector-60">\
                <path fill="none" stroke="#000" stroke-width="5" class="sector"\
                    d="M 0.499 0.5 L 0.749 0.067 C 0.594 -0.022 0.404 -0.022 0.25 0.067 Z"></path>\
            </clipPath>\
            <clipPath clipPathUnits="objectBoundingBox" id="sector-30">\
                <path fill="none" stroke="#000" stroke-width="5" class="sector"\
                    // d="M 0.371 0.017 C 0.455 -0.006 0.545 -0.006 0.629 0.017 L 0.5 0.5 Z"></path>\
            </clipPath>\
            <clipPath clipPathUnits="objectBoundingBox" id="sector-40">\
                <path fill="none" stroke="#000" stroke-width="5" class="sector"\
                    d="M 0.329 0.03 C 0.439 -0.01 0.561 -0.01 0.671 0.03 L 0.5 0.5 Z"></path>\
            </clipPath>\
            <clipPath clipPathUnits="objectBoundingBox" id="sector-50">\
                // <path fill="none" stroke="#000" stroke-width="5" class="sector"\
                    d="M 0.289 0.047 C 0.423 -0.016 0.577 -0.016 0.711 0.047 L 0.5 0.5 Z"></path>\
            </clipPath>\
            <clipPath clipPathUnits="objectBoundingBox" id="sector-30-lr">\
                <path fill="none" stroke="#000" stroke-width="5" class="sector"\
                    d="M 0.381 0.055 C 0.381 0.055 0.367 0.018 0.399 0.01 C 0.475 -0.005 0.554 -0.003 0.629 0.017 L 0.5 0.5 L 0.381 0.055 Z"></path>\
            </clipPath>\
            <clipPath clipPathUnits="objectBoundingBox" id="sector-30-rr">\
                <path fill="none" stroke="#000" stroke-width="5" class="sector"\
                    d="M 0.371 0.017 C 0.447 -0.003 0.528 -0.005 0.605 0.011 C 0.629 0.016 0.622 0.043 0.622 0.043 L 0.5 0.5 L 0.371 0.017 Z"></path>\
            </clipPath>\
            <clipPath clipPathUnits="objectBoundingBox" id="sector-40-lr">\
                <path fill="none" stroke="#000" stroke-width="5" class="sector"\
                    d="M 0.34 0.062 C 0.34 0.062 0.327 0.03 0.359 0.02 C 0.461 -0.01 0.57 -0.006 0.671 0.03 L 0.5 0.5 L 0.34 0.062 Z"></path>\
            </clipPath>\
            <clipPath clipPathUnits="objectBoundingBox" id="sector-40-rr">\
                <path fill="none" stroke="#000" stroke-width="5" class="sector"\
                    d="M 0.329 0.03 C 0.429 -0.006 0.538 -0.01 0.64 0.02 C 0.672 0.03 0.66 0.062 0.66 0.062 L 0.5 0.5 L 0.329 0.03 Z"></path>\
            </clipPath>\
        </defs>\
    </svg>';
    $nav.append(_svgHtml);
    $nav.append('<div class="shadow"></div>');

    let i = 0;
    for (let _buttId in gridNameMap) {
        var _buttName = gridNameMap[_buttId];
        if ('全国' === _buttName) {
            $navCh = $('<div>').attr({
                id: _buttId,
                name: _buttName
            }).html('<div><span>全国</span><span>National</span></div>').appendTo($navHome);
        } else if ('国家' === _buttName) {
            $navSg = $('<div>').attr({
                id: _buttId,
                name: _buttName,
                class: 'sibling-checked'
            }).html('<div><span>国家电网</span><span>State Grid</span></div>').appendTo($navHome);
        } else {
            let _rotateAng = i++ * 60;
            let $li = $('<li>').attr({
                deg: _rotateAng,
                id: _buttId,
                name: _buttName
            }).html('<span class="icon"></span>').css({
                transform: 'rotate(' + _rotateAng + 'deg)'
            }).appendTo($navL1);
            if ('京津冀' === _buttName) {
                $li.addClass('hiding');
            }
        }
    }

    $navHome.on('click', function (e) {
        $navL2.empty();
        $nav.find('.checked, .sibling-checked').removeClass('checked sibling-checked');
        rotateNavL1(_initDeg, false);
        let $navL0 = $(e.target);
        $navL0.addClass("checked").siblings().addClass('sibling-checked');
        let checkedGrid = $navL0.attr('name');
        console.log(checkedGrid);
        flipNSpin($navL1.find('li'));
    });

    $navL1.children('li').on('click', function (e) {
        let $grid = $(this);
        rotateNavL1(0 - parseInt($grid.attr('deg')), true);

        flipNSpin($navL1.find('li'));
        $nav.find('.checked').removeClass('checked');
        $grid.addClass('checked');

        var checkedGrid = $grid.attr('name');
        console.log(checkedGrid);

        $navL2.empty();

        var _provinces = gridRegionMap[checkedGrid];
        let _rotateDeg = 0;
        let _prevDeg;
        let _count = 0;
        for (let i = 0; i < _provinces.length; i++) {
            let _province = _provinces[i];
            // if (_province.includes(curGrid)) {
            //     continue;
            // }

            let _myDeg = _province.length * 10 + 10;
            let _clipPath = '#sector-' + _myDeg;
            if (_count === 0) {
                _rotateDeg = 0 - (60 - _myDeg) / 2;
                _clipPath += '-lr';
            } else {
                _rotateDeg += (_prevDeg + _myDeg) / 2;
            }
            _prevDeg = _myDeg;

            if (i === _provinces.length - 1) {
                _clipPath += '-rr';
            }

            let $li = $('<li>')
                .attr({
                    name: _province,
                    deg: _rotateDeg
                })
                .html('<span class="icon"></span>')
                .css({
                    transform: 'rotate(' + _rotateDeg + 'deg)',
                    'clip-path': 'url(' + _clipPath + ')'
                }).on('click', function () {
                    let $this = $(this);
                    var regionClicked = $(this).attr('name');
                    changeCurRegion(regionClicked);
                    $this.siblings('.checked').removeClass('checked');
                    $this.addClass("checked");
                })
            setTimeout(function () {
                $li.appendTo($navL2);
                flipNSpin($li);
            }, 40 * _count);
            _count++;
        }
    });
    regionSwitchButtAlreadySet = true;
}

function getMinDeg(_deg) {
    let _minAng = (_deg % 360 + 360) % 360;
    _minAng = _minAng > 180 ? _minAng - 360 : _minAng;
    return _minAng;
}

function getNearestDeg(_src, _dst) {
    return _src + getMinDeg(_dst - _src);
}

function flipNSpin($list) {
    let _lDeg = parseInt($list.parent('ul').attr('deg'));
    _lDeg = _lDeg ? _lDeg : 0;
    $list.each(function (idx, li) {
        let $li = $(li);
        let _rotateDeg = parseInt($li.attr('deg'));
        let _minAng = getMinDeg(_rotateDeg + _lDeg);
        let _flipped = Math.abs(_minAng) > 90;
        if (_flipped) {
            $li.addClass('flipped');
        } else {
            $li.removeClass('flipped');
        }
        let _name = $li.attr('name');
        let $icon = $li.children('.icon');
        $icon.html(spinText(_name, 15, _flipped));
    });
}

function rotateNavL1(_deg, _subtleMode) {
    let _rotateDeg;
    if (_subtleMode) {
        let _curDeg = parseInt($navL1.attr('deg'));
        _curDeg = _curDeg ? _curDeg : 0;
        _rotateDeg = getNearestDeg(_curDeg, _deg);
    } else {
        _rotateDeg = _deg;
    }
    $navL1.attr({
        deg: _rotateDeg
    }).css('transform', 'rotate(' + _rotateDeg + 'deg)')
}

function spinText(_txt, _baseDeg, _reverseFlag) {
    let _html = '';
    let _class = 'spin-text';
    _txt = _reverseFlag ? reverseString(_txt) : _txt;
    for (let i = 0; i < _txt.length; i++) {
        let _deg = i * 2 * _baseDeg / _txt.length + _baseDeg / _txt.length - _baseDeg;
        _html += '<span class="' + _class + '" style="--rotate-deg:' + _deg + 'deg;">' + _txt[i] + '</span>'
    };
    return _html;
}

function reverseString(_str) {
    return _str.split('').reverse().join('');
}

/* btn */
$('#keynote').on('click', function () {
    $('html').toggleClass('absurd');
})

$('#dark').on('click', function () {
    $('html').toggleClass('dark');
})

/* 数据 */
let curGrid = '';
let gridNameMap = {
    ch: "全国",
    sg: "国家",
    hb: "华北",
    hd: "华东",
    hz: "华中",
    xb: "西北",
    db: "东北",
    xn: "西南",
    jjj: "京津冀"
}

let gridRegionMap = {
    "全国": ["全国"],
    "国家": ["国家"],
    "华北": ["华北", "华北直属", "北京", "天津", "冀北", "河北", "山东", "山西", "蒙西"],
    "华东": ["华东", "华东直属", "上海", "江苏", "浙江", "安徽", "福建"],
    "华中": ["华中", "湖北", "河南", "湖南", "江西"],
    "西北": ["西北", "陕西", "宁夏", "甘肃", "青海", "新疆"],
    "东北": ["东北", "黑龙江", "吉林", "辽宁", "蒙东"],
    "西南": ["西南", "四川", "重庆", "西藏"],
    "京津冀": ["北京", "天津", "冀北"]
}



$(document).ready(function () {
    buildRegionSwitchButts();
    setTimeout(() => {
        $("#" + 'ch').trigger("click");
    }, 100);
})