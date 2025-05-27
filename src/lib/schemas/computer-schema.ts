import { z } from "zod";

export const computerSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  property: z.string().min(5, "Código é obrigatório"),
  identifier: z.coerce.number().int().positive("Identificador inválido"),
  purchaseData: z.string().min(1, "Data é obrigatória"),
});

export type ComputerFormData = z.infer<typeof computerSchema>;
