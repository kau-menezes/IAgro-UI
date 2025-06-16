import { Box, Grid, Group, rem, Stack, Text, Title } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import type { Field } from "../../types/fields.types";
import { api } from "../../services/api.service";
import { UserContext } from "../../contexts/user.context";
import { CreateField } from "./components/create-field";
import { FieldCard } from "./components/field-card";

export function Fields() {

    const { user } = useContext(UserContext);
    const [fields, setFields] = useState<Field[]>([]);

    useEffect(() => {
        if(user) {
            api.get<Field[]>("/fields/company/" + user.companyId)
                .then(res => setFields(res.data));
        }
    }, [user]);

    console.log(fields)

    return (
        <Stack gap={2}>
            <Box>
                <Group>
                    <Title fw={400}>My Fields</Title>
                    <CreateField/>
                </Group>
                <Text fz={rem(20)} c={"gray"}>Manage and monitor your crop fields</Text>
            </Box>

            <Grid>
                {fields.map(field => (
                    <Grid.Col key={field.id} span={{ sm: 12, xl: 6 }}>
                        <FieldCard field={field}/>
                    </Grid.Col>
                ))}
            </Grid>
        </Stack>
    )
}