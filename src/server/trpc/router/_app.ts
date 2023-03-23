import { router } from "../trpc";
import { authRouter } from "./auth";
import { contactRouter } from './contact';

export const appRouter = router({
  auth: authRouter,
  contact: contactRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
