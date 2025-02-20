/**
 * An alternative way to define user roles instead of using enums.
 * It is easy to iterate over the roles.
 * The array can be used in the UI to display the roles.
 * The array can be used to validate the roles (e.g., in the DB schema definition).
 */
export const USER_ROLES = [
  'admin',
  'guest',
  'user',
] as const;

export type UserRole = typeof USER_ROLES[number];
