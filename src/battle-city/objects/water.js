/**
 * drawable
 * coordinates
 */

Trees = function Trees(x, y)
{
    this.x = x;
    this.y = y;
    this.z = 2;
    this.hw = 8; // half width
    this.hh = 8; // half height
    this.setImage('img/trees.png');
};

Trees.prototype = new AbstractGameObject();

Eventable(Trees.prototype);

Trees.prototype.serialize = function()
{
    return {
        type: 'Trees',
        id: this.id,
        x: this.x,
        y: this.y,
        z: this.z
    };
};

Trees.prototype.unserialize = function(data)
{
    this.id = data.id;
    this.x = data.x;
    this.y = data.y;
    this.z = data.z;
};

Trees.prototype.hit = function(bullet)
{
    return false;
};
