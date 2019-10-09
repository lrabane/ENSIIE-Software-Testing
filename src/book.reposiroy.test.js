const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Book repository Count', function () {

    test('Count 42 books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(42)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(42);
    });
});

describe('Book repository Price', function () {

    test('Get total price of 4,13,17,8,11,15', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([4,13,17,8,11,15])
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(68);
    });
});

describe('Book repository Get', function () {

    test('Get LOTR', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([
                {
                    'id': 0,
                    'name': 'The Lord of the Rings',
                    'price' : 15.99,
                    'added_at': '2012-08-14'
                },
                {
                    'id': 1,
                    'name': 'The Alchemist',
                    'price' : 12.62,
                    'added_at': '2014-04-15'
                },
                {
                    'id': 2,
                    'name': 'The Little Prince',
                    'price' : 9.59,
                    'added_at': '2000-05-15'
                },
            ])
            
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName('The Lord of the Rings')).toStrictEqual([{
            'id': 0,
            'name': 'The Lord of the Rings',
            'price' : 15.99,
            'added_at': '2012-08-14'
        }]);
    });
});