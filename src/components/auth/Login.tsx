import { Box, Link, Stack, Tooltip, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useAuthContext } from 'src/services/auth/useAuthContext';
import { PATH_AUTH } from '../../routes/paths';
import LoginLayout from '../layouts/login/LoginLayout';
import AuthLoginForm from './AuthLoginForm';

export default function Login() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Sign in to Minimal</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link component={NextLink} href={PATH_AUTH.register} variant="subtitle2">
            Create an account
          </Link>
        </Stack>

        <Tooltip title={method} placement="left">
          <Box
            component="img"
            alt={method}
            src={`/assets/icons/auth/ic_${method}.png`}
            sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
          />
        </Tooltip>
      </Stack>

      <AuthLoginForm />
    </LoginLayout>
  );
}
