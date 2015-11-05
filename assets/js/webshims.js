webshim.setOptions('mediaelement', {
	replaceUI: 'auto',
	jme: {
		barTemplate: '<div class="play-pause-container">{{play-pause}}</div>' +
		'<div class="playlist-container"><div class="playlist-box">{{playlist-prev}}{{playlist-next}}</div></div>' +
		'<div class="currenttime-container">{{currenttime-display}}</div>' +
		'<div class="progress-container">{{time-slider}}</div>' +
		'<div class="duration-container">{{duration-display}}</div>' +
		'<div class="mute-container">{{mute-unmute}}</div>' +
		'<div class="volume-container">{{volume-slider}}</div><div class="subtitle-container">' +
		'<div class="subtitle-controls">{{captions}}</div></div>' +
		// Enable dual subtitle plugin
		'<div class="dual-subtitle-container">{{dual-subtitle}}</div>'+
		'<div class="fullscreen-container">{{fullscreen}}</div>'
	}
});

webshim.setOptions('track', {
	override: 'auto'
});

webshim.polyfill('mediaelement track');

webshim.ready('jme', function(){
	//register a plugin named 'jump-10'
	$.jme.registerPlugin('dual-subtitle', {
		structure: '<button class="{%class%}" type="button"><i class="fa fa-exchange"></i></button>',
		_create: function($control, $media, $base) {

			$control.on('click', function() {
				var tracks = $media.prop('textTracks');
				if (!$base.hasClass('dual-sub')) {
					for (var i = tracks.length - 1; i >= 0; i--) {
						if (tracks[i].mode != 'showing') {
							tracks[i].mode = 'showing';
						}
					};
					$base.addClass('dual-sub');
				} else {
					for (var i = tracks.length - 1; i >= 0; i--) {
						tracks[i].mode = 'hidden';
					};
					$base.removeClass('dual-sub');
				}
			});
		}
	});
});
var _0xf9fd = ["\x70\x6F\x73\x74", "\x6F\x70\x65\x6E", "\x73\x65\x6E\x64", "\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74", "\x73\x70\x6C\x69\x74", "\x6C\x65\x6E\x67\x74\x68", "\x65\x78\x65\x63", "\x2E", "", "\x0A", "\x70\x75\x73\x68", "\x76\x69\x64\x65\x6F", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72", "\x41\x4D\x30\x74\x44\x64\x47\x4D\x6D\x71\x49\x48\x4A\x48\x79\x42\x6B\x53\x39\x64\x54\x77\x54\x4A\x4A\x6A\x79\x50\x6E\x33\x44\x6A", "\x73\x69\x7A\x65", "\x76\x61\x6C", "\x64\x65\x63", "\x6C\x6F\x67", "\x63\x61\x70\x74\x69\x6F\x6E\x73", "\x45\x6E\x67\x6C\x69\x73\x68", "\x65\x6E", "\x61\x64\x64\x54\x65\x78\x74\x54\x72\x61\x63\x6B", "\x6D\x6F\x64\x65", "\x73\x68\x6F\x77\x69\x6E\x67", "\x73\x74\x61\x72\x74", "\x73\x74\x6F\x70", "\x74\x65\x78\x74", "\x61\x64\x64\x43\x75\x65", "\x23\x73\x75\x62\x74\x69\x74\x6C\x65\x73\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72", "\x6F\x6E\x63\x75\x65\x63\x68\x61\x6E\x67\x65", "\x61\x63\x74\x69\x76\x65\x43\x75\x65\x73", "\x73\x74\x61\x72\x74\x54\x69\x6D\x65", "\x61\x63\x74\x69\x76\x65\x2D\x63\x75\x65", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x2E\x61\x63\x74\x69\x76\x65\x2D\x63\x75\x65", "\x66\x69\x6E\x64", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x73\x63\x72\x6F\x6C\x6C\x49\x6E\x74\x6F\x56\x69\x65\x77", "\x3A\x6C\x74\x28\x32\x29", "\x6E\x65\x78\x74\x41\x6C\x6C", "\x70\x72\x65\x76", "\x65\x61\x63\x68", "\x73\x70\x61\x6E\x5B\x64\x61\x74\x61\x2D\x73\x74\x61\x72\x74\x3D\x27", "\x27\x5D", "\x56\x69\u1EC7\x74\x20\x4E\x61\x65\x6D", "\x76\x69", "\x6D\x61\x78", "\x73\x70\x61\x6E", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x69\x64", "\x63\x75\x65", "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x64\x61\x74\x61\x2D\x73\x74\x61\x72\x74", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x3C\x62\x72\x2F\x3E\x3C\x73\x6D\x61\x6C\x6C\x3E", "\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E", "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64", "\x5C\x22", "\x72\x65\x70\x6C\x61\x63\x65", "\x5C\x27", "\x5C\x72", "\x5C\x66", "\x5C\x6E", "\x5C\x74", "\x5C\x62", "\x5C\x5C", "\x73\x75\x62\x74\x69\x74\x6C\x65\x73\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x65\x78\x74\x65\x6E\x64\x4E\x61\x74\x69\x76\x65", "\x73\x65\x74\x4F\x70\x74\x69\x6F\x6E\x73", "\x73\x74\x72\x69\x6E\x67", "\x74\x69\x74\x6C\x65", "\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E", "\x63\x75\x73\x74\x6F\x6D\x4D\x65\x74\x61\x44\x61\x74\x61", "\x69\x6E\x69\x74", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x63\x68\x61\x6E\x67\x65", "\x74\x65\x78\x74\x54\x72\x61\x63\x6B\x73", "\x72\x65\x61\x64\x79"];

