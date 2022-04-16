import { questionResolver } from './question/resolvers';
import { questionSchema } from './question/schema';
import { roomResolver } from './room/resolvers';
import { roomSchema } from './room/schema';

const typeDefs = [roomSchema, questionSchema];
const resolvers = [roomResolver, questionResolver];

export { typeDefs, resolvers };
