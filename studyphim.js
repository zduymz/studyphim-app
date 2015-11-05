function getlink(url, callback) {
    var _req = new chrome.sockets.tcp.xhr();
    var _url = url;
    _req.open("GET", _url);
    _req.setRequestHeader('Accept-Encoding', 'gzip, deflate');
    _req.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36');
    _req.addEventListener('readystatechange', function() {
        if (this.readyState === this.DONE) {
            _rep = this.responseText;

            var regx_video = /<video(.*)<\/video>/;
            var regx_source = [/<source([^>]+)\/>/, /src="([^"]+)/];
            var regx_subs = [/<input([^>]+)\/>/g, /value="([^"]+)/];

            var videoTag = regx_video.exec(_rep)[1];
            var sourceURL = regx_source[1].exec(regx_source[0].exec(videoTag))[1];
            var subs = [];
            subs[0] = regx_subs[0].exec(videoTag)[1];
            subs[1] = regx_subs[0].exec(videoTag)[1];
            var subEn;
            var subVi;
            for (var i = 0; i < subs.length; i++) {
                if (subs[i].indexOf('id="en"') > 0) {
                    subEn = regx_subs[1].exec(subs[i])[1];
                } else {
                    subVi = regx_subs[1].exec(subs[i])[1];
                }
            }
            console.log(sourceURL);
            console.log(subEn);
            console.log(subVi);

            //set source video got from studyphim
            $('#source')[0].src = sourceURL;
            $('#en')[0].value = subEn;
            $('#vi')[0].value = subVi;


            //force mediaelement reload
            $('video',$('div.mediaplayer'))[0].load();

            //load subtitle
            callback();
        }
    });
    _req.send(null);
}

// getlink('http://www.studyphim.vn/movies/fargo-season-2/play?episode=2')