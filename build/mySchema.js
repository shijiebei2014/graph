'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.schema = exports.root = undefined;

var _graphql = require('graphql');

var root = null,
    schema = null;
/*schema = buildSchema(`
	type Query {
		hello: String
	}
`);

root = {
	hello: ()=> {
		return 'Hello World!';
	}
}*/

/*schema = buildSchema(`
	type Query {
		rollDice(numDice: Int!, numSides: Int): [Int]
	}
`)

root = {
	rollDice: function(args) {
		var outputs = [];
		for(var i = 0; i < args.numDice; i++) {
			outputs.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
		}
		return outputs;
	}
}*/

/*schema = buildSchema(`
	type Friend {
		name: String
	}
	
	type Query {
		name: String,
		friends: [Friend]
	}
`);
*/

var FriendType = new _graphql.GraphQLObjectType({
	name: 'Fiend',
	fields: {
		name: { type: _graphql.GraphQLString }
	}
});

var MeType = new _graphql.GraphQLObjectType({
	name: 'Me',
	fields: {
		name: { type: _graphql.GraphQLString },
		friends: { type: new _graphql.GraphQLList(FriendType) }
	}
});

exports.schema = schema = new _graphql.GraphQLSchema({ query: MeType });

exports.root = root = {
	name: 'xqq',
	friends: [{ name: '1' }, { name: '2' }, { name: '3' }]
};

exports.root = root;
exports.schema = schema;