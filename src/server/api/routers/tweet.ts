import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const tweetRouter = createTRPCRouter({
  InfiniteFeed: publicProcedure.input(z.object({
    limit:z.number().optional(), 
    cursor: z.object({ id: z.string(), createdAt: z.date() 
  }).optional(),
  })
  ).query(async({input: {limit = 10, cursor}, ctx}) => {
    ctx.db.tweet.findMany({
      take: limit +1,
      cursor: cursor ? { createdAt_id: cursor  } : undefined,
      orderBy: [{createdAt: "desc"}, {id: "desc"}]
    })
  }),
  create: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async({input: {content}, ctx}) => {
      const tweet = await ctx.db.tweet.create({
        data: {content, userId: ctx.session.user.id },
      });

      return tweet
    }),
});
