define(function(){
    window.images = {};

    var sprites = [
        'img/tank1-down-s1.png'
      , 'img/tank1-down-s2.png'
      , 'img/tank1-up-s1.png'
      , 'img/tank1-up-s2.png'
      , 'img/tank1-right-s1.png'
      , 'img/tank1-right-s2.png'
      , 'img/tank1-left-s1.png'
      , 'img/tank1-left-s2.png'
      , 'img/tank2-down-s1.png'
      , 'img/tank2-down-s2.png'
      , 'img/tank2-up-s1.png'
      , 'img/tank2-up-s2.png'
      , 'img/tank2-right-s1.png'
      , 'img/tank2-right-s2.png'
      , 'img/tank2-left-s1.png'
      , 'img/tank2-left-s2.png'
      , 'img/normal-bot-down-s1.png'
      , 'img/normal-bot-down-s2.png'
      , 'img/normal-bot-down-s1-blink.png'
      , 'img/normal-bot-down-s2-blink.png'
      , 'img/normal-bot-up-s1.png'
      , 'img/normal-bot-up-s2.png'
      , 'img/normal-bot-up-s1-blink.png'
      , 'img/normal-bot-up-s2-blink.png'
      , 'img/normal-bot-right-s1.png'
      , 'img/normal-bot-right-s2.png'
      , 'img/normal-bot-right-s1-blink.png'
      , 'img/normal-bot-right-s2-blink.png'
      , 'img/normal-bot-left-s1.png'
      , 'img/normal-bot-left-s2.png'
      , 'img/normal-bot-left-s1-blink.png'
      , 'img/normal-bot-left-s2-blink.png'
      , 'img/fast-bullet-bot-down-s1.png'
      , 'img/fast-bullet-bot-down-s2.png'
      , 'img/fast-bullet-bot-down-s1-blink.png'
      , 'img/fast-bullet-bot-down-s2-blink.png'
      , 'img/fast-bullet-bot-up-s1.png'
      , 'img/fast-bullet-bot-up-s2.png'
      , 'img/fast-bullet-bot-up-s1-blink.png'
      , 'img/fast-bullet-bot-up-s2-blink.png'
      , 'img/fast-bullet-bot-right-s1.png'
      , 'img/fast-bullet-bot-right-s2.png'
      , 'img/fast-bullet-bot-right-s1-blink.png'
      , 'img/fast-bullet-bot-right-s2-blink.png'
      , 'img/fast-bullet-bot-left-s1.png'
      , 'img/fast-bullet-bot-left-s2.png'
      , 'img/fast-bullet-bot-left-s1-blink.png'
      , 'img/fast-bullet-bot-left-s2-blink.png'
      , 'img/fast-bot-down-s1.png'
      , 'img/fast-bot-down-s2.png'
      , 'img/fast-bot-down-s1-blink.png'
      , 'img/fast-bot-down-s2-blink.png'
      , 'img/fast-bot-up-s1.png'
      , 'img/fast-bot-up-s2.png'
      , 'img/fast-bot-up-s1-blink.png'
      , 'img/fast-bot-up-s2-blink.png'
      , 'img/fast-bot-right-s1.png'
      , 'img/fast-bot-right-s2.png'
      , 'img/fast-bot-right-s1-blink.png'
      , 'img/fast-bot-right-s2-blink.png'
      , 'img/fast-bot-left-s1.png'
      , 'img/fast-bot-left-s2.png'
      , 'img/fast-bot-left-s1-blink.png'
      , 'img/fast-bot-left-s2-blink.png'
      , 'img/heavy-bot-down-s1.png'
      , 'img/heavy-bot-down-s2.png'
      , 'img/heavy-bot-down-s1-blink.png'
      , 'img/heavy-bot-down-s2-blink.png'
      , 'img/heavy-bot-up-s1.png'
      , 'img/heavy-bot-up-s2.png'
      , 'img/heavy-bot-up-s1-blink.png'
      , 'img/heavy-bot-up-s2-blink.png'
      , 'img/heavy-bot-right-s1.png'
      , 'img/heavy-bot-right-s2.png'
      , 'img/heavy-bot-right-s1-blink.png'
      , 'img/heavy-bot-right-s2-blink.png'
      , 'img/heavy-bot-left-s1.png'
      , 'img/heavy-bot-left-s2.png'
      , 'img/heavy-bot-left-s1-blink.png'
      , 'img/heavy-bot-left-s2-blink.png'
      , 'img/bullet-up.png'
      , 'img/bullet-down.png'
      , 'img/bullet-left.png'
      , 'img/bullet-right.png'
      , 'img/brick-wall.png'
      , 'img/black.png'
      , 'img/base.png'
      , 'img/base-hit.png'
      , 'img/birth1.png'
      , 'img/birth2.png'
      , 'img/steel-wall.png'
      , 'img/star.png'
      , 'img/grenade.png'
      , 'img/shovel.png'
      , 'img/trees.png'
      , 'img/water1.png'
      , 'img/water2.png'
      , 'img/hit1.png'
      , 'img/hit2.png'
      , 'img/hit3.png'
      , 'img/helmet.png'
      , 'img/live.png'
      , 'img/timer.png'
      , 'img/armored1.png'
      , 'img/armored2.png'
      , 'img/ice.png'
    ];
    for (var i in sprites) {
        window.images[sprites[i]] = new Image();
        window.images[sprites[i]].src = sprites[i];
    }
});
