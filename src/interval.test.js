const Interval = require('./interval');

var interval1 = new Interval(1, 4);
var interval2 = new Interval(5, 9);
var interval3 = new Interval(3, 11);

describe('overlaps', function () {
    test('interval1 doesn\' overlap interval2', () => {
        expect(interval1.overlaps(interval2)).toBe(false);
    });

    test('interval1 overlap interval3', () => {
        expect(interval1.overlaps(interval3)).toBe(true);
    });
});

describe('uncludes', function () {
    test('interval1 doesn\' include interval2', () => {
        expect(interval1.overlaps(interval2)).toBe(false);
    });

    test('interval3 includes interval2', () => {
        expect(interval3.overlaps(interval2)).toBe(true);
    });
});