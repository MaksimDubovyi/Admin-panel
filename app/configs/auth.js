import Credentials from "next-auth/providers/credentials";
import { authLogin } from "../../services/authConfig";
export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        phoneNumber: { label: "Phone", type: "tel" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await authLogin(
          credentials?.phoneNumber,
          credentials?.password
        );

        try {
          const user = await res.json();
          if (user && user.error) {
            return null;
          }

          if (res.ok && user) {
            const sessionUser = {
              id: user.user.id,
              name: user.user.name,
              email: user.token,
            };

            return sessionUser;
          } else {
            return null;
          }
        } catch (err) {
          console.error("Error parsing JSON response:", err);
          return null;
        }
      },
    }),
  ],
};
