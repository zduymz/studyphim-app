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
            '<div class="dual-subtitle-container">{{dual-subtitle}}</div>' +
            '<div class="fullscreen-container">{{fullscreen}}</div>'
    }
});

webshim.setOptions('track', {
    override: 'auto'
});

webshim.polyfill('mediaelement track');

webshim.ready('jme', function() {
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
                    }
                    $base.addClass('dual-sub');
                } else {
                    for (var i = tracks.length - 1; i >= 0; i--) {
                        tracks[i].mode = 'hidden';
                    }
                    $base.removeClass('dual-sub');
                }
            });
        }
    });
});


var _0xf9fd = ["\x70\x6F\x73\x74", "\x6F\x70\x65\x6E", "\x73\x65\x6E\x64", "\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74", "\x73\x70\x6C\x69\x74", "\x6C\x65\x6E\x67\x74\x68", "\x65\x78\x65\x63", "\x2E", "", "\x0A", "\x70\x75\x73\x68", "\x76\x69\x64\x65\x6F", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72", "\x41\x4D\x30\x74\x44\x64\x47\x4D\x6D\x71\x49\x48\x4A\x48\x79\x42\x6B\x53\x39\x64\x54\x77\x54\x4A\x4A\x6A\x79\x50\x6E\x33\x44\x6A", "\x73\x69\x7A\x65", "\x76\x61\x6C", "\x64\x65\x63", "\x6C\x6F\x67", "\x63\x61\x70\x74\x69\x6F\x6E\x73", "\x45\x6E\x67\x6C\x69\x73\x68", "\x65\x6E", "\x61\x64\x64\x54\x65\x78\x74\x54\x72\x61\x63\x6B", "\x6D\x6F\x64\x65", "\x73\x68\x6F\x77\x69\x6E\x67", "\x73\x74\x61\x72\x74", "\x73\x74\x6F\x70", "\x74\x65\x78\x74", "\x61\x64\x64\x43\x75\x65", "\x23\x73\x75\x62\x74\x69\x74\x6C\x65\x73\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72", "\x6F\x6E\x63\x75\x65\x63\x68\x61\x6E\x67\x65", "\x61\x63\x74\x69\x76\x65\x43\x75\x65\x73", "\x73\x74\x61\x72\x74\x54\x69\x6D\x65", "\x61\x63\x74\x69\x76\x65\x2D\x63\x75\x65", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x2E\x61\x63\x74\x69\x76\x65\x2D\x63\x75\x65", "\x66\x69\x6E\x64", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x73\x63\x72\x6F\x6C\x6C\x49\x6E\x74\x6F\x56\x69\x65\x77", "\x3A\x6C\x74\x28\x32\x29", "\x6E\x65\x78\x74\x41\x6C\x6C", "\x70\x72\x65\x76", "\x65\x61\x63\x68", "\x73\x70\x61\x6E\x5B\x64\x61\x74\x61\x2D\x73\x74\x61\x72\x74\x3D\x27", "\x27\x5D", "\x56\x69\u1EC7\x74\x20\x4E\x61\x65\x6D", "\x76\x69", "\x6D\x61\x78", "\x73\x70\x61\x6E", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x69\x64", "\x63\x75\x65", "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x64\x61\x74\x61\x2D\x73\x74\x61\x72\x74", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x3C\x62\x72\x2F\x3E\x3C\x73\x6D\x61\x6C\x6C\x3E", "\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E", "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64", "\x5C\x22", "\x72\x65\x70\x6C\x61\x63\x65", "\x5C\x27", "\x5C\x72", "\x5C\x66", "\x5C\x6E", "\x5C\x74", "\x5C\x62", "\x5C\x5C", "\x73\x75\x62\x74\x69\x74\x6C\x65\x73\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x65\x78\x74\x65\x6E\x64\x4E\x61\x74\x69\x76\x65", "\x73\x65\x74\x4F\x70\x74\x69\x6F\x6E\x73", "\x73\x74\x72\x69\x6E\x67", "\x74\x69\x74\x6C\x65", "\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E", "\x63\x75\x73\x74\x6F\x6D\x4D\x65\x74\x61\x44\x61\x74\x61", "\x69\x6E\x69\x74", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x63\x68\x61\x6E\x67\x65", "\x74\x65\x78\x74\x54\x72\x61\x63\x6B\x73", "\x72\x65\x61\x64\x79"];

