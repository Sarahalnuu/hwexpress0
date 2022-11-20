import {TypeOf, z} from 'zod'

export const employeSchema = z.object({
    body: z.object({
        id: z.string({required_error: "ID is required !"}),
        name: z
        .string({required_error: "name is required !"}).min(3, 'You name must be more than 3 char'),
        age: z
        .number({required_error: "number is required !"})
        .min(18, 'You age must be more than 18')
        .max(60, 'You age must be less than 60'),
        salary: z.number({required_error: "salary is required !"})
        .min(10000, 'Salary must be more than 10000'),
    }),
    params: z.object({

    })
})

export type EmployeSchemaType = TypeOf<typeof employeSchema>['body']