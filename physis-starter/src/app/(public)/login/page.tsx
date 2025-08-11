import Link from 'next/link';
import AuthForm from '@/components/auth-form';

export default function LoginPage(){
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <h1 className="font-serif text-3xl">Welcome back</h1>
      <AuthForm mode="login" />
      <p className="text-sm">No account? <Link className="text-olive-700 underline" href="/signup">Sign up</Link></p>
    </div>
  );
}
