import * as yup from "yup";

export const newTaskSchema = yup.object().shape({
    taskTitle: yup.string().required("Please enter task title."),
    taskPriority:yup.string().required("Please select task priority."),
    taskDetails: yup.string().required("Please enter task detail."),
});

export const taskFilterSchema = yup.object().shape({
    taskPriority:yup.string().required("Please select task priority."),
});