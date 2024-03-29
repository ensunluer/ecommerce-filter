import { useDispatch, useSelector } from 'react-redux';

import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LoadingButton } from '@mui/lab';
import Typography from '@mui/material/Typography';

import { login } from 'src/store/auth.slice';
import { AuthUserType } from 'src/store/types';

import { FormProvider } from 'src/components/redux-form';
import RFTextField from 'src/components/redux-form/text-field';

import { validate } from './validate';

function LoginForm() {
  const { loading, error } = useSelector((state: AuthUserType) => state?.auth);

  const dispatch = useDispatch();

  const handleSubmit = (values: AuthUserType) => {
    try {
      dispatch(login(values?.email, values?.password));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // @ts-ignore // TODO: fix type
    <FormProvider formName="LoginForm" onSubmit={handleSubmit} validate={validate}>
      <Stack sx={{minWidth: '400px !important'}} spacing={2}>
        <Typography variant="h4">Login Wardiere</Typography>
        {error && (<Alert severity="error">{typeof error === 'string' ? error : error.message}</Alert>)}
        <RFTextField name="email" label="Email" type="email" />
        <RFTextField name="password" label="Password" type="password" />
        <LoadingButton fullWidth variant="contained" loading={loading} disabled={loading} type="submit">Login</LoadingButton>
      </Stack>
    </FormProvider>
  );
}

export default LoginForm;
