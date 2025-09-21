"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { verifyEmail } from '@/services/auth.api'

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<'loading'|'success'|'error'>('loading')
  const [message, setMessage] = useState('')
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      setMessage('Invalid or missing verification token.')
      return
    }

    const verify = async () => {
      try {
        const res = await verifyEmail(token)
        setStatus('success')
        setMessage(res.message || "Your email has been verified successfully.")
      } catch (err: any) {
        setStatus('error')
        setMessage(err.response?.data?.message || "Email verification failed.")
      }
    }

    verify()
  }, [token])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl">Email Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            {status === 'loading' && (
              <div className="flex flex-col items-center gap-4">
                <p>Verifying your email...</p>
              </div>
            )}

            {status === 'success' && (
              <div className="space-y-4">
                <div className="text-green-600 text-lg">{message}</div>
                <Button asChild>
                  <Link href="/auth/login">Continue to Login</Link>
                </Button>
              </div>
            )}

            {status === 'error' && (
              <div className="space-y-4">
                <div className="text-red-600 text-lg">{message}</div>
                <div className="text-sm">
                  <Button variant="outline" asChild>
                    <Link href="/auth/signup">Resend Verification Email</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
