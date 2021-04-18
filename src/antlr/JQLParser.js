// Generated from ../JQL.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JQLListener from './JQLListener.js';
import JQLVisitor from './JQLVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000f:\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004\u001c\n\u0004\f\u0004\u000e\u0004\u001f\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0005\u0007)\n\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007-\n\u0007\u0003\u0007\u0003\u0007\u0005\u00071\n\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u00075\n\u0007\u0003\u0007\u0005\u0007",
    "8\n\u0007\u0003\u0007\u0002\u0003\u0006\b\u0002\u0004\u0006\b\n\f\u0002",
    "\u0003\u0003\u0002\u0006\u000b\u0002=\u0002\u000e\u0003\u0002\u0002",
    "\u0002\u0004\u0010\u0003\u0002\u0002\u0002\u0006\u0012\u0003\u0002\u0002",
    "\u0002\b \u0003\u0002\u0002\u0002\n$\u0003\u0002\u0002\u0002\f7\u0003",
    "\u0002\u0002\u0002\u000e\u000f\u0007\u0003\u0002\u0002\u000f\u0003\u0003",
    "\u0002\u0002\u0002\u0010\u0011\u0005\u0006\u0004\u0002\u0011\u0005\u0003",
    "\u0002\u0002\u0002\u0012\u0013\b\u0004\u0001\u0002\u0013\u0014\u0005",
    "\b\u0005\u0002\u0014\u001d\u0003\u0002\u0002\u0002\u0015\u0016\f\u0005",
    "\u0002\u0002\u0016\u0017\u0007\u0004\u0002\u0002\u0017\u001c\u0005\u0006",
    "\u0004\u0006\u0018\u0019\f\u0004\u0002\u0002\u0019\u001a\u0007\u0005",
    "\u0002\u0002\u001a\u001c\u0005\u0006\u0004\u0005\u001b\u0015\u0003\u0002",
    "\u0002\u0002\u001b\u0018\u0003\u0002\u0002\u0002\u001c\u001f\u0003\u0002",
    "\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002",
    "\u0002\u0002\u001e\u0007\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002 !\u0005\u0002\u0002\u0002!\"\u0005\n\u0006\u0002\"#\u0005",
    "\f\u0007\u0002#\t\u0003\u0002\u0002\u0002$%\t\u0002\u0002\u0002%\u000b",
    "\u0003\u0002\u0002\u0002&(\u0007\r\u0002\u0002\')\u0007\f\u0002\u0002",
    "(\'\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)8\u0003\u0002",
    "\u0002\u0002*,\u0007\r\u0002\u0002+-\u0007\f\u0002\u0002,+\u0003\u0002",
    "\u0002\u0002,-\u0003\u0002\u0002\u0002-8\u0003\u0002\u0002\u0002.0\u0007",
    "\u000e\u0002\u0002/1\u0007\f\u0002\u00020/\u0003\u0002\u0002\u00020",
    "1\u0003\u0002\u0002\u000218\u0003\u0002\u0002\u000224\u0007\u000e\u0002",
    "\u000235\u0007\f\u0002\u000243\u0003\u0002\u0002\u000245\u0003\u0002",
    "\u0002\u000258\u0003\u0002\u0002\u000268\u0007\u000f\u0002\u00027&\u0003",
    "\u0002\u0002\u00027*\u0003\u0002\u0002\u00027.\u0003\u0002\u0002\u0002",
    "72\u0003\u0002\u0002\u000276\u0003\u0002\u0002\u00028\r\u0003\u0002",
    "\u0002\u0002\t\u001b\u001d(,047"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JQLParser extends antlr4.Parser {

    static grammarFileName = "JQL.g4";
    static literalNames = [ null, null, null, null, null, null, "'<'", "'>'", 
                            "'<='", "'>='" ];
    static symbolicNames = [ null, "KEY", "AND", "OR", "EQ", "CONTAINS", 
                             "LT", "GT", "LTE", "GTE", "WS", "INT", "FLOAT", 
                             "STRING" ];
    static ruleNames = [ "reference", "query", "expression", "predicate", 
                         "operator", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JQLParser.ruleNames;
        this.literalNames = JQLParser.literalNames;
        this.symbolicNames = JQLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	reference() {
	    let localctx = new ReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JQLParser.RULE_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.match(JQLParser.KEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JQLParser.RULE_query);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, JQLParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new PredicateExpressionContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 17;
	        this.predicate();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 25;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JQLParser.RULE_expression);
	                    this.state = 19;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 20;
	                    this.match(JQLParser.AND);
	                    this.state = 21;
	                    this.expression(4);
	                    break;

	                case 2:
	                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JQLParser.RULE_expression);
	                    this.state = 22;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 23;
	                    this.match(JQLParser.OR);
	                    this.state = 24;
	                    this.expression(3);
	                    break;

	                } 
	            }
	            this.state = 29;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JQLParser.RULE_predicate);
	    try {
	        localctx = new OperatorPredicateContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.reference();
	        this.state = 31;
	        this.operator();
	        this.state = 32;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operator() {
	    let localctx = new OperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JQLParser.RULE_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JQLParser.EQ) | (1 << JQLParser.CONTAINS) | (1 << JQLParser.LT) | (1 << JQLParser.GT) | (1 << JQLParser.LTE) | (1 << JQLParser.GTE))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JQLParser.RULE_value);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.match(JQLParser.INT);
	            this.state = 38;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 37;
	                this.match(JQLParser.WS);

	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.match(JQLParser.INT);
	            this.state = 42;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 41;
	                this.match(JQLParser.WS);

	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.match(JQLParser.FLOAT);
	            this.state = 46;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 45;
	                this.match(JQLParser.WS);

	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.match(JQLParser.FLOAT);
	            this.state = 50;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 49;
	                this.match(JQLParser.WS);

	            }
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 52;
	            this.match(JQLParser.STRING);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JQLParser.EOF = antlr4.Token.EOF;
