var AbstractGameObject = require('src/engine/objects/abstract.js');

function Trees(x, y)
{
    AbstractGameObject.call(this, 8, 8);
    this.x = x;
    this.y = y;
    this.z = 2;
    this.img[0] = 'img/trees.png';
}

Trees.prototype = Object.create(AbstractGameObject.prototype);
Trees.prototype.constructor = Trees;

Trees.prototype.hit = function(bullet)
{
    return false;
};

module.exports = Trees;
