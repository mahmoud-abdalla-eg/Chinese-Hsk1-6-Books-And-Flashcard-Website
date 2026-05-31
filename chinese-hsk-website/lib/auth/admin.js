import { getAdminSessionId } from "@/lib/auth/admin-session";
import { getAdminById } from "@/lib/auth/admins";

export async function getAdminUser() {
  const adminId = await getAdminSessionId();
  return adminId ? getAdminById(adminId) : null;
}