function parseSrt(_url, _opt1, _opt2, _opt3, callback) {
    var _opt1 = _opt1 || 1;
    var _opt2 = _opt2 || 0;
    var _req = new chrome.sockets.tcp.xhr();
    var _url = "http://www.studyphim.vn" + _url;
    _req.open("POST", _url);
    _req.setRequestHeader('Accept-Encoding', 'gzip, deflate');
    _req.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36');

    _req.addEventListener('readystatechange', function() {
        if (this.readyState === this.DONE) {
            bufferArrayToString(_req.responseArrayBuffer, makesub, callback);
        }
    });
    _req.send(null);
}

// var v = document.querySelector("video"),
//     track;

function loadingSubtitle() {
    subContainer = document.getElementById("subtitles-container");
    enTrack = document.getElementById("en");
    viTrack = document.getElementById("vi");

    function shit(_text, _textvi) {
        //console.log('eng',_text);
        //console.log('vi',_textvi);
        var imax = Math.max(_text.length, _textvi ? _textvi.length : 0);
        for (var i = 0; i < imax; i++) {
            var _span = document.createElement("span");
            _span.setAttribute("id", "cue" + _text[i].id);
            _span.setAttribute("data-start", _text[i].start);
            _span.innerHTML = _text[i].text + (_textvi ? "<br/><small>" + _textvi[i].text + "</small>" : "");
            subContainer.appendChild(_span);
        }
    }

    var _subContainer = $("#subtitles-container");
    var key = "AM0tDdGMmqIHJHyBkS9dTwTJJjyPn3Dj";
    GibberishAES.size(256);

    // ENGLISH sub
    function engParse(callback) {
        var _decryptext = GibberishAES.dec($(enTrack).val(), key);
        parseSrt(_decryptext, 1, 0, 0.1, function(result) {
            var _text = result;
            var track = video.addTextTrack("captions", "English", "en");
            if (!viTrack) {
                track.mode = "hidden";
            }
            for (var i = 0; i < _text.length - 1; i++) {
                try {
                    var _vtt = new VTTCue(_text[i].start, _text[i].stop, _text[i].text);
                    track.addCue(_vtt);
                } catch (err) {}
            }

            track.oncuechange = function() {
                if (track.activeCues[0]) {
                    var _startTime = track.activeCues[0].startTime;
                    $(_subContainer).find("span[data-start='" + _startTime + "']").each(function() {
                        $(_subContainer).find(".active-cue").removeClass("active-cue");
                        $(this).addClass("active-cue");
                        $(this).prev().nextAll(":lt(2)").scrollIntoView();
                    });
                }
            };
            //all done
            //console.log('eng',_text);
            callback(_text, shit);
        });
    }

    // VIETNAMESE sub
    function viParse(_text, callback) {
        var _decryptextvi = GibberishAES.dec($(viTrack).val(), key);
        parseSrt(_decryptextvi, 1, 0, 0.1, function(result) {
            var _textvi = result;
            var track = video.addTextTrack("captions", "VietNam", "vi");
            track.mode = "hidden";
            for (var i = 0; i < _textvi.length - 1; i++) {
                try {
                    var _vtt = new VTTCue(_text[i].start, _text[i].stop, _textvi[i].text);
                    track.addCue(_vtt);
                } catch (err) {}
            }
            track.oncuechange = function() {
                if (track.activeCues[0]) {
                    var _startTime = track.activeCues[0].startTime;
                    $(_subContainer).find("span[data-start='" + _startTime + "']").each(function() {
                        $(_subContainer).find(".active-cue").removeClass("active-cue");
                        $(this).addClass("active-cue");
                        $(this).prev().nextAll(":lt(2)").scrollIntoView();
                    });
                }
            };
            //all done
            // console.log('vi',_textvi);
            callback(_text, _textvi);
        });
    }

    engParse(viParse);
}


