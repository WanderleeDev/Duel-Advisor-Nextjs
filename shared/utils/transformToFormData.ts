type FormDataType<T> = {
  [K in keyof T]: T[K];
};

export function transformToFormData<T>(object: FormDataType<T>) {
  const formData = new FormData();

  (Object.keys(object) as Array<keyof T>).forEach((key) => {
    formData.append(key as string, object[key] as string);
  });

  return formData;
}
