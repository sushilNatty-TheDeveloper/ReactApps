'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getMessage',
        value: function getMessage() {
            return 'He is ' + this.name + ' and ' + this.age + ' year(s) old..!!';
        }
    }]);

    return Person;
}();

;

var employee = function (_Person) {
    _inherits(employee, _Person);

    function employee(name, age) {
        var grade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'k';

        _classCallCheck(this, employee);

        var _this = _possibleConstructorReturn(this, (employee.__proto__ || Object.getPrototypeOf(employee)).call(this, name, age));

        _this.grade = grade;

        return _this;
    }

    _createClass(employee, [{
        key: 'getMessage',
        value: function getMessage() {
            return 'He is ' + this.name + ' and ' + this.age + ' year(s) old.. and grad ' + this.grade + '!!';
        }
    }]);

    return employee;
}(Person);

var obj = new employee('sam', 31, '2nd');
console.log(obj.getMessage());
