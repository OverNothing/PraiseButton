/*istanbul ignore next*/(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './PraiseButton.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./PraiseButton.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.PraiseButton);
        global.Thumb = mod.exports;
    }
})(this, function (exports, _PraiseButton2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _PraiseButton3 = _interopRequireDefault(_PraiseButton2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Thumb = function (_PraiseButton) {
        _inherits(Thumb, _PraiseButton);

        function /*istanbul ignore next*/Thumb() {
            /*istanbul ignore next*/_classCallCheck(this, Thumb);

            var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

            /*istanbul ignore next*/_this.$thumbWrapper = $('.thumb-wrapper');
            /*istanbul ignore next*/_this.$likeCountWrapper = $( /*istanbul ignore next*/'<div class=\'like-count-wrapper\'>\n                                        <span class=\'like-count\'>\n                                            ' + /*istanbul ignore next*/_this.likeCount + '\n                                        </span>\n                                        Like!\n                                    </div>');
            /*istanbul ignore next*/_this.$thumbPic = $( /*istanbul ignore next*/'<div class=\'thumb-pic\'></div>');
            /*istanbul ignore next*/_this.$thumbPic.on('click', /*istanbul ignore next*/_this.update.bind( /*istanbul ignore next*/_this));
            /*istanbul ignore next*/_this.$thumbWrapper.append( /*istanbul ignore next*/_this.$likeCountWrapper).append( /*istanbul ignore next*/_this.$thumbPic);
            /*istanbul ignore next*/return _this;
        }

        _createClass(Thumb, [{
            key: 'update',
            value: function update() {
                this.doLike();
                $('.like-count').html(this.likeCount);
            }
        }]);

        return Thumb;
    }(_PraiseButton3.default);

    exports.default = Thumb;
});