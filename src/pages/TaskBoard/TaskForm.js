import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@mui/material";
import { isEmpty } from "lodash";
import FormInput from "../../components/common/FormInput";
import SelectInput from "../../components/common/SelectInput";
import { newTaskSchema } from "../../helpers/schema";
import { priorityOptions } from "../../helpers/constant/options";

const TaskForm = (props) => {
  const {handleTask, defaultValues} = props
  // !isEmpty(defaultValues) && Object.assign(taskPriority:{label:defaultValues.taskPriority, value:defaultValues.taskPriority})
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newTaskSchema),
    defaultValues
  });


  return (
    <form onSubmit={handleSubmit(handleTask)}>
      <Grid container spacing={2} style={{ padding: "5px" }}>
        <Grid item md={12} sm={12} xs={12}>
          <Controller
            name="taskTitle"
            control={control}
            render={({ field }) => (
              <FormInput
                placeholder="Title"
                value={field.value}
                onChange={(value) => field.onChange(value)}
                inputRef={field.ref}
                type="text"
                error={errors.taskTitle && errors.taskTitle.message}
              />
            )}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
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
        <Grid item md={12} sm={12} xs={12}>
          <Controller
            name="taskDetails"
            control={control}
            render={({ field }) => (
              <FormInput
                placeholder="Details"
                value={field.value}
                onChange={(value) => field.onChange(value)}
                inputRef={field.ref}
                multiline
                type="text"
                error={errors.taskDetails && errors.taskDetails.message}
              />
            )}
          />
        </Grid>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button variant="contained" type="submit" size="large">
            Add Now
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;
