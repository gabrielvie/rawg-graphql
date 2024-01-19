import { cleanEnv, num, str } from 'envalid';

export default cleanEnv(process.env, {
  // Server variables.
  PORT: num({ default: 3000 }),
  NODE_ENV: str({
    choices: ['development', 'test', 'production', 'staging'],
    default: 'development',
  }),

  // RAWG
  RAWG_API_KEY: str(),
});
