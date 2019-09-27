const Interval = require('./interval');

var interval1 = new Interval(1, 4);
var interval2 = new Interval(5, 9);
var interval3 = new Interval(3, 11);


describe('overlaps', function () {
    test.each([
        [new Interval(1, 4), new Interval(5, 9), false],
        [new Interval(1, 4), new Interval(3, 11), true],
    ])(
        '%s overlaps %s equals %s',
        (interval1, interval2, expected) => {
            expect(interval1.overlaps(interval2)).toBe(expected);
        }
    );
});


describe('includes', function () {
    test.each([
        [new Interval(1, 4), new Interval(5, 9), false],
        [new Interval(3, 11), new Interval(5, 9), true],
    ])(
        '%s includes %s equals %s',
        (interval1, interval2, expected) => {
            expect(interval1.includes(interval2)).toBe(expected);
        }
    );
});

describe('union', function () {
    test.each([
        [new Interval(1, 4), new Interval(5, 9), [new Interval(1, 4), new Interval(5, 9)]],
        [new Interval(3, 11), new Interval(5, 9), [new Interval(3, 11)]],
    ])(
        '%s union %s equals %s',
        (interval1, interval2, expected) => {
            expect(interval1.union(interval2)).toStrictEqual(expected);
        }
    );
});