import * as dotenv from 'dotenv';
import { bool, cleanEnv, num } from 'envalid';

dotenv.config();

export default cleanEnv(process.env, {
  // Server variables.
  PORT: num({ default: 3000 }),

  // GraphQL
  GQL_PLAYGROUND: bool({ default: false }),
});
