interface LoginModel {
  accessKey: string
  username: string
  password: string
}

const isValidModel = (model: LoginModel): boolean => {
  return !!model.accessKey || (!!model.username && !!model.password)
}

export const login = (model: LoginModel): string => {
  if (!isValidModel(model)) {
    return "Invalid access key or credentials"
  }

  if (!!model.accessKey) {
    return "TemporaryAccessKey"
  }

  if (model.username === "admin" && model.password === "Password1") {
    return "YouHaveAdminAccess"
  }

  return "Invalid username and/or password"
}