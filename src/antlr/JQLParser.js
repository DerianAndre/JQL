// Generated from JQL.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JQLListener from './JQLListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000f:\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u001a\n\u0003\f\u0003\u000e\u0003\u001d\u000b\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0005\u0007)\n\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007-\n\u0007\u0003\u0007\u0003\u0007\u0005\u00071\n\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u00075\n\u0007\u0003\u0007\u0005\u0007",
    "8\n\u0007\u0003\u0007\u0002\u0003\u0004\b\u0002\u0004\u0006\b\n\f\u0002",
    "\u0003\u0003\u0002\u0005\n\u0002=\u0002\u000e\u0003\u0002\u0002\u0002",
    "\u0004\u0010\u0003\u0002\u0002\u0002\u0006\u001e\u0003\u0002\u0002\u0002",
    "\b \u0003\u0002\u0002\u0002\n$\u0003\u0002\u0002\u0002\f7\u0003\u0002",
    "\u0002\u0002\u000e\u000f\u0005\u0004\u0003\u0002\u000f\u0003\u0003\u0002",
    "\u0002\u0002\u0010\u0011\b\u0003\u0001\u0002\u0011\u0012\u0005\b\u0005",
    "\u0002\u0012\u001b\u0003\u0002\u0002\u0002\u0013\u0014\f\u0005\u0002",
    "\u0002\u0014\u0015\u0007\u0003\u0002\u0002\u0015\u001a\u0005\u0004\u0003",
    "\u0006\u0016\u0017\f\u0004\u0002\u0002\u0017\u0018\u0007\u0004\u0002",
    "\u0002\u0018\u001a\u0005\u0004\u0003\u0005\u0019\u0013\u0003\u0002\u0002",
    "\u0002\u0019\u0016\u0003\u0002\u0002\u0002\u001a\u001d\u0003\u0002\u0002",
    "\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002",
    "\u0002\u001c\u0005\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0007\u000f\u0002\u0002\u001f\u0007\u0003\u0002\u0002",
    "\u0002 !\u0005\u0006\u0004\u0002!\"\u0005\n\u0006\u0002\"#\u0005\f\u0007",
    "\u0002#\t\u0003\u0002\u0002\u0002$%\t\u0002\u0002\u0002%\u000b\u0003",
    "\u0002\u0002\u0002&(\u0007\f\u0002\u0002\')\u0007\u000b\u0002\u0002",
    "(\'\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)8\u0003\u0002",
    "\u0002\u0002*,\u0007\f\u0002\u0002+-\u0007\u000b\u0002\u0002,+\u0003",
    "\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-8\u0003\u0002\u0002\u0002",
    ".0\u0007\r\u0002\u0002/1\u0007\u000b\u0002\u00020/\u0003\u0002\u0002",
    "\u000201\u0003\u0002\u0002\u000218\u0003\u0002\u0002\u000224\u0007\r",
    "\u0002\u000235\u0007\u000b\u0002\u000243\u0003\u0002\u0002\u000245\u0003",
    "\u0002\u0002\u000258\u0003\u0002\u0002\u000268\u0007\u000e\u0002\u0002",
    "7&\u0003\u0002\u0002\u00027*\u0003\u0002\u0002\u00027.\u0003\u0002\u0002",
    "\u000272\u0003\u0002\u0002\u000276\u0003\u0002\u0002\u00028\r\u0003",
    "\u0002\u0002\u0002\t\u0019\u001b(,047"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JQLParser extends antlr4.Parser {

    static grammarFileName = "JQL.g4";
    static literalNames = [ null, null, null, null, null, "'>'", "'>='", 
                            "'<'", "'<='" ];
    static symbolicNames = [ null, "AND", "OR", "EQ", "CONTAINS", "GT", 
                             "GTE", "LT", "LTE", "WS", "INT", "FLOAT", "STRING", 
                             "ID" ];
    static ruleNames = [ "filter", "expression", "reference", "predicate", 
                         "oper", "value" ];

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
    	case 1:
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




	filter() {
	    let localctx = new FilterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JQLParser.RULE_filter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
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
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, JQLParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new PredicateExpressionContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 15;
	        this.predicate();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 23;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JQLParser.RULE_expression);
	                    this.state = 17;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 18;
	                    this.match(JQLParser.AND);
	                    this.state = 19;
	                    this.expression(4);
	                    break;

	                case 2:
	                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JQLParser.RULE_expression);
	                    this.state = 20;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 21;
	                    this.match(JQLParser.OR);
	                    this.state = 22;
	                    this.expression(3);
	                    break;

	                } 
	            }
	            this.state = 27;
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



	reference() {
	    let localctx = new ReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JQLParser.RULE_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(JQLParser.ID);
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



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JQLParser.RULE_predicate);
	    try {
	        localctx = new OperatorPredicateContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.reference();
	        this.state = 31;
	        this.oper();
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



	oper() {
	    let localctx = new OperContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JQLParser.RULE_oper);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JQLParser.EQ) | (1 << JQLParser.CONTAINS) | (1 << JQLParser.GT) | (1 << JQLParser.GTE) | (1 << JQLParser.LT) | (1 << JQLParser.LTE))) !== 0))) {
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
JQLParser.AND = 1;
JQLParser.OR = 2;
JQLParser.EQ = 3;
JQLParser.CONTAINS = 4;
JQLParser.GT = 5;
JQLParser.GTE = 6;
JQLParser.LT = 7;
JQLParser.LTE = 8;
JQLParser.WS = 9;
JQLParser.INT = 10;
JQLParser.FLOAT = 11;
JQLParser.STRING = 12;
JQLParser.ID = 13;

JQLParser.RULE_filter = 0;
JQLParser.RULE_expression = 1;
JQLParser.RULE_reference = 2;
JQLParser.RULE_predicate = 3;
JQLParser.RULE_oper = 4;
JQLParser.RULE_value = 5;

class FilterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JQLParser.RULE_filter;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.enterFilter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitFilter(this);
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


}

JQLParser.OrExpressionContext = OrExpressionContext;

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

	ID() {
	    return this.getToken(JQLParser.ID, 0);
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


}



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

	oper() {
	    return this.getTypedRuleContext(OperContext,0);
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


}

JQLParser.OperatorPredicateContext = OperatorPredicateContext;

class OperContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JQLParser.RULE_oper;
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
	        listener.enterOper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JQLListener ) {
	        listener.exitOper(this);
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


}




JQLParser.FilterContext = FilterContext; 
JQLParser.ExpressionContext = ExpressionContext; 
JQLParser.ReferenceContext = ReferenceContext; 
JQLParser.PredicateContext = PredicateContext; 
JQLParser.OperContext = OperContext; 
JQLParser.ValueContext = ValueContext; 
