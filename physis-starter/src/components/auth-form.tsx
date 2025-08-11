'use client';
import { useState } from 'react';
import { createClient } from '@/lib/supabase-client';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function AuthForm({ mode }: { mode: 'login'|'signup' }){
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|undefined>();

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setLoading(true); setError(undefined);
    try{
      if(mode==='signup'){
        const { error } = await supabase.auth.signUp({ email, password });
        if(error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if(error) throw error;
      }
      window.location.href = '/';
    }catch(err:any){ setError(err.message); }
    finally{ setLoading(false); }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
      </div>
      {error && <p className="text-sm text-terracotta-600">{error}</p>}
      <Button disabled={loading}>{loading ? 'Please wait…' : (mode==='signup'?'Create account':'Sign in')}</Button>
    </form>
  );
}
