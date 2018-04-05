import {buildSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema} from 'graphql';

let root = null,
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

var FriendType = new GraphQLObjectType({
	name: 'Fiend',
	fields: {
		name: {type: GraphQLString}
	}
});

var MeType = new GraphQLObjectType({
	name: 'Me',
	fields: {
		name: {type: GraphQLString},
		friends: {type: new GraphQLList(FriendType)}
	}
})

schema = new GraphQLSchema({query: MeType});

root = {
	name: 'xqq',
	friends: [{name: '1'}, {name: '2'}, {name: '3'}]
}


export {
	root,
	schema
}
