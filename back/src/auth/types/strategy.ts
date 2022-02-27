import { AuthDto } from './auth.output';

export type StrategyType = AuthDto & {
  iat: number;
  exp: string;
};
