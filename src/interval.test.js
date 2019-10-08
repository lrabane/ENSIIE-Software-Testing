const Interval = require('./interval');

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

describe('intersection', function () {
    test.each([
        [new Interval(1, 4), new Interval(5, 9), null],
        [new Interval(3, 11), new Interval(5, 9), new Interval(5, 9)],
    ])(
        '%s intersection %s equals %s',
        (interval1, interval2, expected) => {
            expect(interval1.intersection(interval2)).toStrictEqual(expected);
        }
    );
});

describe('exclusion', function () {
    test.each([
        [new Interval(1, 24), new Interval(21, 34), [new Interval(1, 21), new Interval(24, 34)]],
        [new Interval(1, 24), new Interval(29, 58), [new Interval(1, 24), new Interval(29, 58)]],
    ])(
        '%s exclusion %s equals %s',
        (interval1, interval2, expected) => {
            expect(interval1.exclusion(interval2)).toStrictEqual(expected);
        }
    );
});