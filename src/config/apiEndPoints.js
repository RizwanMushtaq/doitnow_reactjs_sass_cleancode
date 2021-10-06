const APIEndPoints = {}

APIEndPoints.userLogin = 'http://localhost:8090/users/verify'
APIEndPoints.userRegistration = 'http://localhost:8090/users/registerUser'

APIEndPoints.getTodosForDateSelected = 'http://localhost:8090/todos/read'
APIEndPoints.writeTodoItem = 'http://localhost:8090/todos/write'
APIEndPoints.updateDoneState = 'http://localhost:8090/todos/updateDoneState'
APIEndPoints.deleteTodoItem = 'http://localhost:8090/todos/deleteItem'
APIEndPoints.getAllTodosForUser = 'http://localhost:8090/todos/readAllItemsForUser'

export default APIEndPoints
