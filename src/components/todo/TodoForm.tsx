import { Button, Group, Select, TextInput, Box } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { Calendar } from "tabler-icons-react";
import type { FC } from "react";
import { useTodo } from "./useTodo";

export const TodoForm: FC = () => {
  const { state, updateValue, addTodo } = useTodo();
  return (
    <Box>
      <Group id="group">
        <TextInput
          id="text-input"
          placeholder="Todo"
          value={state.title}
          onChange={(event) =>
            updateValue({ title: event.currentTarget.value })
          }
        />
        <DatePicker
          id="date-picker"
          inputFormat="YYYY/MM/DD"
          size="sm"
          icon={<Calendar size={16} />}
          value={state.fixedDate}
          onChange={(fixedDate) => updateValue({ fixedDate })}
        />
        <Select
          id="select"
          placeholder="優先順位"
          value={state.importance}
          onChange={(importance) => updateValue({ importance })}
          data={[
            { value: "高", label: "高" },
            { value: "中", label: "中" },
            { value: "低", label: "低" },
          ]}
        />
        <Button color="gray" size="sm" variant="outline" onClick={addTodo}>
          追加
        </Button>
      </Group>
    </Box>
  );
};
