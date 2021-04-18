const antlr4 = require('antlr4');
const JQLLexer = require('./src/antlr/JQLLexer.js');
const JQLParser = require('./src/antlr/JQLParser.js');
const JQLVisitor = require('./src/antlr/JQLVisitor.js');
const JQLListener = require('./src/antlr/JQLListener.js');

const input = 'slug == "name" && id >= 5';
const chars = new antlr4.InputStream(input);
const lexer = new JQLLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new JQLParser(tokens);
parser.buildParseTrees = true;
const tree = parser.query();
const visitor = new JQLVisitor();
const listener = new JQLListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

console.log(visitor.visitQuery(tree));