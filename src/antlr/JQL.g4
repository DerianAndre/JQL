grammar JQL;

AND         : '&' | '&&';
OR          : '|' | '||';

// comparison operators
EQ          : '=' | '==';
CONTAINS    : '~' | '~~';
GT          : '>';
GTE         : '>=';
LT          : '<';
LTE         : '<=';

WS          : [ \t\r\n]+ -> skip;
INT         : '-'? [0-9]+ ;
FLOAT       : '-'? [0-9]+'.'[0-9]+;
STRING      : '"' .*? '"';

ID          : [a-zA-Z]+;

filter
		: expression
		;

expression
		: expression AND expression 	#AndExpression
		| expression OR  expression 	#OrExpression
		| predicate 									#PredicateExpression
		;

reference: ID;

predicate
		: reference oper value				#OperatorPredicate
		;

oper
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