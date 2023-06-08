'use client';
import { Layout } from '@/components/layouts';
import { ChangeEventHandler, useState } from 'react';
import { Button } from '@/components/ui';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para autenticar al usuario

    // Restablecer el formulario
    setEmail('');
    setPassword('');
  };

  return (
    <Layout pageTitle={'Login'} pageDescription={'This is the login page'}>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white p-16 shadow-md rounded-md'>
          <h2 className='text-2xl font-bold mb-6'>Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 font-semibold mb-1'
              >
                Correo electrónico
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block text-gray-700 font-semibold mb-1'
              >
                Contraseña
              </label>
              <input
                type='password'
                id='password'
                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <Button
              className={
                'w-full py-2 px-4 text-white font-semibold rounded-md focus:outline-none'
              }
              variant={'contained'}
              size={'lg'}
            >
              Iniciar sesión
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
