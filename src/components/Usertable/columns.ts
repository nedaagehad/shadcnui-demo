"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  ip_address: string
  country_code: string
  mobile_device: string
  job_title: string
  birth_date: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "first_name",
    header: "First name",
  },
  {
    accessorKey: "last_name",
    header: "Lat name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "job_title",
    header: "Job title",
  },
  {
    accessorKey: "birth_date",
    header: "Date of birth",
  },
]