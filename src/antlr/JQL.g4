grammar JQL;
// Key
KEY         : [a-zA-Z]+;

// Operators:
AND         : '&' | '&&';
OR          : '|' | '||';

// Operators: Conditional & Order
EQ          : '=' | '==';
CONTAINS    : '~' | '~~';
LT          : '<';
GT          : '>';
LTE         : '<=';
GTE         : '>=';

// Values
WS          : [ \t\r\n]+ -> skip;
INT         : '-'? [0-9]+ ;
FLOAT       : '-'? [0-9]+'.'[0-9]+;
STRING      : '"' .*? '"';


reference: KEY;

query
		: expression
		;

expression
		: expression AND expression 	#AndExpression
		| expression OR  expression 	#OrExpression
		| predicate 									#PredicateExpression
		;

predicate
		: reference operator value		#OperatorPredicate
		;

operator
		: EQ
		| CONTAINS
		| GT
		| GTE
		| LT
		| LTE
		;

value
		: INT WS?
		| INT WS?
		| FLOAT WS?
		| FLOAT WS?
		| STRING
		;