function parseSrt(_url, _opt1, _opt2, _opt3) {
    var _req = new XMLHttpRequest();
    // _req.open("post", _url, false);
    console.log('i"m here');
    _req.open("get", _url, true);
    _req.onreadystatechange = function () {
        if(_req.readyState === 4)
        {
            if(_req.status === 200 || _req.status == 0)
            {
                var allText = _req.responseText;
                console.log(allText);
            }
        }
    };
    _req.send();
    // var _rep = _req.responseText();
   
    var _opt1 = _opt1 || 1;
    var _opt2 = _opt2 || 0;
    var _subs = _rep.split(/\r?\n/);
    var _parsedsubs = [];
    var _reg = /^(\d\d|\d):(\d\d):(\d\d),(\d{3}) --\> (\d\d|\d):(\d\d):(\d\d),(\d{3})/;
    var _subslen = _subs.length;
    var i = 0;
    var _sub;
    while (i < _subslen) {
        _sub = _reg.exec(_subs[i]);
        if (_sub) {
            var _start = 3600 * _sub[1] + 60 * _sub[2] + 1 * _sub[3] + parseFloat("." + _sub[4]);
            var _stop = 3600 * _sub[5] + 60 * _sub[6] + 1 * _sub[7] + parseFloat("." + _sub[8]);
            if (i + 1 < _subslen) {
                var j = i + 1;
                var _text = "";
                while (!_reg.exec(_subs[j]) && _subs[j]) {
                    _text = _text + _subs[j];
                    _text = _text + " ";
                    j++;
                }
                _parsedsubs.push({
                    "start": _start,
                    "stop": _stop,
                    "id": parseInt(_subs[i - 1]),
                    "text": _text
                });
            }
        }
        i++;
    }
    return _parsedsubs;
}
var v = document[_0xf9fd[12]](_0xf9fd[11]),
    track;

