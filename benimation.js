var isPlaying = false;
function bracketTransform() {
    var bracketsanim = anime({
        targets: '.bracketsicon',
        d: [

            { value: 'M1.3 21.5L17.7 5M1.3 28.5L17.7 45M39.9 25H11.1M49 28.3L32.5 44.8M49 20.3L32.5 3.8' }
        ],
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
}

function bracketReturn() {
    var bracketsanim2 = anime({
        targets: '.bracketsicon',
        d: [

            { value: 'M1.3 25.5L17.7 9M1.3 24.5L17.7 41M29 11l-7 28M49 24.3L32.5 40.8M49 25.3L32.5 8.8' }
        ],
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
}

function mcastTransform() {
    var mcastanim = anime({
        targets: '.mlayer',
        translateY: anime.stagger(10, { grid: [3, 1], from: 'center', axis: 'x' }),
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
}
function mcastReturn() {
    var mcastanim = anime({
        targets: '.mlayer',
        translateY: 0,
        easing: 'linear',
        duration: 200,
        loop: 1,
    });
}
function iconTransform() {
    var iconanim = anime({
        targets: '.icon1',
        scale: 1.2,
        duration: 200,
        easing: 'linear',
        loop: 1,
    })
}

function iconReturn() {
    var iconanim2 = anime({
        targets: '.icon1',
        scale: 1,
        duration: 200,
        easing: 'linear',
        loop: 1,
    })
}

function hoverTransform() {
    var mouseovertl = anime.timeline({
        loop: 1,
    })

    mouseovertl.add({
        targets: '.headset',
        opacity: 0,
        duration: 200,
        easing: 'linear',
    })

    mouseovertl.add({
        targets: '.vrsvg',
        scale: 1.5,
        easing: 'easeInOutQuad',
        duration: 500,
    })
}

function hoverFix() {
    var mouseouttl = anime.timeline({
        loop: 1,
    })

    mouseouttl.add({
        targets: '.headset',
        opacity: 1,
        duration: 200,
        easing: 'linear',
    })

    mouseouttl.add({
        targets: '.vrsvg',
        scale: 1,
        easing: 'easeInOutQuad',
        duration: 500,
    })
}

function btnStart() {
    if (isPlaying == false) {
        isPlaying = true;
        var hexmorph1 = anime({
            targets: '#hexagon1',
            points: [
                {
                    value: '375,0 590,150 750,375 590,590 375,750 150,590 0,375 150,150'
                },
                {
                    value: '375,0 640,110 750,375 640,640 375,750 110,640 0,375 110,110'
                },
                {
                    value: '530,1 750,220 750,530 530,750 220,750 1,530 1,220 220,1'
                },
            ],
            duration: 2000,
            easing: 'linear',
            loop: true,
        })
        var hexmorph2 = anime({
            targets: '#hexagon2',
            points: [
                {
                    value: '220,1 530,1 750,220 750,530 530,750 220,750 1,530 1,220'
                },
                {
                    value: '110,110 375,0 640,110 750,375 640,640 375,750 110,640 0,375'
                },
            ],
            duration: 2000,
            easing: 'linear',
            loop: true,
        })
        var hexmorph3 = anime({
            targets: '#hexagon3',
            points: [
                {
                    value: '530,1 750,220 750,530 530,750 220,750 1,530 1,220 220,1'
                },
                {
                    value: '640,110 750,375 640,640 375,750 110,640 0,375 110,110 375,0'
                },
            ],
            duration: 2000,
            easing: 'linear',
            loop: true,
        })

        var hexmorph4 = anime({
            targets: '#hexagon4',
            points: [
                {
                    value: '150,150 375,0 590,150 750,375 590,590 375,750 150,590 0,375'
                },
                {
                    value: '110,110 375,0 640,110 750,375 640,640 375,750 110,640 0,375'
                },
                {
                    value: '1,220 220,1 530,1 750,220 750,530 530,750 220,750 1,530'
                },
            ],
            duration: 2000,
            easing: 'linear',
            loop: true,
        })

        var line1 = anime({
            targets: '#Line_16_3_',
            d: [

                {
                    value: 'M912 30.5h98'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var line2 = anime({
            targets: '#Line_16_2_',
            d: [

                {
                    value: 'M898 39.3h127'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var line3 = anime({
            targets: '#Line_16_1_',
            d: [

                {
                    value: 'M872 54.88h178.75'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var line4 = anime({
            targets: '#Line_16',
            d: [

                {
                    value: 'M824 83.88h274'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var line5 = anime({
            targets: '#Line_11',
            d: [

                {
                    value: 'M774 113.88h374'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var line6 = anime({
            targets: '#Line_15',
            d: [

                {
                    value: 'M692 163.88h538'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var line7 = anime({
            targets: '#Line_14',
            d: [

                {
                    value: 'M576 233.88h770'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var line8 = anime({
            targets: '#Line_12',
            d: [

                {
                    value: 'M394 343.88h1134'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var line9 = anime({
            targets: '#Line_10',
            d: [

                {
                    value: 'M121 508.88h1679'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var line10 = anime({
            targets: '#Line_13',
            d: [

                {
                    value: 'M-.25 753.88h1920'
                },
            ],
            duration: 1000,
            easing: 'linear',
            loop: true,
        })

        var greycircleanimStart = anime({
            targets: '.st0',
            scale: [
                { value: .1, easing: 'easeInExpo', duration: 3000 },
                { value: 1, easing: 'easeOutExpo', duration: 3000 }
            ],
            delay: anime.stagger(30, { grid: [20, 20], from: 'center', axis: 'x' }),
            loop: true,
        });
    }
}

function btnStop() {

    if (isPlaying == true) {
        isPlaying = false;
        var hexmorph5 = anime({
            targets: '#hexagon1',
            points: [
                {
                    value: '220,1 530,1 750,220 750,530 530,750 220,750 1,530 1,220'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })
        var hexmorph6 = anime({
            targets: '#hexagon2',
            points: [
                {
                    value: '375,0 640,110 750,375 640,640 375,750 110,640 0,375 110,110'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })
        var hexmorph3 = anime({
            targets: '#hexagon3',
            points: [
                {
                    value: '375,0 640,110 750,375 640,640 375,750 110,640 0,375 110,110'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })
        var hexmorph8 = anime({
            targets: '#hexagon4',
            points: [
                {
                    value: '220,1 530,1 750,220 750,530 530,750 220,750 1,530 1,220'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line1 = anime({
            targets: '#Line_16_3_',
            d: [

                {
                    value: 'M924 23.5h75'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line2 = anime({
            targets: '#Line_16_2_',
            d: [

                {
                    value: 'M912 30.5h98'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line3 = anime({
            targets: '#Line_16_1_',
            d: [

                {
                    value: 'M898 39.3h127'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line4 = anime({
            targets: '#Line_16',
            d: [

                {
                    value: 'M872 54.88h178.75'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line5 = anime({
            targets: '#Line_11',
            d: [

                {
                    value: 'M824 83.88h274'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line6 = anime({
            targets: '#Line_15',
            d: [

                {
                    value: 'M774 113.88h374'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line7 = anime({
            targets: '#Line_14',
            d: [

                {
                    value: 'M692 163.88h538'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line8 = anime({
            targets: '#Line_12',
            d: [

                {
                    value: 'M576 233.88h770'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line9 = anime({
            targets: '#Line_10',
            d: [

                {
                    value: 'M394 343.88h1134'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var line10 = anime({
            targets: '#Line_13',
            d: [

                {
                    value: 'M121 508.88h1679'
                },
            ],
            duration: 0,
            easing: 'linear',
            loop: true,
        })

        var greycircleanimStop = anime({
            targets: '.st0',
            scale: 1,
            duration: 0,
            loop: true,
        })
    }
}