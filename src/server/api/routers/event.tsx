import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { EventType } from "@prisma/client";
import slugify from "slugify";

export const eventRouter = createTRPCRouter({
  createEvent: protectedProcedure
    .input(
      z.object({
        title: z.string().trim().min(1).max(255),
        description: z.string().trim().min(1),
        type: z.enum([EventType.Technical, EventType.NonTechnical]),
        coordinatorId: z.string().cuid(),
        contact: z.string().trim().min(1),
      }),
    )
    .mutation(
      async ({
        input: { title, description, type, contact, coordinatorId },
        ctx: { db },
      }) => {
        return await db.event.create({
          data: {
            title,
            slug: slugify(title),
            description,
            contact,
            type,
            coordinator: {
              connect: {
                id: coordinatorId,
              },
            },
          },
        });
      },
    ),
});