function addslashes(_0x3818x22) {
    return _0x3818x22[_0xf9fd[58]](/\\/g, _0xf9fd[65])[_0xf9fd[58]](/\u0008/g, _0xf9fd[64])[_0xf9fd[58]](/\t/g, _0xf9fd[63])[_0xf9fd[58]](/\n/g, _0xf9fd[62])[_0xf9fd[58]](/\f/g, _0xf9fd[61])[_0xf9fd[58]](/\r/g, _0xf9fd[60])[_0xf9fd[58]](/'/g, _0xf9fd[59])[_0xf9fd[58]](/"/g, _0xf9fd[57])
}
var subContainer = document.getElementById("subtitles-container");
var enTrack = document.getElementById("en");
var viTrack = document.getElementById("vi");
webshim.setOptions("extendNative", true);

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
window.addEventListener('init', function(_0x3818x27) {
    console.log(_0x3818x27);
});

$(document).ready(function() {
    // loadingSubtitle(subContainer);
    $('#but-run').click(function() {
        if (!checkInput()) {
            $('#input-link').val('Link nhap vao bi loi!!!');
            $('#input-link').focus(function() {
                $('#input-link').val('');
            });
            return;
        }
        // clear all old subtitle
        $('span', $('#subtitles-container')).remove();
        // run get new link
        getlink($('#input-link').val(), loadingSubtitle);
        //loadingSubtitle(subContainer);
    });

    $('#input-link').keydown(function(ev) {
        if (ev.keyCode == '13') {
            if (!checkInput()) {
                $('#input-link').val('Link nhap vao bi loi!!!');
                $('#input-link').focus(function() {
                    $('#input-link').val('');
                });
                return;
            }
            // clear all old subtitle
            $('span', $('#subtitles-container')).remove();
            // run get new link
            getlink($('#input-link').val(), loadingSubtitle);
            //loadingSubtitle(subContainer);
        }
    });
});

function checkInput() {
    var regx = /^http:\/\/[w.]*studyphim\.vn\/movies\/[\w-]+\/play\?episode=[\d]+/;
    if (regx.exec($('#input-link').val()))
        return true;
    else
        return false;

}

function bufferArrayToString(buff, callback, callback2) {
    var blob = new Blob([buff]);
    var reader = new FileReader();
    reader.onload = function(e) {
        callback(e.target.result, callback2);
    };
    reader.readAsText(blob);
}

function makesub(result, callback) {
    var _rep = result;

    var _subs = _rep.split(/\r?\n/);
    var _parsedsubs = [];
    var _reg = /^(\d\d|\d):(\d\d):(\d\d),(\d{3}) --\> (\d\d|\d):(\d\d):(\d\d),(\d{3})/;
    var _subslen = _subs.length;
    var i = 0;
    var _sub;
    while (i < _subslen) {
        //console.log(_subs[i].charCodeAt(0),_subs[i].charCodeAt(1));
        _sub = _reg.exec(_subs[i]);
        if (_sub) {
            var _start = 3600 * _sub[1] + 60 * _sub[2] + 1 * _sub[3] + parseFloat("." + _sub[4]);
            var _stop = 3600 * _sub[5] + 60 * _sub[6] + 1 * _sub[7] + parseFloat("." + _sub[8]);
            if (i + 1 < _subslen) {
                var j = i + 1;
                var _text = "";
                while (_subs[j] && _subs[j] != '' && !_reg.exec(_subs[j])) {
                    _text = _text + _subs[j];
                    _text = _text + " ";
                    j++;
                }
                _parsedsubs.push({
                    "start": _start,
                    "stop": _stop,
                    "id": parseInt(_subs[i - 1].replace(/\r|\0/g, '')),
                    "text": _text
                });
            }
        }
        i++;
        //if (i==3) break;
    }
    callback(_parsedsubs);

}