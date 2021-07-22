"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _Contribute = require("../../components/Contribute");

var _Contribute2 = _interopRequireDefault(_Contribute);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shubhamskatel/Ethereum/kickstart/pages/campaigns/show.js?entry";


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: "renderCards",
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			var items = [{
				header: manager,
				meta: "Address of the Manager",
				description: "This is the manager of the contract",
				style: { overflowWrap: "break-word" }
			}, {
				header: minimumContribution,
				meta: "Minimum Contribution (wei)",
				description: "You must contribute alteast this much wei to contribute to the campaign",
				style: { overflowWrap: "break-word" }
			}, {
				header: requestsCount,
				meta: "Number of requests",
				description: "Request to withdraw from the Campaign. It needs to be approved",
				style: { overflowWrap: "break-word" }
			}, {
				header: approversCount,
				meta: "Number of Approvers",
				description: "Number of people who have already donated to the campaign",
				style: { overflowWrap: "break-word" }
			}, {
				header: _web2.default.utils.fromWei(balance, "ether"),
				meta: "Campaign Balance (ether)",
				description: "The balance is how much money this campaign has",
				style: { overflowWrap: "break-word" }
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, _react2.default.createElement("h1", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, "Campaign Show"), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(_Contribute2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, _react2.default.createElement(_routes.Link, {
				route: "/campaigns/" + this.props.address + "/requests",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, "View Requests")))))));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt("return", {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztnQ0FnQlM7Z0JBT1QsS0FQUyxBQU9KO09BUEksQUFFWixpQkFGWSxBQUVaO09BRlksQUFHWixpQkFIWSxBQUdaO09BSFksQUFJWiw2QkFKWSxBQUlaO09BSlksQUFLWix1QkFMWSxBQUtaO09BTFksQUFNWix3QkFOWSxBQU1aLEFBR0Q7O09BQU07WUFDTCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYyxBQUNiO1dBQU8sRUFBRSxjQUxHLEFBQ2IsQUFJUSxBQUFnQjtBQUp4QixBQUNDLElBRlk7WUFPYixBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFJRSxBQUNEO1dBQU8sRUFBRSxjQVpHLEFBT2IsQUFLUSxBQUFnQjtBQUx4QixBQUNDO1lBTUQsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQUhELEFBSUUsQUFDRDtXQUFPLEVBQUUsY0FuQkcsQUFjYixBQUtRLEFBQWdCO0FBTHhCLEFBQ0M7WUFNRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFJRSxBQUNEO1dBQU8sRUFBRSxjQTFCRyxBQXFCYixBQUtRLEFBQWdCO0FBTHhCLEFBQ0M7WUFPUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FENUIsQUFDUyxBQUE0QixBQUNwQztVQUZELEFBRU8sQUFDTjtpQkFIRCxBQUdjLEFBQ2I7V0FBTyxFQUFFLGNBaENYLEFBQWMsQUE0QmIsQUFJUSxBQUFnQixBQUl6QjtBQVJDLEFBQ0M7O3dDQU9LLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQyxBQUNSOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFFQSxrQ0FBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0U7QUFERjtXQURELEFBQ0MsQUFDRSxBQUFLLEFBR1AsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtlQUFwQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxzQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztlQUFwQztpQkFQSCxBQUNDLEFBS0MsQUFDQyxBQUlGO0FBSkU7eUJBSUQsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDOzJCQUNxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFEakM7O2VBQUE7aUJBQUEsQUFHQztBQUhEO0FBQ0Msc0JBRUEsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLHlDQUFPLFNBQVI7ZUFBQTtpQkFBQTtBQUFBO01BckJQLEFBQ0MsQUFHQyxBQVdDLEFBQ0MsQUFDQyxBQUdDLEFBQ0MsQUFRUDs7Ozs7d0csQUE3RjRCOzs7OztZQUN0QjtBLG1CQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O2VBRWhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O1lBQTlDO0E7O2tCQUdJLE1BQUEsQUFBTSxNQURULEFBQ2UsQUFDckI7OEJBQXFCLFFBRmYsQUFFZSxBQUFRLEFBQzdCO2tCQUFTLFFBSEgsQUFHRyxBQUFRLEFBQ2pCO3dCQUFlLFFBSlQsQUFJUyxBQUFRLEFBQ3ZCO3lCQUFnQixRQUxWLEFBS1UsQUFBUSxBQUN4QjtrQkFBUyxRLEFBTkgsQUFNRyxBQUFRO0FBTlgsQUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBGSCxBLEFBakcyQjs7a0JBaUczQixBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc2h1YmhhbXNrYXRlbC9FdGhlcmV1bS9raWNrc3RhcnQifQ==