JQLParser.KEY = 1;
JQLParser.AND = 2;
JQLParser.OR = 3;
JQLParser.EQ = 4;
JQLParser.CONTAINS = 5;
JQLParser.LT = 6;
JQLParser.GT = 7;
JQLParser.LTE = 8;
JQLParser.GTE = 9;
JQLParser.WS = 10;
JQLParser.INT = 11;
JQLParser.FLOAT = 12;
JQLParser.STRING = 13;

JQLParser.RULE_reference = 0;
JQLParser.RULE_query = 1;
JQLParser.RULE_expression = 2;
JQLParser.RULE_predicate = 3;
JQLParser.RULE_operator = 4;
JQLParser.RULE_value = 5;

class ReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JQLParser.RULE_reference;
    }

	KEY() {
	    return this.getToken(JQLParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.enterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitReference(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JQLVisitor ) {
	        return visitor.visitReference(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JQLParser.RULE_query;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitQuery(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JQLVisitor ) {
	        return visitor.visitQuery(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JQLParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AndExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	AND() {
	    return this.getToken(JQLParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.enterAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitAndExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JQLVisitor ) {
	        return visitor.visitAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JQLParser.AndExpressionContext = AndExpressionContext;

class PredicateExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.enterPredicateExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitPredicateExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JQLVisitor ) {
	        return visitor.visitPredicateExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JQLParser.PredicateExpressionContext = PredicateExpressionContext;

class OrExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OR() {
	    return this.getToken(JQLParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.enterOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitOrExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JQLVisitor ) {
	        return visitor.visitOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JQLParser.OrExpressionContext = OrExpressionContext;

class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JQLParser.RULE_predicate;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OperatorPredicateContext extends PredicateContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	operator() {
	    return this.getTypedRuleContext(OperatorContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.enterOperatorPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitOperatorPredicate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JQLVisitor ) {
	        return visitor.visitOperatorPredicate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JQLParser.OperatorPredicateContext = OperatorPredicateContext;

class OperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JQLParser.RULE_operator;
    }

	EQ() {
	    return this.getToken(JQLParser.EQ, 0);
	};

	CONTAINS() {
	    return this.getToken(JQLParser.CONTAINS, 0);
	};

	GT() {
	    return this.getToken(JQLParser.GT, 0);
	};

	GTE() {
	    return this.getToken(JQLParser.GTE, 0);
	};

	LT() {
	    return this.getToken(JQLParser.LT, 0);
	};

	LTE() {
	    return this.getToken(JQLParser.LTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.enterOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JQLVisitor ) {
	        return visitor.visitOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JQLParser.RULE_value;
    }

	INT() {
	    return this.getToken(JQLParser.INT, 0);
	};

	WS() {
	    return this.getToken(JQLParser.WS, 0);
	};

	FLOAT() {
	    return this.getToken(JQLParser.FLOAT, 0);
	};

	STRING() {
	    return this.getToken(JQLParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JQLVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JQLParser.ReferenceContext = ReferenceContext; 
JQLParser.QueryContext = QueryContext; 
JQLParser.ExpressionContext = ExpressionContext; 
JQLParser.PredicateContext = PredicateContext; 
JQLParser.OperatorContext = OperatorContext; 
JQLParser.ValueContext = ValueContext; 
