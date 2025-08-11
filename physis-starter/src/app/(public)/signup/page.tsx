import Link from 'next/link';
import AuthForm from '@/components/auth-form';

export default function SignupPage(){
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <h1 className="font-serif text-3xl">Create your account</h1>
      <AuthForm mode="signup" />
      <p className="text-sm">Already have an account? <Link className="text-olive-700 underline" href="/login">Log in</Link></p>
    </div>
  );
}
