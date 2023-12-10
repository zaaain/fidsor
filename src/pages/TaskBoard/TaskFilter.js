import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Button, Grid } from "@mui/material";
import {useWindowSize} from 'react-use';
import FormInput from "../../components/common/FormInput";
import SelectInput from "../../components/common/SelectInput"
import {priorityOptions} from "../../helpers/constant/options"
import {taskFilterSchema} from "../../helpers/schema"

const TaskFilter = (props) => {
  const { onAdd, onFilter } = props;
  const {width} = useWindowSize()
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskFilterSchema),
  });
  return (
    <Card
      style={{
        padding: "10px 5px",
        marginBottom: "30px",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      }}
    >
      <form onSubmit={handleSubmit(onFilter)}>
        <Grid
          container
          spacing={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item md={8} sm={12} xs={12}>
          <Controller
            name="taskPriority"
            control={control}
            render={({ field }) => (
              <SelectInput
                label="Priority"
                value={field.value}
                onChange={(value) => field.onChange(value)}
                inputRef={field.ref}
                options={priorityOptions}
                error={errors.taskPriority && errors.taskPriority.message}
              />
            )}
          />
          </Grid>
          <Grid
            item
            md={2}
            sm={6}
            xs={6}
            style={{ display: "flex", justifyContent: width > 899 && "center" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="medium"
              type="submit"
            >
              Search
            </Button>
          </Grid>

          <Grid
            item
            md={2}
            sm={6}
            xs={6}
            style={{ display: "flex", justifyContent: "end" }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={onAdd}
            >
              Add New
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default TaskFilter;
