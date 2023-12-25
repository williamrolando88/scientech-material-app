import { Link, Typography } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import AuthNewPasswordForm from 'src/components/auth/AuthNewPasswordForm';
import CompactLayout from 'src/components/layouts/compact/CompactLayout';
import { SentIcon } from '../../assets/icons';
import Iconify from '../../components/shared/iconify';
import { PATH_AUTH } from '../../routes/paths';

NewPasswordPage.getLayout = (page: React.ReactElement) => <CompactLayout>{page}</CompactLayout>;

export default function NewPasswordPage() {
  return (
    <>
      <Head>
        <title> New Password | Minimal UI</title>
      </Head>

      <SentIcon sx={{ mb: 5, height: 96 }} />

      <Typography variant="h3" paragraph>
        Request sent successfully!
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 5 }}>
        We&apos;ve sent a 6-digit confirmation email to your email.
        <br />
        Please enter the code in below box to verify your email.
      </Typography>

      <AuthNewPasswordForm />

      <Typography variant="body2" sx={{ my: 3 }}>
        Don’t have a code? &nbsp;
        <Link variant="subtitle2">Resend code</Link>
      </Typography>

      <Link
        component={NextLink}
        href={PATH_AUTH.login}
        color="inherit"
        variant="subtitle2"
        sx={{
          mx: 'auto',
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify icon="eva:chevron-left-fill" width={16} />
        Return to sign in
      </Link>
    </>
  );
}
