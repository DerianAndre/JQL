// Generated from ../JQL.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by JQLParser.

export default class JQLVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by JQLParser#reference.
	visitReference(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by JQLParser#query.
	visitQuery(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by JQLParser#AndExpression.
	visitAndExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by JQLParser#PredicateExpression.
	visitPredicateExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by JQLParser#OrExpression.
	visitOrExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by JQLParser#OperatorPredicate.
	visitOperatorPredicate(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by JQLParser#operator.
	visitOperator(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by JQLParser#value.
	visitValue(ctx) {
	  return this.visitChildren(ctx);
	}



}