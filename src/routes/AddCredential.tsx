import Pocketbase from 'pocketbase';
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { Cred } from "../types/Cred"
import * as z from "zod"
import { useState } from 'react';
import { Box, Select, TextInput } from '@mantine/core';

const schema = z.object({
  cert_id: z.string(),
  date_issued: z.string(),
  owner: z.string(),
  expiration_date: z.string(),
  credential_type: z.union([
    z.literal('univeristy'),
    z.literal('license'),
    z.literal('membership'),
    z.literal('exam'),
    z.literal('other')
  ]),
  // custom_cred: z.object({
  //   title: z.string(),
  //   source: z.string(),
  //   validation_id: z.string()
  // }).optional(),
  custom_cred: z.record(z.string()).optional(),
  created: z.string(),
  updated: z.string()
})

type Schema = z.infer<typeof schema>;

const AddCredential = () => {
  const base_url = import.meta.env.VITE_BASE
  const pb = new Pocketbase(base_url);
  const [selectedType, setSelectedType] = useState<string>('university');
  // const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<Schema>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: Schema) => {
    console.log(data);
    const cred: Cred = {
      cert_id: data.cert_id,
      date_issued: data.date_issued,
      owner: data.owner,
      expiration_date: data.expiration_date,
      credential_type: data.credential_type,
      created: data.created,
      updated: data.updated,
    }
    if (data.custom_cred) {
      cred.custom_cred = {
        title: data.custom_cred.title,
        source: data.custom_cred.source,
        validation_id: data.custom_cred.validation_id
      }
    }
    console.log(cred);
    // pb.collection<Cred>("creds").add(cred);
  }

  if (!pb.authStore.isValid) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <Box maw={340} mx={"auto"}>
      <h1>Add Credential</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextInput {...register("cert_id")} label="Certification ID" />
          <p>{errors.cert_id?.message}</p>
        </div>
        <div>
          <TextInput {...register("date_issued")} label="Date Issued" />
          <p>{errors.date_issued?.message}</p>
        </div>
        <div>
          <TextInput {...register("owner")} label="Owner" />
          <p>{errors.owner?.message}</p>
        </div>
        <div>
          <TextInput {...register("expiration_date")} label="Expiration Date" />
          <p>{errors.expiration_date?.message}</p>
        </div>
        <div>
          <Select {...register("credential_type")} placeholder='Type' label="Credential Type" onChange={(_value, option) => setSelectedType(option.value)} data={[
            { value: 'univeristy', label: 'University' },
            { value: 'license', label: 'License' },
            { value: 'membership', label: 'Membership' },
            { value: 'exam', label: 'Exam' },
            { value: 'other', label: 'Other' },
          ]}>
          </Select>
          <p>{errors.credential_type?.message}</p>
        </div>
        {selectedType === 'other' && 
        <>
          <div>
            <label>Custom Credential</label>
            <input {...register("custom_cred.title")} />
            <input {...register("custom_cred.source")} />
            <input {...register("custom_cred.validation_id")} />
            {/* <p>{errors.custom_cred?.message}</p> */}
          </div>
          <div>
            <label>Created</label>
            <input {...register("created")} />
            <p>{errors.created?.message}</p>
          </div>
          <div>
            <label>Updated</label>
            <input {...register("updated")} />
            <p>{errors.updated?.message}</p>
          </div>
        </>
        }
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
}

export default AddCredential;