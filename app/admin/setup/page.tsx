import { isAnyAdminCreated } from '@/lib/auth';
import AdminSetupForm from '@/components/admin/AdminSetupForm';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AdminSetupPage() {
    // Check if any admin exists - if so, this route is dead/perished
    const exists = await isAnyAdminCreated();

    if (exists) {
        // If an admin already exists, this route should not be accessible.
        // We'll redirect to the main admin login.
        redirect('/admin');
    }

    return (
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--off-white)' }}>
            <AdminSetupForm />
        </main>
    );
}
