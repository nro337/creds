import {
  Box,
  Button,
  // Button,
  Card,
  CardSection,
  Group,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { postLogin } from "../queries/postLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 8
          ? null
          : "Password should be at least 6 characters long",
    },
  });

  async function handleSubmit(values: {username: string, password: string}) {
    if (values.username && values.password) {
      await postLogin({username: values.username, password: values.password}).then((res) => {
        if (res) {
          console.log('redirecting to users')
          return navigate('/users', {replace: true});
          // return redirectDocument('/users');
        } else {
          console.log('redirecting to login')
          return navigate('/login');
          // return redirectDocument('/login');
        }
      });
      // console.log(res);
      // if (!res) {
      //   return redirect('/login');
      // } else {
      //   return redirect('/users');
      // }
    } else {
      console.log('no username or password');
      return
    }
  }

  return (
    <Box maw={500} miw={400} mx="auto" pt={"xl"}>
      <Card>
        <CardSection component="h1" py={"md"}>Login</CardSection>
        <form onSubmit={form.onSubmit((values) => handleSubmit({username: values.email, password: values.password}))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput withAsterisk label="Password" {...form.getInputProps("password")}/>

          <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Card>
    </Box>
  );
};

export default Login;
