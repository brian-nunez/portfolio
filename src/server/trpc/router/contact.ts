import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";
import { TRPCError } from "@trpc/server";

export const contactRouter = router({
  addContact: publicProcedure
    .input(z.object({
      name: z.string().max(30, 'contact.name.error'),
      email: z.string().email('contact.email.error').max(150, 'contact.email.error'),
      message: z.string().max(300, 'contact.message.error'),
    }))
    .mutation(async ({ input, ctx }) => {
      let contact;
      try {
        contact = await ctx.prisma.contact.findFirst({
          where: {
            email: input.email,
          },
        });
      } catch (e) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' });
      }

      if (contact) {
        throw new TRPCError({ code: 'CONFLICT' });
      }

      try {

        await ctx.prisma.contact.create({
          data: {
            email: input.email,
            name: input.name,
            message: input.message,
            emailTo: env.EMAIL_SERVICE_SENT_TO,
          },
        });

        return {};
      } catch (e) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' });
      }
    }),
});
