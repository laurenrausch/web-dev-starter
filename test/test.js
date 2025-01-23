import { helloWorld, add, helloWorldPopup, myName, myExperience, myGraduation, myJob } from '../js/main.js';
// Import the sinon library to allow us to create a spy on the console.log function

QUnit.module('main.js tests', function () {


    QUnit.test('helloWorldPopup should alert Hello World', function (assert) {
        assert.expect(1);
        var a = global.alert;
        global.alert = function (message) {
            assert.equal(message, "Hello World!!", "A pop up should appear with 'Hello World!!'");
        };

        helloWorldPopup();
        global.alert = a;
    });

    QUnit.test('myName should alert with my name', function (assert) {
        assert.expect(1);
        var n = global.alert;
        global.alert = function (message) {
            assert.equal(message, "Lauren Rausch but I go by Ren.", "A pop up should appear with 'Lauren Rausch but I go by Ren.'");
        };

        myName();
        global.alert = n;
    });

    QUnit.test('myGraduation should alert with my graduation', function (assert) {
        assert.expect(1);
        var g = global.alert;
        global.alert = function (message) {
            assert.equal(message, "I am hoping to graduate Decemeber 2025, but it may be May 2026.", "A pop up should appear with 'I am hoping to graduate Decemeber 2025, but it may be May 2026.'");
        };

        myGraduation();
        global.alert = g;
    });

    QUnit.test('myJob should alert with my job', function (assert) {
        assert.expect(1);
        var j = global.alert;
        global.alert = function (message) {
            assert.equal(message, "I do not have a job in web development currenlty, but I hope to get one eventually!",
                "A pop up should appear with 'I do not have a job in web development currenlty, but I hope to get one eventually!'");
        };

        myJob();
        global.alert = j;
    });

    QUnit.test('myExperience should alert with my experience', function (assert) {
        assert.expect(1);
        var e = global.alert;
        global.alert = function (message) {
            assert.equal(message, "I have not had an internship in web development but I am hoping to get one for this summer!",
                "A pop up should appear with 'I have not had an internship in web development but I am hoping to get one for this summer!'");
        };

        myExperience();
        global.alert = e;
    });

    QUnit.test('add should return the sum of two numbers', function (assert) {
        //Arrange
        const num1 = 2;
        const num2 = 3;
        const expected = 5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, 3) should return 5');
    });

    QUnit.test('add should return the sum of negative numbers', function (assert) {
        //Arrange
        const num1 = -2;
        const num2 = -3;
        const expected = -5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(-2, -3) should return -5');
    });

    QUnit.test('add should return the sum of a positive and a negative number', function (assert) {
        //Arrange
        const num1 = 2;
        const num2 = -3;
        const expected = -1;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, -3) should return -1');
    });

    QUnit.test('add should return the sum of a large positive and a large negative number', function (assert) {
        //Arrange
        const num1 = -5000;
        const num2 = 9600;
        const expected = 4600;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(-5000, 9600) should return 4600');
    });

});