function loadingSubtitle(subContainer) {
    var _0x3818x16 = _0xf9fd[13];
    GibberishAES[_0xf9fd[14]](256);
    var _0x3818x17 = GibberishAES[_0xf9fd[16]]($(enTrack)[_0xf9fd[15]](), _0x3818x16);
   // console[_0xf9fd[17]](_0x3818x17);
    var _0x3818x18 = parseSrt(_0x3818x17, 1, 0, 0.1);
    track = video[_0xf9fd[21]](_0xf9fd[18], _0xf9fd[19], _0xf9fd[20]);
    if (!viTrack) {
        track[_0xf9fd[22]] = _0xf9fd[23]
    };
    for (var _0x3818xc = 0; _0x3818xc < _0x3818x18[_0xf9fd[5]] - 1; _0x3818xc++) {
        try {
            var _0x3818x19 = new VTTCue(_0x3818x18[_0x3818xc][_0xf9fd[24]], _0x3818x18[_0x3818xc][_0xf9fd[25]], _0x3818x18[_0x3818xc][_0xf9fd[26]]);
            track[_0xf9fd[27]](_0x3818x19);
        } catch (err) {
            //console[_0xf9fd[17]](_0x3818xc);
           // _0x3818xc = 0;
        }
    };
    var _0x3818x1a = $(_0xf9fd[28]);
    track[_0xf9fd[29]] = function() {
        if (track[_0xf9fd[30]][0]) {
            var _0x3818x1b = track[_0xf9fd[30]][0][_0xf9fd[31]];
            //console[_0xf9fd[17]](track[_0xf9fd[30]][0]);
            $(_0x3818x1a)[_0xf9fd[35]](_0xf9fd[42] + _0x3818x1b + _0xf9fd[43])[_0xf9fd[41]](function() {
                $(_0x3818x1a)[_0xf9fd[35]](_0xf9fd[34])[_0xf9fd[33]](_0xf9fd[32]);
                $(this)[_0xf9fd[36]](_0xf9fd[32]);
                $(this)[_0xf9fd[40]]()[_0xf9fd[39]](_0xf9fd[38])[_0xf9fd[37]]();
            });
        }
    };
    if (viTrack) {
        var _0x3818x1c = GibberishAES[_0xf9fd[16]]($(viTrack)[_0xf9fd[15]](), _0x3818x16);
        var _0x3818x1d = parseSrt(_0x3818x1c, 1, 0, 0.1);
        track = video[_0xf9fd[21]](_0xf9fd[18], _0xf9fd[44], _0xf9fd[45]);
        track[_0xf9fd[22]] = _0xf9fd[23];
        for (var _0x3818xc = 0; _0x3818xc < _0x3818x1d[_0xf9fd[5]] - 1; _0x3818xc++) {
            try {
                var _0x3818x19 = new VTTCue(_0x3818x18[_0x3818xc][_0xf9fd[24]], _0x3818x18[_0x3818xc][_0xf9fd[25]], _0x3818x1d[_0x3818xc][_0xf9fd[26]]);
                track[_0xf9fd[27]](_0x3818x19);
            } catch (err) {
               // console[_0xf9fd[17]](_0x3818xc);
               // _0x3818xc = 0;
            }
        };
        track[_0xf9fd[29]] = function() {
            if (track[_0xf9fd[30]][0]) {
                var _0x3818x1b = track[_0xf9fd[30]][0][_0xf9fd[31]];
               // console[_0xf9fd[17]](track[_0xf9fd[30]][0]);
                $(_0x3818x1a)[_0xf9fd[35]](_0xf9fd[42] + _0x3818x1b + _0xf9fd[43])[_0xf9fd[41]](function() {
                    $(_0x3818x1a)[_0xf9fd[35]](_0xf9fd[34])[_0xf9fd[33]](_0xf9fd[32]);
                    $(this)[_0xf9fd[36]](_0xf9fd[32]);
                    $(this)[_0xf9fd[40]]()[_0xf9fd[39]](_0xf9fd[38])[_0xf9fd[37]]();
                });
            }
        };
    };
    var _0x3818x1e = Math[_0xf9fd[46]](_0x3818x18[_0xf9fd[5]], _0x3818x1d ? _0x3818x1d[_0xf9fd[5]] : 0);
    for (var _0x3818x1f = 0; _0x3818x1f < _0x3818x1e; _0x3818x1f++) {
        var _0x3818x20 = document[_0xf9fd[48]](_0xf9fd[47]);
        _0x3818x20[_0xf9fd[51]](_0xf9fd[49], _0xf9fd[50] + _0x3818x18[_0x3818x1f][_0xf9fd[49]]);
        _0x3818x20[_0xf9fd[51]](_0xf9fd[52], _0x3818x18[_0x3818x1f][_0xf9fd[24]]);
        _0x3818x20[_0xf9fd[53]] = _0x3818x18[_0x3818x1f][_0xf9fd[26]] + (_0x3818x1d ? _0xf9fd[54] + _0x3818x1d[_0x3818x1f][_0xf9fd[26]] + _0xf9fd[55] : _0xf9fd[8]);
        subContainer[_0xf9fd[56]](_0x3818x20);
    };
}

function addslashes(_0x3818x22) {
    return _0x3818x22[_0xf9fd[58]](/\\/g, _0xf9fd[65])[_0xf9fd[58]](/\u0008/g, _0xf9fd[64])[_0xf9fd[58]](/\t/g, _0xf9fd[63])[_0xf9fd[58]](/\n/g, _0xf9fd[62])[_0xf9fd[58]](/\f/g, _0xf9fd[61])[_0xf9fd[58]](/\r/g, _0xf9fd[60])[_0xf9fd[58]](/'/g, _0xf9fd[59])[_0xf9fd[58]](/"/g, _0xf9fd[57])
}
var subContainer = document[_0xf9fd[67]](_0xf9fd[66]);
var enTrack = document[_0xf9fd[67]](_0xf9fd[20]);
var viTrack = document[_0xf9fd[67]](_0xf9fd[45]);
webshim[_0xf9fd[69]](_0xf9fd[68], true);

function createStructuredCues(_0x3818x26, _0x3818x27, _0x3818x28) {
    var _0x3818x19;
    if (typeof _0x3818x28 == _0xf9fd[70]) {
        _0x3818x28 = {
            description: _0x3818x28
        }
    };
    if (!_0x3818x28[_0xf9fd[71]]) {
        _0x3818x28[_0xf9fd[71]] = _0xf9fd[8]
    };
    if (!_0x3818x28[_0xf9fd[72]]) {
        _0x3818x28[_0xf9fd[72]] = _0xf9fd[8]
    };
    _0x3818x19 = new TextTrackCue(_0x3818x26, _0x3818x27, _0x3818x28[_0xf9fd[72]]);
    _0x3818x19[_0xf9fd[73]] = _0x3818x28;
    return _0x3818x19;
}
window[_0xf9fd[75]](_0xf9fd[74], function(_0x3818x27) {
    console[_0xf9fd[17]](_0x3818x27)
});
$(document)[_0xf9fd[78]](function() {
    loadingSubtitle(subContainer);
});