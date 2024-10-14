/**
 * This file contains tRPC's HTTP response handler
 */
import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@kontext-app/api/src/routers/_app';
import { createContext } from '@kontext-app/api/src/createContext';

export default trpcNext.createNextApiHandler({
});
