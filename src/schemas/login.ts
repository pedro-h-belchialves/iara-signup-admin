import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Insira um e-mail valido."),
  password: z.string().min(4, "A senha deve ter pelo menos 4 caracteres."),
});
