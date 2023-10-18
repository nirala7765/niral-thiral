import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

import slugify from "slugify";

export const teamRouter = createTRPCRouter({
  createTeam: protectedProcedure
    .input(
      z.object({
        name: z.string().trim().min(1).max(255),
        members: z.array(z.string().cuid()).min(1).max(3),
      }),
    )
    .mutation(async ({ input: { members, name }, ctx: { db } }) => {
      return await db.team.create({
        data: {
          name,
          slug: slugify(name),
          members: {
            connect: members.map((id) => ({ id })),
          },
        },
      });
    }),
});
