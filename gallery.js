! function() {
    function e(e, t, n) {
        var a, i = r,
            l = arguments,
            o = l.length;
        for (a = 0; o > a && i; a++) i = i[l[a]];
        return i
    }

    function t(e, t, n, a) {
        var i, l = r,
            o = arguments,
            c = o.length - 1;
        for (i = 0; c > i; i++) l = l[o[i]] || (l[o[i]] = i + 1 === c ? [] : {});
        return l.push(a), a
    }

    function n(e, t, n) {
        var r = e.target;
        do {
            if (!(r instanceof Element)) return; {
                if (l.call(r, t)) return Object.defineProperty(e, 'currentTarget', {
                    enumerable: !0,
                    writeable: !0,
                    configurable: !0,
                    value: r
                }), void(n.handleEvent ? n.handleEvent.call(n, e) : n.call(this, e));
                r = r.parentNode
            }
        } while (r && r !== this)
    }
    var r = {},
        a = Element.prototype,
        i = 'MatchesSelector',
        l = a.matches || a['o' + i] || a['ms' + i] || a['moz' + i] || a['webkit' + i],
        o = 'delegateEventListener';
    a[o] = function(e, r, a, i) {
        var l = {
            selector: r,
            listener: a
        };
        this.addEventListener(e, l.handler = function(e) {
            n.call(this, e, r, a)
        }, i), t(e, r, i, l)
    }, a['un' + o] = function(t, n, r, a) {
        for (var i = e(t, n, a), l = 0;
            (i || [])[l]; l++) i[l].listener === r && (this.removeEventListener(t, i[l].handler, a), i.splice(l--, 1))
    }
}();