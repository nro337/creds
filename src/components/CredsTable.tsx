import { useMemo } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { Cred } from '../types/Cred';

//nested data is ok, see accessorKeys in ColumnDef below
// const data: Person[] = [
//   {
//     name: {
//       firstName: 'Zachary',
//       lastName: 'Davis',
//     },
//     address: '261 Battle Ford',
//     city: 'Columbus',
//     state: 'Ohio',
//   },
//   {
//     name: {
//       firstName: 'Robert',
//       lastName: 'Smith',
//     },
//     address: '566 Brakus Inlet',
//     city: 'Westerville',
//     state: 'West Virginia',
//   },
//   {
//     name: {
//       firstName: 'Kevin',
//       lastName: 'Yan',
//     },
//     address: '7777 Kuhic Knoll',
//     city: 'South Linda',
//     state: 'West Virginia',
//   },
//   {
//     name: {
//       firstName: 'John',
//       lastName: 'Upton',
//     },
//     address: '722 Emie Stream',
//     city: 'Huntington',
//     state: 'Washington',
//   },
//   {
//     name: {
//       firstName: 'Nathan',
//       lastName: 'Harris',
//     },
//     address: '1 Kuhic Knoll',
//     city: 'Ohiowa',
//     state: 'Nebraska',
//   },
// ];

const CredsTable = ({creds}:{creds: Cred[]}) => {

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Cred>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
      },
      {
        accessorKey: 'cert_id',
        header: 'Cert Id',
      },
      {
        accessorKey: 'credential_type',
        header: 'Credential Type',
      },
      {
        accessorKey: 'date_issued',
        header: 'Date Issued',
      },
      {
        accessorKey: 'expiration_date',
        header: 'Expiration Date',
      },
      {
        accessorKey: 'owner',
        header: 'Owner',
      },
      {
        accessorKey: 'custom_cred.id',
        header: 'Custom Cred Id',
      }
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data: creds, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    initialState: {
      columnVisibility: {
        'id': false,
        'owner': false
      }
    }
  });

  return <MantineReactTable table={table} />;
};

export default CredsTable;