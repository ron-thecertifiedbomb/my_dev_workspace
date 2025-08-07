export const roles = ["admin", "user"] as const;

export function isAuthorized(role: string | null, required: string) {
  return role === required;
}
